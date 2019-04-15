import { API_BASE_URL } from "../shared/constants";

const updateProfile = (id, body) => {
  return fetch(`${API_BASE_URL}/users/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": "B1tD3V"
    },
    body: JSON.stringify(body)
  })
    .then(res => res.json())
    .then(data => data);
};

export default updateProfile;
