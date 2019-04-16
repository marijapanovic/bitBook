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
    HEADERS_API
  })
    .then(response => response.json())
    .then(post => {
      return createPost(post);
    });
};

export const deletePost = (id, loadsPosts) => {
  return fetch(`${API_BASE_URL}/posts/${id}`, {
    method: "DELETE",
    HEADERS_API
  }).then(loadsPosts);
};

export const postPostText =(body, numOfPosts, type) =>{
  const post ={
    id: numOfPosts + 1,
    //sid: Math.floor(Math.random() * 100000),
    userId : 2,
    createdAt: new Date().toLocaleTimeString(),
    type: type,
    imageUrl: null,
    videoUrl: null,
    text : body
  };
  return fetch(`${API_BASE_URL}/posts`,{
    method : "POST",
    text : JSON.stringify(post), HEADERS_API
  })
}

export const postPostVideo =(body, numOfPosts, type) =>{
  const post ={
    id: numOfPosts + 1,
    //sid: Math.floor(Math.random() * 100000),
    userId : 2,
    createdAt: new Date().toLocaleTimeString(),
    type: type,
    imageUrl: null,
    videoUrl: body,
    text : null
  };
  return fetch(`${API_BASE_URL}/posts`,{
    method : "POST",
    text : JSON.stringify(post), HEADERS_API
  })
}

export const postPostImage=(body, numOfPosts, type) =>{
  const post ={
    id: numOfPosts + 1,
    //sid: Math.floor(Math.random() * 100000),
    userId : 2,
    createdAt: new Date().toLocaleTimeString(),
    type: type,
    imageUrl: body,
    videoUrl: null,
    text : null
  };
  return fetch(`${API_BASE_URL}/posts`,{
    method : "POST",
    text : JSON.stringify(post), HEADERS_API
  })
}