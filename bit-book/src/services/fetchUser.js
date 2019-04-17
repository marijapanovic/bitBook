import Profile from "../entities/Profile";
import { API_BASE_URL } from "../shared/constants";

const fetchUser = (id) => {
  const userId = id || 2;

  return fetch(`${API_BASE_URL}/users/${userId}?_embed[]=posts&_embed[]=comments`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
      "x-api-key": "B1tD3V"
    }
  })
    .then(res => res.json())
    .then((user) => {
      // console.log(user)
      const noOfComments = user.comments.length;
      const noOfPosts = user.posts.length;

      return new Profile(user.id, user.sid, user.email, user.createdAt, user.avatarUrl, user.aboutBio, user.aboutJob, user.aboutCountryCode, user.name.prefix, user.name.first, user.name.last, noOfComments, noOfPosts)
    })
}

export default fetchUser;
