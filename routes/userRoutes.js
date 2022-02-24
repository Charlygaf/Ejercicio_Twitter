const express = require("express");
const userController = require("../controllers/userController");
const userRouter = express.Router();
const passport = require("passport");
const authenticateUser = require("../middleware/authenticateUser");

userRouter.get("/home", authenticateUser, userController.index);

userRouter.post(
  "/login",
  passport.authenticate("local", {
    successReturnToOrRedirect: "/home",
    failureRedirect: "/",
    failureFlash: true,
  }),
);

userRouter.get("/:username", authenticateUser, userController.show);

userRouter.post("/:username", authenticateUser, userController.following);

userRouter.delete("/logout", userController.logout);

module.exports = userRouter;
