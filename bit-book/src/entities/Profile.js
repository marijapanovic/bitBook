
class Profile {
    constructor(id, sid, email, createdAt, avatarUrl, aboutBio, aboutJob, aboutCountryCode, namePrefix, nameFirst, nameLast, noOfComments, noOfPosts) {
        this.id = id;
        this.sid = sid;
        this.email = email;
        this.createdAt = createdAt;
        this.avatarUrl = avatarUrl;
        this.aboutBio = aboutBio;
        this.aboutJob = aboutJob;
        this.aboutCountryCode = aboutCountryCode;
        this.namePrefix = namePrefix;
        this.nameFirst = nameFirst;
        this.nameLast = nameLast;
        this.noOfComments = noOfComments;
        this.noOfPosts = noOfPosts;
    }
}

export default Profile;