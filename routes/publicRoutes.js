const express = require("express");
const publicRouter = express.Router();
const userController = require("../controllers/userController");
// Rutas del Públicas:

/* const userController = require("./userController"); */

publicRouter.get("/", userController.index);

module.exports = publicRouter;
