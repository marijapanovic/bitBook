// import { API_USERS_BASE_URL } from '../shared/users-constants';
import UserPosts from '../entities/UserPosts';

const fetchUserPosts = () => {
    return fetch("https://book-api.hypetech.xyz/v1/users/2?_embed=posts", {
        method: "GET",
        headers: {
            "content-type": "application/json",
            "x-api-key": "B1tD3V"
        }
    })
        .then(res => res.json())
        .then((postsArray) => {
            // console.log(postsArray)
            const post = postsArray
            return new UserPosts(post.id, post.sid, post.userId, post.createdAt, post.isPublic, post.type, post.imageUrl)
        })
}

export default fetchUserPosts;
