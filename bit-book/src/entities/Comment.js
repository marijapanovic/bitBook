import React from 'react-router-dom';

class Comment extends React.Component {
    constructor(commentId, postId, userId, body) {
        this.commentId = commentId;
        this.postId = postId;
        this.userId = userId;
        this.body = body;
    }

}
export default Comment;