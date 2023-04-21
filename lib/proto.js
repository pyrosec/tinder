"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.protocol = void 0;
const protobufjs_1 = __importDefault(require("protobufjs"));
const api = require("./api.json");
const protocol = protobufjs_1.default.Root.fromJSON(api).nested;
exports.protocol = protocol;
//# sourceMappingURL=proto.js.map