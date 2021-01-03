const mongoose = require("mongoose");
const { db_URL } = require("./index");

const db = mongoose.connection;
mongoose.connect(db_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

db.on("error", console.error.bind(console, "connection error:"));

db.once("open", () => console.log("MongoDB database connected"));

module.exports = db;
