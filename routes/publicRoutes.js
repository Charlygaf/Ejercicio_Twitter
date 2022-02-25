const express = require("express");
const userController = require("../controllers/userController");
const publicController = require("../controllers/publicController");
const publicRouter = express.Router();
const alreadyLogged = require("../middleware/alreadyLogged");
// Rutas del Públicas:

publicRouter.get("/", alreadyLogged, publicController.index);
publicRouter.get("/registro", userController.create);
publicRouter.post("/registro", userController.store);

//publicRouter.get("/*", publicController.error404);
module.exports = publicRouter;
