
export const getToken = () => {
  let token = localStorage.getItem("token");
  return token ? token : null;
};

export const setToken = token => {
  localStorage.setItem("token", token);
};

export const getUser = () => {
  let user = localStorage.getItem("user");
  return user ? user : null;
};

export const setUser = user => {
  localStorage.setItem("user", user);
};

export const removeToken = () => {
  localStorage.removeItem("token");
};

export const removeUser = () => {
  localStorage.removeItem("user");
};
