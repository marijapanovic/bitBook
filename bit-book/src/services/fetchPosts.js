import { API_BASE_URL } from '../shared/constants';
import { PostVideo, PostImage, PostText } from '../entities/Post';

const createPost = post => {
    if (post.type === 'video') {
        return new PostVideo(post.id, post.userId, post.createdAt, post.type, post.videoUrl, post.comments)
    } else if (post.type === 'image') {
        return new PostImage(post.id, post.userId, post.createdAt, post.type, post.imageUrl, post.comments)
    }
    else if (post.type === 'text') {
        return new PostText(post.id, post.userId, post.createdAt, post.type, post.text, post.comments)
    } else {
        throw Error("Invalid post type");
    }
};

const fetchPosts = () => {
    return fetch(`${API_BASE_URL}/posts?_embed=comments`, {
        method: "GET",
        headers: {
            "content-type": "application/json",
            "x-api-key": "B1tD3V"
        }
    })
        .then(response => response.json())
        .then(postsArray => {
            const posts = postsArray
                .map(post => {
                    return createPost(post);
                })

            return posts;
        })
}

export const fetchPost = (id) => {
    return fetch(`${API_BASE_URL}/posts/${id}`, {
        method: "GET",
        headers: {
            "content-type": "application/json",
            "x-api-key": "B1tD3V"
        }
    })
        .then(response => response.json())
        .then(post => {
            return createPost(post);

        })
}
export const fetchComments = (id) => {
    return fetch(`${API_BASE_URL}/posts/${id}/comments`, {
        method: "GET",
        headers: {
            "content-type": "application/json",
            "x-api-key": "B1tD3V"
        }
    })
        .then(response => response.json())
        .then(commentsArray => {
            const comments = commentsArray
                .map(comment => {
                    return new Comment(comment.commentId, comment.postId, comment.userId, comment.body)
                })
            return comments;
        })
}


export default fetchPosts;