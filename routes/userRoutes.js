const express = require("express");

const userController = require("../controllers/userController");
const userRouter = express.Router();

userRouter.get("/home", userController.index);

userRouter.post("/login", userController.logIn);

userRouter.get("/registro", userController.create);
userRouter.post("/registro", userController.store);
userRouter.post("/:username", userController.following);
userRouter.get("/:username", userController.show);
module.exports = userRouter;
