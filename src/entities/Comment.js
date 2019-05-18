
class Comment {
    constructor(commentId, postId, userId, body, user) {
        this.commentId = commentId;
        this.postId = postId;
        this.userId = userId;
        this.body = body;
        this.userName = user.name.first;
        this.userAvatar = user.avatarUrl;
    }

}
export { Comment };