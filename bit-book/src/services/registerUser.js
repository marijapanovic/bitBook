// import { API_BASE_URL } from "../shared/constants";

const registerUser = body => {
  const registerUser = {
    name: body.name,
    email: body.email,
    password: body.password
  };
  return fetch("https://book-api.hypetech.xyz/v1/auth/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": "B1tD3V"
    },
    body: JSON.stringify(registerUser)
  })
    .then(res => res.json())
    .then(data => data);
};

export default registerUser;
