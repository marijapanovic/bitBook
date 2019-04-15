import React from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ImageItem = ({ post, showComments, handleDeletePost }) => {
    return (
        <div key={post.id} className="row cardItem">
            <div className="col s12 m6 l2"></div>
            <div className="col s12 m8 12">
                <div className="card grey">
                    <div className="card-content white-text">
                    <button className="secondary-content" value={post.id} onClick={handleDeletePost}  type="button">x</button>
                        <img src={post.imageUrl} alt="" />
                    </div>
                    {showComments ?
                        <Link to={`/posts/${post.id}`} >
                            <div className="card-action">
                                <span>Image post</span> <span className="commentsPost"> Comments: {post.comments.length} </span>
                            </div>
                        </Link>
                        :
                        <div></div>
                    }
                </div>
            </div>
            <div className="col s12 m6 l2"></div>
        </div>
    )
}
ImageItem.propTypes = {
    post: PropTypes.object,
    showComments: PropTypes.bool,
    handleDeletePost: PropTypes.func
}
export default ImageItem