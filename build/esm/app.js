// src/app.ts
import { join } from "path";
import AutoLoad from "@fastify/autoload";
import { TypeBoxValidatorCompiler } from "@fastify/type-provider-typebox";

// src/data-access/config/connect-to-db.ts
import mongo from "mongoose";
var connectDb = () => {
  mongo.connect(
    process.env.MONGO_CONNECTION_STRING || "mongodb://127.0.0.1:27017/new_collection",
    {}
  ).then((res) => {
    console.log("mongodb connected successfully");
  }).catch((err) => {
    console.log(err, "-->");
  });
};

// src/app.ts
var options = {};
var app = async (fastify, opts) => {
  void fastify.setValidatorCompiler(TypeBoxValidatorCompiler);
  void fastify.register(AutoLoad, {
    dir: join(__dirname, "plugins"),
    options: opts
  });
  void fastify.register(AutoLoad, {
    dir: join(__dirname, "./entry-points/http/"),
    options: opts
  });
  connectDb();
};
var app_default = app;
export {
  app,
  app_default as default,
  options
};
//# sourceMappingURL=app.js.map