import React from 'react';
import PropTypes from 'prop-types';


const CommentsList = ({ comments }) => {
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
                                <a class="secondary-content" onClick={() => { this.handleClick(comment.id) }}><i class="fas fa-times"></i></a>
                            </div>
                        </li>)
                    }
                </ul>

            </div>
        </>
    )
}
CommentsList.propTypes = {
    comments: PropTypes.object,
}
export default CommentsList;