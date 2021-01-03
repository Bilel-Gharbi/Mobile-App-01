const userRoute = require("express").Router();
const controller = require("./controller");

const { validatorSchemaAuth } = require("../../middleware");

userRoute.route("/auth").post(validatorSchemaAuth, controller.loginOrSignup);

userRoute
  .route("/test")
  .post(controller.test)
  .get((req, res) => {
    res.send("test post", req);
  });

module.exports = userRoute;
