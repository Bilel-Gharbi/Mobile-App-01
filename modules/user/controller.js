//controller
const status = require("http-status");
const service = require("./service");

const loginOrSignup = async (req, res) => {
  try {
    // console.log(req.body);
    // const { token, provider } = req.body;

    //await service.createUser(req.body);

    /*  let data;
    if (provider === "FACEBOOK") {
      data = await service.facebookAuth(token);
      console.log(data);
    } else if (provider === "GOOGLE") {
      data = await service.googleAuth(token);
      console.log(data);
    } else {
      res.sendStatus(400);
    } */

    const customer = await service.createOrGetUser(req.body);

    // const jwtToken = AuthServices.createToken(customer);

    res.status(200).json(req.body);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const test = async (req, res) => {
  try {
    console.log(req.body);
    res.status(200).json(req.body);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  loginOrSignup,
  test,
};

/*export const create = async (req, res) => {
  const { token, provider } = req.body;

  const bodySchema = Yup.object().shape({
    token: Yup.string().required(),
    provider: Yup.string()
      .oneOf(PROVIDER_ENUM)
      .required(),
  });

  try {
    await bodySchema.validate({ token, provider });

    let data;

    if (provider === 'FACEBOOK') {
      data = await AuthProvider.Facebook.authAsync(token);
    } else if (provider === 'GOOGLE') {
      data = await AuthProvider.Google.authAsync(token);
    } else {
      res.sendStatus(400);
    }

    const customer = await getOrCreateCustomer(data, provider);

    const jwtToken = AuthServices.createToken(customer);

    res.status(200).json({ token: jwtToken });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};  */
