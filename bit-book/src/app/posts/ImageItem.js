import React from 'react'
import { Link } from 'react-router-dom';

const ImageItem = (props) => {
    const post = props.post
    return (
        <div key={post.id} className="row cardItem">
            <div className="col s12 m6 l2"></div>
            <div className="col s12 m8 12">
                <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                        <img src={post.imageUrl} alt="" />
                    </div>
                    {props.showComments ?
                        <Link to={`/posts/${post.id}`} >
                            <div className="card-action">
                                <span>Image post</span> <span className="commentsPost"> Comments: {post.comments.length} </span>
                            </div>
                        </Link>
                        :
                        <div>
                            <input type="text" placeholder="Add your comment" />
                            <button type="submit">Send</button>
                        </div>}

                </div>

            </div>
            <div className="col s12 m6 l2"></div>
        </div>
    )

}
export default ImageItem