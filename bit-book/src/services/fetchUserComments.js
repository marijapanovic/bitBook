// import { API_USERS_BASE_URL } from '../shared/users-constants';
import UserComments from '../entities/UserComments';

const fetchUserComments = () => {
    return fetch("https://book-api.hypetech.xyz/v1/users/2?_embed[]=posts&_embed[]=comments", {
        method: "GET",
        headers: {
            "content-type": "application/json",
            "x-api-key": "B1tD3V"
        }
    })
        .then(res => res.json())
        .then((commArray) => {
            console.log(commArray)
            const comment = commArray
            return new UserComments(comment.id, comment.sid, comment.postId, comment.usersId, comment.createdAt, comment.isPublic, comment.body)
        })
}

export default fetchUserComments;
