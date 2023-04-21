export declare function getApiClientSmaliData(): Promise<any[]>;
export declare function getRootSmaliDirectory(): Promise<string>;
export declare const toJsonType: (t: any) => any;
export declare function lookupJsonFile(klass: string): Promise<any>;
export declare function nullIfThrows(p: Promise<any>): Promise<any>;
export declare function parseNestedJsonSchema(content: string, collected?: any): Promise<any>;
export declare function logTypeScriptInterface(schema: any): void;
export declare function prependSlashMaybe(s: string): string;
export declare function logTypeScriptMethod(apiMethod: any): Promise<void>;
export declare function parseJsonSchema(content: string): Promise<{
    name: string;
    fields: {
        name: any;
        description: any;
    }[];
}>;
export declare function parsedToMessage(o: any): Promise<string>;
export declare function findClass(klass: string): Promise<void>;
export declare function processSmali(file: string, klass: string): Promise<void>;
export declare function parseEnum(s: string): Promise<void>;
export declare function parseProtobuf(s: string, path: string): Promise<void | {
    class: string;
    fields: (string | number)[][];
}>;
export declare function parseFileForApi(s: any): any;
export declare function extractClassNames(signature: string[]): {
    request: string;
    response: string;
};
