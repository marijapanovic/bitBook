
class UserPosts {
    constructor(id, sid, userId, createdAt, isPublic, type, imageUrl) {
        this.id = id;
        this.sid = sid;
        this.userId = userId;
        this.createdAt = createdAt;
        this.isPublic = isPublic;
        this.type = type;
        this.imageUrl = imageUrl;
    }
}

export default UserPosts;