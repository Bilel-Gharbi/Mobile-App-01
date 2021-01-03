const formatAuthData = (data, provider) => {
  let user = {
    email: "",
    firstName: "",
    lastName: "",
    avatarUrl: "",
    provider: {
      uid: "",
      type: "",
    },
  };
  if (provider === "GOOGLE") {
    user.firstName = data.given_name;
    user.lastName = data.family_name;
    user.email = data.email;
    user.avatarUrl = data.picture;
    user.provider.uid = data.id;
    user.provider.type = provider;
  } else if (provider === "FACEBOOK") {
    user.firstName = data.name.slice(0, data.name.lastIndexOf(" "));
    user.lastName = data.name.slice(data.name.lastIndexOf(" ") + 1);
    user.email = data.email;
    user.avatarUrl = data.picture.data.url;
    user.provider.uid = data.id;
    user.provider.type = provider;
  }
  return user;
};

module.exports = {
  formatAuthData,
};
