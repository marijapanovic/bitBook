import React from 'react';
import { Link } from 'react-router-dom';

const VideoItem = (props) => {
    // const VideoItem = ({ post, showComments = false }) => {
    const post = props.post;
    //const visibleComments = props.showComments
    // const id = props.match.params.id;
    return (
        <div key={post.id} className="row cardItem">
            <div className="col s12 m6 l2"></div>
            <div className="col s12 m8 12">
                <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                        <iframe width="420" height="315" src={post.videoUrl}></iframe>
                    </div>
                    {props.showComments ? <div>
                        <Link to={`/posts/${post.id}`}>
                            <div className="card-action">
                                <span>Video post</span> <span className="commentsPost">Comments : {post.comments.length} </span>
                            </div>
                        </Link >
                    </div> :
                        <div>
                            <input type="text" placeholder="Add your comment" />
                            <button type="submit">Send</button>
                        </div>
                    }
                </div>

            </div>
            <div className="col s12 m6 l2"></div>
        </div>

    )

}
export default VideoItem