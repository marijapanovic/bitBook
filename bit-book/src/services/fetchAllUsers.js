import Profile from '../entities/Profile';
import { API_BASE_URL } from '../shared/constants';

const fetchAllUsers = () => {
    return fetch(`${API_BASE_URL}/users`, {
        method: "GET",
        headers: {
            "content-type": "application/json",
            "x-api-key": "B1tD3V"
        }
    })
        .then(res => res.json())
        .then((usersArray) => {
            console.log(usersArray)
            const users = usersArray
                .map((users) => {
                    return new Profile(users.id, users.sid, users.email, users.createdAt, users.avatarUrl, users.about.bio, users.about.job, users.about.countryCode, users.name.prefix, users.name.first, users.name.last)
                })
            return users;
        })
}

export default fetchAllUsers;