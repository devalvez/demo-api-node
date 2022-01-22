const express = require("express");
const routes = express.Router();

const path = require('path');

const UserController = require("./app/controller/UserController");

routes.get("/", function(req, res) {
    res.sendFile(path.join(__dirname+'/html/welcome.html'));
});

routes.get("/request-exemple", function(req, res) {
    res.sendFile(path.join(__dirname+'/html/request.html'));
});

routes.get("/user", UserController.index);
routes.get("/user/:id", UserController.show);
routes.post("/user", UserController.store);
routes.put("/user/:id/update", UserController.update);

module.exports = routes;
