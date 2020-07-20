require('./setup/passport-setup');

const express = require('express');
const cors = require("cors");
const app = express();

app.use(cors());

const session = require("express-session");
const bodyParser = require("body-parser");
const passport = require('passport');

app.use(session({ secret: "my-deep-little-secret", resave: false, saveUninitialized: false }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(passport.session());

app.use("/auth", require("./routes/auth"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`⭐ http://localhost:${PORT}`));