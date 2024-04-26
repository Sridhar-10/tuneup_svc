// src/plugins/cors.ts
import fp from "fastify-plugin";
import cors from "@fastify/cors";
var cors_default = fp(async (fastify) => {
  await fastify.register(cors, {
    origin: "*"
  });
});
export {
  cors_default as default
};
//# sourceMappingURL=cors.js.map