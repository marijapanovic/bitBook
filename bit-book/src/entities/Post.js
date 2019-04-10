
class Post {
    constructor(id, userId, createdAt, type) {
        this.id = id;
        this.userId = userId;
        this.createdAt = createdAt;
        this.type = type;
    }
}
//export default Post;

class PostVideo extends Post {
    constructor(id, userId, createdAt, type, videoUrl, comments) {
        super(id, userId, createdAt, type)
        this.videoUrl = videoUrl;
        this.comments = comments;
    }
}
class PostImage extends Post {
    constructor(id, userId, createdAt, type, imageUrl, comments) {
        super(id, userId, createdAt, type)
        this.imageUrl = imageUrl;
        this.comments = comments;
    }
}

class PostText extends Post {
    constructor(id, userId, createdAt, type, text, comments) {
        super(id, userId, createdAt, type)
        this.text = text;
        this.comments = comments;
    }
}
export { Post, PostVideo, PostImage, PostText }