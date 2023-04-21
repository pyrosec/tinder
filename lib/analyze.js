"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractClassNames = exports.parseFileForApi = exports.parseProtobuf = exports.parseEnum = exports.processSmali = exports.findClass = exports.parsedToMessage = exports.parseJsonSchema = exports.logTypeScriptMethod = exports.prependSlashMaybe = exports.logTypeScriptInterface = exports.parseNestedJsonSchema = exports.nullIfThrows = exports.lookupJsonFile = exports.toJsonType = exports.getRootSmaliDirectory = exports.getApiClientSmaliData = void 0;
const glob_1 = __importDefault(require("glob"));
const path_1 = __importDefault(require("path"));
const fs_extra_1 = __importDefault(require("fs-extra"));
const change_case_1 = require("change-case");
const removeDollarSign = (s) => s.replace(/\$/g, '');
async function getApiClientSmaliData() {
    const cwd = process.cwd();
    const files = await new Promise((resolve, reject) => (0, glob_1.default)(path_1.default.join(cwd, "**", "*.smali"), {}, (err, files) => err ? reject(err) : resolve(files)));
    const result = [];
    const folder = [];
    for (const file of files) {
        const data = await fs_extra_1.default.readFile(file, "utf8");
        if (data.match(/retrofit2\/http\/(?:GET|POST|PUT|DELETE|PATCH|UPDATE)/))
            result.push({ file, data });
        folder.push(file);
    }
    return result;
}
exports.getApiClientSmaliData = getApiClientSmaliData;
async function getRootSmaliDirectory() {
    let dir = process.cwd();
    while (dir !== "/") {
        if ((await fs_extra_1.default.readdir(dir)).find((v) => v.match(/smali_classes\d+/)))
            return dir;
        else
            dir = path_1.default.parse(dir).dir;
    }
    return null;
}
exports.getRootSmaliDirectory = getRootSmaliDirectory;
const JSON_TYPES = {
    Integer: 'number',
    String: 'string',
    Double: 'number',
    Float: 'number',
    Boolean: 'boolean',
    I: "number",
    Z: "boolean",
    B: "Buffer",
    S: "number",
    C: "string",
    J: "number",
    F: "number",
    D: "number",
};
const JSON_TYPES_LOOKUP = Object.entries(JSON_TYPES).reduce((r, [key, value]) => {
    r[value] = key;
    return r;
}, {});
const toJsonType = (t) => JSON_TYPES[t] || t;
exports.toJsonType = toJsonType;
const seenJson = {};
async function lookupJsonFile(klass) {
    const globbed = await new Promise((resolve, reject) => (0, glob_1.default)(path_1.default.join(process.cwd(), '**', klass + '.smali'), {}, (err, files) => err ? reject(err) : resolve(files)));
    const filepath = globbed.find((v) => v.match('model')) || globbed[0];
    if (!filepath)
        return '';
    return await fs_extra_1.default.readFile(filepath, 'utf8');
}
exports.lookupJsonFile = lookupJsonFile;
async function nullIfThrows(p) {
    try {
        return await p;
    }
    catch (e) {
        return null;
    }
}
exports.nullIfThrows = nullIfThrows;
async function parseNestedJsonSchema(content, collected) {
    collected = collected || [];
    const schema = await nullIfThrows(parseJsonSchema(content));
    collected.push(schema);
    if (!schema)
        return collected.filter(Boolean);
    for (const item of schema.fields) {
        for (const pin of ['key', 'value']) {
            if (item.description[pin] && !JSON_TYPES_LOOKUP[item.description[pin]])
                collected.push(await nullIfThrows(parseJsonSchema(await lookupJsonFile(item.description[pin]))));
        }
    }
    return collected.filter(Boolean);
}
exports.parseNestedJsonSchema = parseNestedJsonSchema;
function coerceUnknownToString(t) {
    if (t === 'unknown')
        return 'string';
    return removeDollarSign(t);
}
function logTypeScriptInterface(schema) {
    console.log('interface I' + removeDollarSign(schema.name) + ' {\n' + schema.fields.map((v) => '  ' + v.name + '?: ' + (v.description.type === 'field' ? coerceUnknownToString(v.description.value) : v.description.type === 'list' ? coerceUnknownToString(v.description.value) + '[]' : v.description.type === 'map' ? '{ [key: string]: ' + coerceUnknownToString(v.description.value) + '}' : coerceUnknownToString(v.description.value)) + ';').join('\n') + '\n}');
}
exports.logTypeScriptInterface = logTypeScriptInterface;
function prependSlashMaybe(s) {
    if (s[0] === '/')
        return s;
    return '/' + s;
}
exports.prependSlashMaybe = prependSlashMaybe;
let apiProto;
async function logTypeScriptMethod(apiMethod) {
    apiProto = apiProto || await fs_extra_1.default.readFile(path_1.default.join(__dirname, 'api.json'), 'utf8');
    const requestType = apiMethod.classNames.request;
    const responseType = apiMethod.classNames.response;
    const isProtobuf = apiProto.match(requestType);
    const callPayloadCode = isProtobuf ? 'protocol.' + requestType + '.encode(o).finish()' : 'JSON.stringify(o)';
    const fetchConfig = '{ method: \'POST\', body: ' + callPayloadCode + ' }';
    const fnParamType = isProtobuf ? 'any' : requestType && requestType !== 'any' ? 'I' + requestType : 'any';
    const fnResponseType = isProtobuf ? 'Promise<any>' : responseType ? 'I' + responseType : 'Promise<any>';
    const returnStatement = isProtobuf ? responseType && responseType !== 'NetworkResult' ? 'return response;' : 'return protocol.' + responseType + '.decode(await (await response.blob()).arrayBuffer());' : 'return await response.json();';
    console.log('async ' + (0, change_case_1.camelCase)(apiMethod.route.split('/').filter((v) => !['v2', 'v1', '1', 'v3'].includes(v)).join('_')).replace(/_/g, '') + '(o: ' + 'I' + removeDollarSign(fnParamType) + '): ' + fnResponseType + ' {\n  ' + 'const response = await this._call(\'https://api.gotinder.com' + prependSlashMaybe(apiMethod.route) + '\', ' + fetchConfig + ');\n  ' + returnStatement + '\n}');
}
exports.logTypeScriptMethod = logTypeScriptMethod;
async function parseJsonSchema(content) {
    const lines = content.split(/\n/g);
    const name = afterSlash(lines.find((v) => v.match('.class public'))).replace(';', '');
    if (seenJson[name])
        return null;
    seenJson[name] = true;
    let capture = false;
    let inParam = false;
    let fields = [];
    for (const line of lines) {
        if (line.match('.method public constructor'))
            capture = true;
        else if (line.match('.param')) {
            inParam = true;
        }
        else if (inParam && line.match('name = ')) {
            fields.push(JSON.parse(line.match(/"\S+"/g)[0]));
            inParam = false;
        }
        else if (line.match('.end method'))
            break;
    }
    const lineNumber = lines.findIndex((v) => v.match('.method public constructor'));
    const length = lines.slice(lineNumber).findIndex((v) => v.match('.end method'));
    const match = lines.slice(lineNumber, lineNumber + length).join('\n').match(/value\s+=\s+(\{[^\}]*\})/m);
    let signature;
    let segment;
    let types = [];
    try {
        const json = match[0].substr(7).replace("{", "[").replace("}", "]");
        signature = JSON.parse(json);
        let isList = false;
        let isMap = false;
        let mapKey = null;
        let skipNext = false;
        for (const segment of signature) {
            if (!segment.match(/\w/) || skipNext) {
                skipNext = false;
            }
            else if (segment === 'Ljava/util/List<')
                isList = true;
            else if (segment === 'Ljava/util/Map<')
                isMap = true;
            else if (isMap) {
                mapKey = (0, exports.toJsonType)(afterSlash(segment).replace(';', ''));
                isMap = false;
            }
            else if (mapKey) {
                types.push({
                    type: 'object',
                    key: (0, exports.toJsonType)(mapKey),
                    value: (0, exports.toJsonType)(afterSlash(segment).replace(';', ''))
                });
                mapKey = null;
                skipNext = true;
            }
            else if (isList) {
                types.push({
                    type: 'list',
                    value: (0, exports.toJsonType)(afterSlash(segment).replace(';', ''))
                });
                isList = false;
                skipNext = true;
            }
            else {
                types.push({
                    type: 'field',
                    value: (0, exports.toJsonType)(afterSlash(segment).replace(';', ''))
                });
            }
        }
    }
    catch (e) {
        types = fields.map((v) => ({
            type: 'field',
            value: 'unknown'
        }));
    }
    return {
        name,
        fields: fields.map((v, i) => ({
            name: v,
            description: types[i] || { type: 'field', value: 'unknown' }
        }))
    };
}
exports.parseJsonSchema = parseJsonSchema;
async function searchAndTransform(fields, filePath) {
    const content = fs_extra_1.default.readFileSync(filePath, "utf8");
    const metadata = /d2\s=[\s\S]+?}/g;
    const set = content.match(metadata);
    const fieldPattern = /^\(L[^;].*\)|^\([A-Z]\)|^\([A-Z]\)V$/g;
    const lines = set[0].split("\n");
    const newArr = [];
    lines.forEach(function (line) {
        newArr.push(line.replace(`"`, "").replace(`"`, "").replace(`,`, "").trim());
    });
    let smaliTypes = {};
    newArr.forEach(function (line) {
        let fieldType = line.match(fieldPattern);
        fieldType ? (smaliTypes[fieldType] = newArr.indexOf(line)) : null;
    });
    let fieldNameIndex;
    return fields
        .map(([fieldNumber, fieldName]) => {
        fieldNameIndex = newArr.findIndex((line) => line === fieldName);
        if (!fieldNameIndex) {
            return null;
        }
        let minDifference = Infinity;
        let closestIndex;
        for (const [key, value] of Object.entries(smaliTypes)) {
            const difference = Number(fieldNameIndex) - Number(value);
            if (difference > 0 && difference < minDifference) {
                minDifference = difference;
                closestIndex = value;
            }
        }
        if (closestIndex === undefined) {
            return null;
        }
        const fieldType = Object.keys(smaliTypes).find((key) => smaliTypes[key] === closestIndex);
        const parts = lines[fieldNameIndex]
            .replace(`"`, "")
            .replace(`"`, "")
            .replace(`,`, "")
            .trim();
        return [fieldNumber, parts, fieldType];
    })
        .filter(Boolean);
}
const ln = (v) => {
    console.log(v);
    return v;
};
async function handleRepeatedFields(array, filePath) {
    const fileContent = fs_extra_1.default.readFileSync(filePath, "utf8");
    for (const field of array) {
        const [_, fieldName, fieldType] = field;
        const methodRegex = new RegExp((`\.method public addAll${(0, change_case_1.pascalCase)(fieldName)}\\(Ljava\\/lang\\/Iterable;\\)`));
        const methodMatch = methodRegex.exec(fileContent);
        const methodIndex = fileContent.indexOf(methodMatch);
        if (methodIndex === -1) {
            return;
        }
        const signatureStart = fileContent.indexOf(".annotation system Ldalvik/annotation/Signature;", methodIndex);
        if (signatureStart === -1) {
            return;
        }
        const signatureEnd = fileContent.indexOf(".end annotation", signatureStart);
        if (signatureEnd === -1) {
            return;
        }
        const signature = fileContent.slice(signatureStart, signatureEnd);
        const typeMatch = signature.match(/Ljava\/lang\/(?:Iterable<)?([^;]+)/);
        if (!typeMatch) {
            return;
        }
        field[2] = `repeated ${await toType(afterSlash(typeMatch[1])
            .replace(")", "")
            .replace(";", "")
            .replace("(", ""))}`;
    }
}
let oneoftext;
function handleOneOf(klass, fields, filepath) {
    let oneOffValueName = "";
    let oneOffFields = {};
    const contents = fs_extra_1.default.readFileSync(filepath, "utf8");
    const lines = contents.split("\n");
    for (const line of lines) {
        if (line.startsWith(".field private") && line.includes("Case_:I")) {
            const name = line.split(" ");
            oneOffValueName = name[2].split("Ca")[0];
            break;
        }
    }
    if (!oneOffValueName) {
        return [oneOffFields, false, oneOffValueName];
    }
    const oneOffPath = "$" + (0, change_case_1.capitalCase)(oneOffValueName) + "Case";
    const oneOffFilepath = filepath.replace(klass + ".smali", klass + oneOffPath + ".smali");
    const oneOffContents = fs_extra_1.default.readFileSync(oneOffFilepath, "utf8");
    const oneOffLines = oneOffContents.split("\n");
    let found = false;
    for (const [, fieldName] of fields) {
        found = false;
        for (const line of oneOffLines) {
            if (line.startsWith(".field public static final enum") &&
                line.includes(`${(0, change_case_1.snakeCase)(fieldName).toUpperCase()}:`)) {
                found = true;
                break;
            }
        }
        oneOffFields[fieldName] = found;
    }
    return [oneOffFields, true, oneOffValueName];
}
function writeOneoff(isOneOf) {
    if (isOneOf[1] && !oneoftext) {
        oneoftext = true;
        return false;
    }
    return true;
}
async function parsedToMessage(o) {
    return `message ${o.class} {\n${(await mapSeries(o.fields, async ([number, name, type]) => '  ' + await toProtobufType(type) + ' ' + (0, change_case_1.snakeCase)(name) + ' = ' + String(number) + ';')).join('\n')}\n}`;
}
exports.parsedToMessage = parsedToMessage;
function buildOneOfFields(meta, oneoffields) {
    let newField = [];
    meta.map(([number, name, type]) => {
        if (oneoffields[0][name]) {
            newField.push([number, name, type]);
        }
    });
    return newField;
}
function checkOneOfPart(fieldName, oneOfField) {
    if (oneOfField[0][fieldName]) {
        return true;
    }
    return false;
}
const classSeen = {};
const mapSeries = async (ary, fn) => {
    const results = [];
    let i = 0;
    for (const item of ary) {
        results.push(await fn(item, i, ary));
        i++;
    }
    return results;
};
async function findClass(klass) {
    oneoftext = false;
    if (classSeen[klass])
        return;
    classSeen[klass] = true;
    const dir = await getRootSmaliDirectory();
    const files = (await new Promise((resolve, reject) => {
        (0, glob_1.default)(path_1.default.join(dir, "**", klass + ".smali"), {}, (err, result) => err ? reject(err) : resolve(result));
    }));
    const file = files.find((v) => v.match('generated')) || files[0];
    if (!file || file.match(/\/protobuf\//))
        return;
    return await processSmali(file, klass);
}
exports.findClass = findClass;
async function processSmali(file, klass) {
    const protomatch = ".field private memoizedIsInitialized";
    try {
        const content = await fs_extra_1.default.readFile(file, "utf8");
        const lines = content.split("\n");
        const superLine = lines.find((v) => v.match(".super Ljava/lang/Enum;"));
        if (superLine)
            return await parseEnum(content);
        let updatedMeta;
        if (content.includes(protomatch)) {
            const fields = await parseProtobuf(await fs_extra_1.default.readFile(file, "utf8"), file);
            const schemed = await searchAndTransform(fields["fields"], file.replace(klass + ".smali", klass + "Kt$Dsl.smali"));
            updatedMeta = (await handleRepeatedFields(schemed, file.replace(klass + ".smali", klass + "$Builder.smali")))
                ? await handleRepeatedFields(schemed, file.replace(klass + ".smali", klass + "$Builder.smali"))
                : schemed;
            updatedMeta = updatedMeta ? updatedMeta : schemed;
            const oneOf = await handleOneOf(klass, updatedMeta, file);
            if (oneOf[1] == true) {
                const oneOfParts = buildOneOfFields(updatedMeta, oneOf);
            }
            let inOneOf;
            console.log("message " +
                fields["class"].replace(/\$/g, "") +
                " {\n" +
                (await mapSeries(updatedMeta, async ([number, name, type]) => {
                    if (checkOneOfPart(name, oneOf) == false) {
                        const result = (inOneOf ? "}\n" : "") +
                            "  " +
                            (await toType(afterSlash(type)
                                .replace(")", "")
                                .replace(";", "")
                                .replace("(", ""))) +
                            " " +
                            (0, change_case_1.snakeCase)(name) +
                            " = " +
                            String(number) +
                            ";";
                        inOneOf = false;
                        return result;
                    }
                    else {
                        if (!inOneOf) {
                            const result = "\n\n  " +
                                "oneof " +
                                oneOf[2] +
                                " {\n" +
                                "  " +
                                "  " +
                                (await toType(afterSlash(type)
                                    .replace(")", "")
                                    .replace(";", "")
                                    .replace("(", ""))) +
                                " " +
                                (0, change_case_1.snakeCase)(name) +
                                " = " +
                                String(number) +
                                ";";
                            inOneOf = true;
                            return result;
                        }
                        else {
                            return ("  " +
                                "  " +
                                (await toType(afterSlash(type)
                                    .replace(")", "")
                                    .replace(";", "")
                                    .replace("(", ""))) +
                                " " +
                                (0, change_case_1.snakeCase)(name) +
                                " = " +
                                String(number) +
                                ";");
                        }
                    }
                })).join("\n") +
                `${inOneOf ? "\n   }" : ""}` +
                "\n}");
        }
        else {
            return;
        }
    }
    catch (e) {
        console.error(e);
    }
}
exports.processSmali = processSmali;
const TYPES = {
    I: "int32",
    Z: "bool",
    B: "bytes",
    S: "short",
    C: "char",
    J: "int64",
    F: "float",
    D: "double",
};
const PROTOBUF_TYPES = {
    I: "int32",
    Z: "bool",
    B: "bytes",
    S: "short",
    C: "char",
    J: "int64",
    F: "float",
    D: "double",
    BoolValue: "BoolValue",
    BytesValue: "BytesValue",
    Int32Value: "Int32Value",
    Int64Value: "Int64Value",
    FloatValue: "FloatValue",
    StringValue: "StringValue",
    DoubleValue: "DoubleValue",
    String: "string",
    ByteString: "bytes",
    Timestamp: "Timestamp"
};
const toType = async (type) => {
    if (PROTOBUF_TYPES[type])
        return PROTOBUF_TYPES[type];
    await findClass(type);
    return type;
};
const toProtobufType = async (type) => {
    if (PROTOBUF_TYPES[type])
        return PROTOBUF_TYPES[type];
    await findClass(type);
    return type;
};
const uniq = (ary) => {
    const seen = {};
    return ary.filter((v) => {
        const hasSeen = seen[v];
        seen[v] = true;
        return !hasSeen;
    });
};
async function parseEnum(s) {
    const lines = s.split("\n");
    const klass = afterSlash(lines.find((v) => v.match(/^\.class/))).replace(";", "");
    const fields = lines
        .filter((v) => v.match(/^\.field\spublic\sstatic\sfinal/))
        .map((v) => {
        if (v.match("enum"))
            return null;
        const parts = v.match(/final\s(.*)_VALUE:(.*)\s=\s(0x\w+)$/);
        if (parts)
            return [Number(parts[3]), String(parts[1])];
        else {
            const pieces = v.match(/final\s(.*)_VALUE/);
            return [0, String(pieces[1])];
        }
    })
        .filter(Boolean)
        .sort(([a], [b]) => a - b);
    if (!fields.length)
        return;
    console.log("enum " +
        klass.replace(/\$/g, "") +
        " {\n  option allow_alias = true;\n" +
        fields.map((v) => "  " + v[1] + " = " + v[0] + ';').join("\n") +
        "\n}");
}
exports.parseEnum = parseEnum;
async function parseProtobuf(s, path) {
    const lines = s.split("\n");
    const klass = afterSlash(lines.find((v) => v.match(/^\.class/))).replace(";", "");
    const superLine = lines.find((v) => v.match(".super Ljava/lang/Enum;"));
    if (superLine) {
        return await parseEnum(s);
    }
    const fields = lines
        .filter((v) => v.match(/^\.field\spublic\sstatic\sfinal/))
        .map((v) => {
        const parts = v.match(/final\s(.*)_FIELD_NUMBER:(.*)\s=\s(0x\w+)$/);
        return [
            Number(parts[3]),
            String(parts[1])
                .toLowerCase()
                .replace(/_([a-z])/g, (match, p1) => p1.toUpperCase()),
            parts[2],
        ];
    })
        .sort(([a], [b]) => a - b);
    return { class: klass, fields: fields };
}
exports.parseProtobuf = parseProtobuf;
function parseFileForApi(s) {
    const lines = s.data.split("\n");
    const groups = [];
    let thisGroup = [];
    lines.forEach((v) => {
        if (v.match(".method")) {
            if (thisGroup.length)
                groups.push(thisGroup);
            thisGroup = [];
        }
        thisGroup.push(v);
    });
    if (thisGroup.length)
        groups.push(thisGroup);
    const methods = groups.map((v) => v.join("\n"));
    const apiMethods = methods.filter((v) => v.match("retrofit2/http"));
    return {
        ...s,
        methods: apiMethods
            .map((v) => {
            const match = v.match(/value\s+=\s+(\{[^\}]*\})/m);
            if (!match)
                return null;
            let segment;
            const json = match[0].substr(7).replace("{", "[").replace("}", "]");
            try {
                segment = JSON.parse(json);
            }
            catch (e) {
                return null;
            }
            const lines = v.split("\n");
            const i = lines.findIndex((v) => v.match(/retrofit2\/http\/(?:PUT|DELETE|POST|GET|PATCH|UPDATE|UPGRADE)/));
            return {
                route: (() => {
                    try {
                        return JSON.parse(lines[i + 1].match(/"([^"]*)"/)[0]);
                    }
                    catch (e) {
                        return null;
                    }
                })(),
                segment,
            };
        })
            .filter(Boolean),
    };
}
exports.parseFileForApi = parseFileForApi;
function afterSlash(s) {
    const parts = s.split(/\//g);
    return parts[parts.length - 1];
}
function extractClassNames(signature) {
    const requestParameter = signature.find((v) => v.match(/(?:Request|Body)/)) || null;
    const request = requestParameter && afterSlash(requestParameter).replace(";", "");
    const responseParameter = signature
        .slice()
        .reverse()
        .find((v) => v.match(/(?:Result|Response)/));
    const match = (responseParameter &&
        responseParameter.match(/(?:\w*(?:Response|Result)\w*)/)[0]) ||
        null;
    return { request, response: match };
}
exports.extractClassNames = extractClassNames;
//# sourceMappingURL=analyze.js.map