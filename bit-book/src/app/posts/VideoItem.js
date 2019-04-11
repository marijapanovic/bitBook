import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
//import { API_BASE_URL } from '../../shared/constants';

const VideoItem = ({ post, showComments, props }) => {
    // onChange={this.handleInput}
    //const post = props.post;


    return (
        <div key={post.id} className="row cardItem">
            <div className="col s12 m6 l2"></div>
            <div className="col s12 m8 12">
                <div className="card blue-grey darken-1">
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
                        <form >
                            <div>
                                <input name="newComment" type="text" placeholder="Add your comment" />
                                <button type="submit">Send</button>
                            </div>
                        </form>
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
    onClick: PropTypes.func
}
export default VideoItem