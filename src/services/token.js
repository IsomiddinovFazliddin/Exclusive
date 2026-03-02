export const getToken = () => {
  if (localStorage.getItem("shopToken")) {
  }
  return localStorage.getItem("shopToken");
};

export const setToken = (token) => {
  localStorage.setItem("shopToken", token);
  getToken();
};
