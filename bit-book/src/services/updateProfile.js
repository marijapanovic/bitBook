import { API_BASE_URL } from '../shared/constants';

const updateProfile = (id) => {
    fetch(`${API_BASE_URL}/users/${id}`, {
        method: 'PATCH',
        headers: {
            "content-type": "application/json",
            "x-api-key": "B1tD3V"
        },
        body: JSON.stringify(id)
    })
        .then(res => res.json())
        .then(data => data)
}

export default updateProfile;