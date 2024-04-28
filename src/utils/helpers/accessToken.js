import Cookies from "js-cookie";

const getAccessTokenFromCookies = () => Cookies.get("user_token");

const hasAccessToken = () => Boolean(getAccessTokenFromCookies());

const setAccessToken = (token) =>
  Cookies.set("user_token", token, {
    expires: 1,
    path: "/",
  });

const removeAccessToken = () => Cookies.remove("user_token");

export {
  getAccessTokenFromCookies,
  hasAccessToken,
  setAccessToken,
  removeAccessToken,
};
