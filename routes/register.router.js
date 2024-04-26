const {
  getStudents,
  CreateStudents,
} = require("../controller/register.controller");

module.exports = function (fastify, opts, done) {
  const routes = [
    {
      method: "GET",
      url: "/",
      handler: getStudents,
    },
    {
      method: "POST",
      url: "/",
      handler: CreateStudents,
    },
  ];

  routes.forEach((route) => fastify.route(route));
  done();
};
