const express = require("express");
const cors = require("cors");
const logger = require("morgan");
const appRoutesV1 = require("../modules");

//data base connection
require("./db");

module.exports = async (app) => {
  app.use(express.json());
  app.use(cors("*"));
  app.use(logger("dev"));

  app.use("/api/v1/", [...appRoutesV1]);
};
