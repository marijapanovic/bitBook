import Profile from '../entities/Profile';

const fetchUser = () => {
    return fetch("https://book-api.hypetech.xyz/v1/users/2?_embed[]=posts&_embed[]=comments", {
        method: "GET",
        headers: {
            "content-type": "application/json",
            "x-api-key": "B1tD3V"
        }
    })
        .then(res => res.json())
        .then((user) => {
            // console.log(user)
            const noOfComments = user.comments.length;
            const noOfPosts = user.posts.length;

            return new Profile(user.id, user.sid, user.email, user.createdAt, user.avatarUrl, user.about.bio, user.about.job, user.about.countryCode, user.name.prefix, user.name.first, user.name.last, noOfComments, noOfPosts)
        })
}

export default fetchUser;
