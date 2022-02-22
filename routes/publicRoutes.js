const express = require("express");

const userController = require("../controllers/userController");
const publicRouter = express.Router();
// Rutas del Públicas:

/* const userController = require("./userController"); */

//publicRouter.get("/", userController.index);

//publicRouter.get("/", userController.index);

publicRouter.get("/new-user", userController.create);

publicRouter.post("/new-user", userController.store);

module.exports = publicRouter;
