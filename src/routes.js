const express = require("express");
const routes = express.Router();

const UserController = require("./app/controller/UserController");

routes.get("/", UserController.index);
routes.post("/", UserController.store);

module.exports = routes;
