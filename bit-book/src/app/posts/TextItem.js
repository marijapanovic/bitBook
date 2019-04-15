import React from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const TextItem = ({ post, showComments, handleDeletePost }) => {
    return (
        <div key={post.id} className="row cardItem">
            <div className="col s12 m6 l2"></div>
            <div className="col s12 m8 12 ">
                <div className="card grey">
                    <div className="card-content white-text textPost">
                    PostId: {post.id}
                    <button className="secondary-content" value={post.id} onClick={handleDeletePost} type="button">x</button>
                        <p>{post.text}</p>
                    </div>
                    {showComments ?
                        <div>
                            <Link to={`/posts/${post.id}`}>
                                <div className="card-action">
                                    <span>Text post </span> <span className="commentsPost"> Comments:{post.comments.length}</span>
                                </div>
                            </Link>
                        </div>
                        :
                        <div></div>
                    }
                </div>
            </div>
            <div className="col s12 m6 l2"></div>
        </div>
    )
}
TextItem.propTypes = {
    post: PropTypes.object,
    showComments: PropTypes.bool,
    
}
export default TextItem