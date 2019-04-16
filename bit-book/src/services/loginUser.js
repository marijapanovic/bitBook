import { API_BASE_URL } from "../shared/constants";

const loginUser = body => {
  return fetch(`${API_BASE_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": "B1tD3V"
    },
    body: JSON.stringify(body)
  })
    .then(res => res.json())
    .then(data => data);
};

export default loginUser;
