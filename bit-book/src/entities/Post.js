
class Post {
    constructor(id, userId, createdAt, type, comments) {
        this.id = id;
        this.userId = userId;
        this.createdAt = createdAt;
        this.type = type;
        this.comments = comments;
    }
}
export default Post;

class PostVideo extends Post {
    constructor(id, userId, createdAt, type, comments, videoUrl) {
        super(id, userId, createdAt, type, comments)
        this.videoUrl = videoUrl;
    }
}
//export { Post, PostVideo }