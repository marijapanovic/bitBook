import { API_BASE_URL } from '../shared/constants';
import Post from '../entities/Post';

const fetchPosts = () => {
    return fetch(`${API_BASE_URL}/posts`, {
        method: "GET",
        headers: {
            "content- type": "application/json",
            " x-api-key": "B1tD3V"
        }
    })
        .then(response => response.json())
        .then(postsArray => {
            const posts = postsArray
                .map(post => {
                    return new Post(post.id, post.userId, post.createdAt, post.type)
                })

            return posts;
        })
}

export default fetchPosts;