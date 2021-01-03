const express = require("express");
const status = require("http-status");
const appMiddleware = require("./config/loader");

const { port } = require("./config");

const app = express();
appMiddleware(app);

app.listen(port, () => {
  console.log(`App listening on port ${port} !`);
});

app.get("/", (req, res) => {
  res.json({ msg: "app work", status: status.OK });
});
