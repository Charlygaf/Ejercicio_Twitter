const express = require("express");
const publicRouter = express.Router();
const userController = require("../controllers/userController");
// Rutas del Públicas:
// ...

/* const userController = require("./userController"); */

publicRouter.get("/usuarios", userController.index);

publicRouter.get("/usuarios/crear", userController.showNewUserForm);

publicRouter.get("/usuarios/crear/:id", userController.showCreate);

publicRouter.post("/usuarios", userController.store);

publicRouter.get("/usuarios/editar/:id", userController.Showedit);

publicRouter.post("/usuarios/editar/:id", userController.update);

publicRouter.delete("/usuarios/:id", userController.destroy);

module.exports = publicRouter;
