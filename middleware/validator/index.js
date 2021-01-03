const httpStatus = require("http-status");
const { authSchema } = require("./schema");

const validatorSchema = async (req, res, next) => {
  try {
    await authSchema.validateAsync(req.body);
  } catch (error) {
    res.json(error);
  }
};

const validatorSchemaAuth = async (req, res, next) => {
  try {
    await authSchema.validateAsync(req.body);
  } catch (error) {
    res.json({ error: error.details[0].message });
  }
  next();
};

module.exports = { validatorSchema, validatorSchemaAuth };
