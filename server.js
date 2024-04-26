const fastify = require("fastify")({ logger: true });
const cors = require("fastify-cors");

const { dbConnect } = require("./config/db");

fastify.register(require("./routes/register.router"), {
  prefix: "/register",
});

fastify.register(cors, {
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
});

dbConnect();

const start = async () => {
  try {
    fastify.listen({ port: 8010 });
    console.log("connected");
  } catch (err) {
    fastify.log.error(err);
    console.log("Not connected");
  }
};
start();
