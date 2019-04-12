import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


const VideoItem = ({ post, showComments, handleInput, disableBtn }) => {
    return (
        <div key={post.id} className="row cardItem">
            <div className="col s12 m6 l2"></div>
            <div className="col s12 m8 12">
                <div className="card grey">
                    <div className="card-content white-text">
                        <iframe width="420" height="315" src={post.videoUrl}></iframe>
                    </div>
                    {showComments ? <div>
                        <Link to={`/posts/${post.id}`}>
                            <div className="card-action">
                                <span>Video post</span> <span className="commentsPost">Comments : {post.comments.length} </span>
                            </div>
                        </Link >
                    </div> :
                        <div></div>
                    }
                </div>

            </div>
            <div className="col s12 m6 l2"></div>
        </div>

    )
}
VideoItem.propTypes = {
    post: PropTypes.object,
    showComments: PropTypes.bool,
    handleInput: PropTypes.func,
    disableBtn: PropTypes.bool,
}
export default VideoItem