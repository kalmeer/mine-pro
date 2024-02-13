import { instance } from ".";
import { storeToken } from "./storage";

const login = async (userInfo) => {
  const res = await instance.post("/users/login", userInfo);
  const token = res.data.token;
  if (token) {
    storeToken(token);
  }

  return res.data;
};

const signup = async (userInfo) => {
  const res = await instance.post("/users/register", userInfo);
  const token = res.data.token;
  if (token) {
    storeToken(token);
  }

  return res.data;
};
export { login, signup };
