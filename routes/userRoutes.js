const express = require("express");

const userController = require("../controllers/userController");
const userRoutes = express.Router();

userRoutes.get("/:username", userController.show);

userRoutes.get("/login", userController.logIn);

module.exports = userRoutes;
