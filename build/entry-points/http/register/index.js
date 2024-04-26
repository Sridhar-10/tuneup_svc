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

// src/entry-points/http/register/index.ts
var register_exports = {};
__export(register_exports, {
  default: () => register_default
});
module.exports = __toCommonJS(register_exports);

// src/data-access/models/register.model.ts
var import_mongoose = __toESM(require("mongoose"));
var import_uuid = require("uuid");
var registerSchema = new import_mongoose.default.Schema({
  student_id: {
    type: String,
    required: true,
    default: (0, import_uuid.v4)()
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  mobile_number: {
    type: String,
    required: true
  },
  college_name: {
    type: String,
    required: true
  },
  overall_cgpa: {
    type: String,
    required: true
  },
  course: {
    type: String,
    default: "Front end",
    enum: ["Front end", "Python", "My SQL", "Digital Marketing"]
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});
var Register_Model = import_mongoose.default.model("Student", registerSchema);

// src/entry-points/http/register/index.ts
var advertisement = async (fastify, opts) => {
  fastify.withTypeProvider().get("/", async (request, reply) => {
    try {
      const response = await Register_Model.find();
      return response;
    } catch (error) {
      return error;
    }
  }).post("/", async (request, reply) => {
    try {
      const { body } = request;
      const new_student = await Register_Model.create(body);
      if (new_student) {
        return {
          message: "Registered successfully",
          data: new_student
        };
      } else {
        return {
          message: "Something went wrong"
        };
      }
    } catch (error) {
      return error;
    }
  });
};
var register_default = advertisement;
//# sourceMappingURL=index.js.map