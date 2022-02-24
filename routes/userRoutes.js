const express = require("express");
const userController = require("../controllers/userController");
const userRouter = express.Router();
const passport = require("passport");

userRouter.get("/", userController.index);
userRouter.post("/home", userController.logIn);

userRouter.get("/:username", userController.show);

userRouter.post("/:username", userController.following);

/* userRouter.post(
  "/home",
  passport.authenticate("local", {
    successRedirect: "/home",
    failureRedirect: "/portal",
    failureFlash: true,
  }),
); */

module.exports = userRouter;
