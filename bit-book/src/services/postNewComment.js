import { API_BASE_URL } from '../shared/constants';

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