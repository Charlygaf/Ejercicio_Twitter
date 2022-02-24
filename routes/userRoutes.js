const express = require("express");
const userController = require("../controllers/userController");
const userRouter = express.Router();
const passport = require("passport");

userRouter.get("/home", userController.index);

userRouter.post(
  "/login",
  passport.authenticate("local", {
    successReturnToOrRedirect: "/home",
    failureRedirect: "/",
    failureFlash: true,
  }),
);

userRouter.get("/:username", userController.show);

userRouter.post("/:username", userController.following);

userRouter.delete("/logout", userController.logout);

module.exports = userRouter;
