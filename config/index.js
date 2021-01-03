const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  port: process.env.PORT || 5000,
  db_URL: "mongodb://localhost/Mobile-App-01" || process.env.DATABASE_URI,
};
