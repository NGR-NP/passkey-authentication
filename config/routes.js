const routes = require("express").Router();

const pages = new (require("../app/controllers/pages"))();
const auth = new (require("../app/controllers/auth"))();
const admin = new (require("../app/controllers/admin"))();

routes.get("/", pages.welcome, admin.dashboard);
routes.get("/login", auth.login);
routes.get("/register", auth.register);

module.exports = routes;
