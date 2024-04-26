"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/plugins/swagger.ts
var swagger_exports = {};
__export(swagger_exports, {
  default: () => swagger_default
});
module.exports = __toCommonJS(swagger_exports);
var import_fastify_plugin = __toESM(require("fastify-plugin"));
var import_swagger = __toESM(require("@fastify/swagger"));
var import_swagger_ui = __toESM(require("@fastify/swagger-ui"));
var swagger_default = (0, import_fastify_plugin.default)(async (fastify) => {
  fastify.register(import_swagger.default, {
    openapi: {
      info: {
        title: "",
        description: "",
        version: "0.1.0"
      },
      servers: [
        {
          url: "http://localhost:4200"
        }
      ]
    },
    hideUntagged: false
  });
  fastify.register(import_swagger_ui.default);
});
//# sourceMappingURL=swagger.js.map