export const getToken = () => {
  if (localStorage.getItem("shopToken")) {
    console.log("dwefewrfew");
  }
  return localStorage.getItem("shopToken");
};

export const setToken = (token) => {
  localStorage.setItem("shopToken", token);
  getToken();
};

