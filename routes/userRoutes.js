const express = require("express");

const userController = require("../controllers/userController");
const userRoutes = express.Router();

userRoutes.get("/:username", userController.show);

module.exports = userRoutes;