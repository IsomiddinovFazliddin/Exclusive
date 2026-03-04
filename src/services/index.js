import { baseUrl } from "./config";
import { getToken } from "./token";

export const getCategory = () => {
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  return fetch(`${baseUrl}product/categories/`, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      return result;
    })
    .catch((error) => {
      return error;
    });
};

export const getProducts = () => {
  const myHeaders = new Headers();
  getToken() ? myHeaders.append("Authorization", `Bearer ${getToken()}`) : "";

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  return fetch(`${baseUrl}product/list/`, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      return result;
    })
    .catch((error) => {
      return error;
    });
};

export const registerFunction = (name, email, password) => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify({
    first_name: name,
    email_or_phone: email,
    password: password,
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  return fetch(`${baseUrl}user/register/`, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      return result;
    })
    .catch((error) => {
      return error;
    });
};

export const loginFunction = (email, password) =>
  fetch(`${baseUrl}user/token/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email_or_phone: email, password }),
  }).then((res) => res.json());

export const productDetail = (id) => {
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  return fetch(`${baseUrl}product/detail/?product_id=${id}`, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      return result;
    })
    .catch((error) => {
      return error;
    });
};

export const userDetail = () => {
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${getToken()}`);

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  return fetch(`${baseUrl}user/detail/`, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      return result;
    })
    .catch((error) => {
      return error;
    });
};

export const userUpdate = (
  firstName,
  lastName,
  email,
  phone,
  address,
  password,
) =>
  fetch(`${baseUrl}user/update-profile/`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`,
    },
    body: JSON.stringify({
      first_name: firstName,
      last_name: lastName,
      email: email,
      phone: phone,
      address: address,
      password: password,
    }),
  }).then((res) => res.json());

export const addToLiked = (id) => {
  const token = getToken();

  if (!token) {
    return Promise.reject("User not authenticated");
  }

  return fetch(`${baseUrl}action/add-to-wishlist/?product_id=${id}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => res.json());
};
export const myWishlist = () => {
  const myHeaders = new Headers();
  getToken() ? myHeaders.append("Authorization", `Bearer ${getToken()}`) : "";

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  return fetch(`${baseUrl}action/my-wishlist/`, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      return result;
    })
    .catch((error) => {
      return error;
    });
};

export const deletLiked = (id) => {
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${getToken()}`);

  const requestOptions = {
    method: "DELETE",
    headers: myHeaders,
    redirect: "follow",
  };

  return fetch(
    `${baseUrl}action/remove-from-wishlist/?product_id=${id}`,
    requestOptions,
  )
    .then((response) => response.json())
    .then((result) => {
      return result;
    })
    .catch((error) => {
      return error;
    });
};

export const addToCart = () => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", `Bearer ${getToken()}`);

  const raw = JSON.stringify({
    product_id: 1,
    quantity: 2,
    properties: {
      color: "black",
      size: "XL",
    },
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  return fetch(`${baseUrl}order/add-to-cart/`, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      return result;
    })
    .catch((error) => {
      return error;
    });
};
