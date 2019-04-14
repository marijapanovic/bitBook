import React from 'react';
import PropTypes from 'prop-types';


const CommentsList = ({ comments,handleDelete }) => {
    return (
        <>
            <div className='container'>

                <ul className="collection z-depth-1">
                    {comments.map((comment) =>
                        <li key={comment.commentId} className="collection-item avatar">
                            <img src={comment.userAvatar} alt="" className="circle" />
                            <div className='people-title'>
                                <span className="title">{comment.userName}</span>
                                <p>{comment.body}</p>
                                <button className="secondary-content" value={comment.commentId} type="button" onClick={handleDelete}>x</button>
                            </div>
                        </li>
                        )}
                </ul>
            </div>
        </>
    )
}
CommentsList.propTypes = {
    comments: PropTypes.array,
    handleClick: PropTypes.func
}
export default CommentsList;