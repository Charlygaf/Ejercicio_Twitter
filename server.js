require("dotenv").config();

const session = require("express-session");
const express = require("express");
const passport = require("./passport");
const routes = require("./routes");
const dbInitialSetup = require("./dbInitialSetup");

const mongoose = require("mongoose");
const methodOverride = require("method-override");
const APP_PORT = process.env.APP_PORT || 3000;
const app = express();
const MongoStore = require("connect-mongo");

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    saveUninitialized: false, // don't create session until something stored
    resave: false, //don't save session if unmodified
    store: MongoStore.create({
      mongoUrl: process.env.DB_CONNECTION_STRING,
    }),
  }),
);

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(methodOverride("_method"));

passport(app);

routes(app);

mongoose.connect(process.env.DB_CONNECTION_STRING);
mongoose.connection
  .once("open", () => console.log("¡Conexión con la base de datos establecida!"))
  .on("error", (error) => console.log(error));

// dbInitialSetup();

app.listen(APP_PORT, () =>
  console.log(`\n[Express] Servidor corriendo en el puerto ${APP_PORT}!\n`),
);
