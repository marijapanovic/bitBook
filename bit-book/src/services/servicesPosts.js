import { API_BASE_URL, HEADERS_API } from "../shared/constants";
import { PostVideo, PostImage, PostText } from "../entities/Post";

const createPost = post => {
  if (post.type === "video") {
    return new PostVideo(
      post.id,
      post.userId,
      post.createdAt,
      post.type,
      post.videoUrl,
      post.comments
    );
  } else if (post.type === "image") {
    return new PostImage(
      post.id,
      post.userId,
      post.createdAt,
      post.type,
      post.imageUrl,
      post.comments
    );
  } else {
    return new PostText(
      post.id,
      post.userId,
      post.createdAt,
      post.type,
      post.text,
      post.comments
    );
  }
  //else {
  //     throw Error("Invalid post type");
  // }
};

export const fetchPosts = () => {
  return fetch(`${API_BASE_URL}/posts?_embed=comments`, {
    method: "GET",
    HEADERS_API
  })
    .then(response => response.json())
    .then(postsArray => {
      const posts = postsArray.map(post => {
        return createPost(post);
      });
      return posts;
    });
};

export const fetchPost = id => {
  return fetch(`${API_BASE_URL}/posts/${id}`, {
    method: "GET",
    ...HEADERS_API
  })
    .then(response => response.json())
    .then(post => {
      return createPost(post);
    });
};

export const deletePost = (id, loadsPosts) => {
  return fetch(`${API_BASE_URL}/posts/${id}`, {
    method: "DELETE",
    ...HEADERS_API
  }).then(loadsPosts);
};

export const postPostText = (type, postContent) => {
  const apiPost = {
    type: type,
    text: postContent,
    isPublic: true,
  };

  return fetch(`${API_BASE_URL}/posts`, {
    method: "POST",
    body: JSON.stringify(apiPost),
    ...HEADERS_API
  })
}

export const postPostVideo = (type, postContent) => {
  const apiPost = {
    type: type,
    videoUrl: postContent,
    isPublic: true,
  };
  return fetch(`${API_BASE_URL}/posts`, {
    method: "POST",
    body: JSON.stringify(apiPost),
    ...HEADERS_API
  })
}

export const postPostImage = (type, postContent) => {
  const apiPost = {
    type: type,
    imageUrl: postContent,
  };
  return fetch(`${API_BASE_URL}/posts`, {
    method: "POST",
    body: JSON.stringify(apiPost),
    ...HEADERS_API
  })
}