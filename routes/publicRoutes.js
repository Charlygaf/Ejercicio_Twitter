const express = require("express");

const userController = require("../controllers/userController");
const publicRouter = express.Router();
// Rutas del Públicas:

/* const userController = require("./userController"); */

publicRouter.get("/", userController.index);

module.exports = publicRouter;
