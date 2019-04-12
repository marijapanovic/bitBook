import { API_BASE_URL } from '../shared/constants';
import { Comment } from '../entities/Comment';

export const fetchComments = (id) => {
    return fetch(`${API_BASE_URL}/comments?postId=${id}&_expand=user`, {
        method: "GET",
        headers: {
            "content-type": "application/json",
            "x-api-key": "B1tD3V"
        }
    })
        .then(response => response.json())
        .then(commentsArray => {
            console.log(commentsArray);
            const comments = commentsArray
                .filter(comment => comment.user)
                .map(comment => {
                    return new Comment(comment.id, comment.postId, comment.userId, comment.body, comment.user)
                })
            return comments.reverse()
        })
}

export const postComment = (postId, text) => {
    const comment = {
        sid: Math.floor(Math.random() * 100000),
        postId: postId,
        userId: 2,
        body: text,
    };

    return fetch(`${API_BASE_URL}/comments`, {
        method: "POST",
        body: JSON.stringify(comment),
        headers: {
            "content-type": "application/json",
            "x-api-key": "B1tD3V"
        }

    })
}