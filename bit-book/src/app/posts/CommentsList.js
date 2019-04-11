import React from 'react';

const CommentsList = (props) => {
    const comments = props.comments

    return (
        <>
            <div>
                <ul className="collection">
                    {comments.map((comment) =>
                        <li key={comment.id} className="collection-item avatar">
                            <img src={comment.userAvatar} alt="" className="circle" />
                            <span className="title">{comment.userName}</span>
                            <p>{comment.body} <br />
                            </p>
                        </li>)}

                </ul>
            </div>
        </>
    )
}
export default CommentsList;