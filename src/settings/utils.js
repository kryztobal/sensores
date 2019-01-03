import cookie from "react-cookies";

export const getTokenCookie = () => {
  let token = cookie.load("token");
  return token ? token : null;
};

export const setTokenCookie = token => {
  cookie.save("token", token, { path: "/" });
};

export const getUserCookie = () => {
  let user = cookie.load("user");
  return user ? user : null;
};

export const setUserCookie = user => {
  cookie.save("user", user, { path: "/" });
};

export const removeTokenCookie = () => {
  cookie.remove("token", { path: "/" });
};

export const removeUserCookie = () => {
  cookie.remove("user", { path: "/" });
};
