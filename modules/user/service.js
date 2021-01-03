//logical
const axios = require("axios");
const User = require("./model");

const { formatAuthData } = require("../../utils");

const facebookAuth = async (token) => {
  const FIELDS = "email,name,picture";
  const BASE_URL = `https://graph.facebook.com/me?fields=${FIELDS}`;

  try {
    const response = await axios.get(`${BASE_URL}&access_token=${token}`);
    if (response.status === 200) {
      console.log("hey !!!!!!!!");
      return response.data;
    }
    throw new Error("No success with Facebook");
  } catch (error) {
    throw error;
  }
};

const googleAuth = async (token) => {
  const BASE_URL = "https://www.googleapis.com/userinfo/v2/me";
  try {
    const response = await axios.get(BASE_URL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.status === 200) {
      return response.data;
    }

    throw new Error("No success with Google");
  } catch (error) {
    throw error;
  }
};

const createOrGetUser = async (data) => {
  let _authInfo;
  let _userInfo;
  const { token, provider } = data;
  if (provider === "FACEBOOK") {
    _authInfo = await facebookAuth(token);
    _userInfo = formatAuthData(_authInfo, provider);
    console.log(_userInfo);
  } else if (provider === "GOOGLE") {
    _authInfo = await googleAuth(token);
    _userInfo = formatAuthData(_authInfo, provider);
    console.log(_userInfo);
  }
  //check if user exist or not
  // assign token

  //await User.create({ ...data });
};

module.exports = { createOrGetUser, facebookAuth, googleAuth };
