import { API_BASE_URL } from "../shared/constants";

const loginUser = userToken => {
  return fetch(`${API_BASE_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": "B1tD3V",
      "Authorization": `Bearer ${userToken}`
    }
  })
    .then(res => res.json())
    .then(data => data);
};

export default loginUser;
