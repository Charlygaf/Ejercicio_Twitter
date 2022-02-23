const express = require("express");
const userController = require("../controllers/userController");
const publicController = require("../controllers/publicController");
const publicRouter = express.Router();
// Rutas del Públicas:

/* const userController = require("./userController"); */

//publicRouter.get("/", userController.index);

publicRouter.get("/", publicController.index);

module.exports = publicRouter;
