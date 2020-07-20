require('./setup/passport-setup');

const express = require('express');
const cors = require("cors");
const session = require("express-session");
const MongoStore = require('connect-mongo')(session);
const passport = require('passport');

const app = express();

app.use(cors());
app.use(session({
  secret: "my-deep-little-secret",
  resave: false,
  saveUninitialized: false,
  store: new MongoStore({ url: "mongodb://localhost/connect-mongo-session" })
}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(passport.session());

app.use("/auth", require("./routes/auth"));

//Error handler
app.use((err, req, res, next) => {
  res.send({ error: true, ...err });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`⭐ http://localhost:${PORT}`));