
class UserComments {
    constructor(id, sid, postId, usersId, createdAt, isPublic, body) {
        this.id = id;
        this.sid = sid;
        this.postId = postId;
        this.usersId = usersId;
        this.createdAt = createdAt;
        this.isPublic = isPublic;
        this.body = body;
    }
}

export default UserComments;