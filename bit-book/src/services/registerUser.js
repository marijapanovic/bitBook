// import { API_BASE_URL } from "../shared/constants";
// import jwt_decode from "jwt-decode";

const registerUser = body => {
  const registerUser = {
    // id: body.id,
    name: body.name,
    email: body.email,
    password: body.password
  };
  return (
    fetch("https://book-api.hypetech.xyz/v1/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "B1tD3V"
      },
      body: JSON.stringify(registerUser)
    })
      // .then(res => jwt_decode(res))
      .then(res => res.json())
      .then(data => {
        let token = data.accessToken;
        // console.log(token);
        localStorage.setItem("id", token);
      })
  );
};

export default registerUser;