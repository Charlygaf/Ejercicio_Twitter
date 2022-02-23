const express = require("express");

const userController = require("../controllers/userController");
const userRouter = express.Router();

userRouter.get("/home", userController.index);

// userRouter.get("/user/login", userController.logIn);
userRouter.get("/:username", userController.show);

userRouter.get("/registro", userController.create);
userRouter.post("/registro", userController.store);

module.exports = userRouter;
