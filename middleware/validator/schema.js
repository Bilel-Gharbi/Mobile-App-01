const Joi = require("@hapi/joi");

const authSchema = Joi.object({
  provider: Joi.string().required(),
  token: Joi.string().required(),
});

module.exports = {
  authSchema,
};
