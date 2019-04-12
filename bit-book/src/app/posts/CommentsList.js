import React from 'react';

const CommentsList = (props) => {
    const comments = props.comments

    return (
        <>
            <div className='container'>

                <ul className="collection z-depth-1">
                    {comments.map((comment) =>
                        <li key={comment.id} className="collection-item avatar">
                            <img src={comment.userAvatar} alt="" className="circle" />
                            <div className='people-title'>
                                <span className="title">{comment.userName}</span>
                                <p>{comment.body} <br />
                                </p>
                            </div>
                        </li>)}

                </ul>

            </div>
        </>
    )
}
export default CommentsList;