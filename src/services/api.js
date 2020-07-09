import axios from "axios";

export const requestsUsers = () =>
  axios.get("https://jsonplaceholder.typicode.com/users");

export const requestsPosts = () =>
  axios.get("https://jsonplaceholder.typicode.com/posts");

export const getPostByUserId = (id) =>
  axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);

export const getPostById = (userId, postId) =>
  axios.get(
    `https://jsonplaceholder.typicode.com/users/${userId}/posts?id=${postId}`
  );

export const getCommentsById = (userId, postId) =>
  axios.get(
    `https://jsonplaceholder.typicode.com/users/${userId}/comments?postId=${postId}`
  );

export const signup = ({ username, password }) => {
  window.localStorage.setItem(
    "esokoUser",
    JSON.stringify({ username, password })
  );
  if (username === `esoko` && password === `insyt`) {
    return setUser({
      username: `Esoko`,
      name: `Johnny`,
      email: `johnny@esoko.org`,
    });
  }
  return false;
};

export const getUser = () =>
  window.localStorage.getItem("esokoUser")
    ? JSON.parse(window.localStorage.getItem("esokoUser"))
    : {};
const setUser = (user) =>
  window.localStorage.setItem("esokoUser", JSON.stringify(user));

export const handleLogin = ({ username, password }) => {
  if (username === `esoko` && password === `insyt`) {
    return setUser({
      username: `Esoko`,
      name: `Johnny`,
      email: `johnny@esoko.org`,
    });
  }
  return false;
};
export const isLoggedIn = () => {
  const user = getUser();
  return !!user.username;
};

export const logout = (callback) => {
  setUser({});
  callback();
};
