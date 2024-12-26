const express = require("express");
require("dotenv").config();
const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/home", (req, res) => {
  res.send("This is home page");
});

app.get("/login", (req, res) => {
  res.send("<h1>Jai baba ki</h1>");
});

app.get("/youtube", (req, res) => {
  res.send("<h2>Chai aur code</h2>");
});

app.listen(process.env.PORT, () => {
  console.log(`Listening on port : ${port}`);
});
