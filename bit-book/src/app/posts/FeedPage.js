import React from 'react';
import fetchPosts from '../../services/fetchPosts';
//import { Link } from 'react-router-dom';

class FeedPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }
    componentDidMount() {
        fetchPosts()
            .then((posts) => {
                this.setState({
                    posts: posts
                })
            })
    }

    render() {

        return this.state.posts.map(post => {
            if (post.type === 'video') {
                return (
                    <div key={post.id} className="row">
                        <div className="col s12 m6">
                            <div className="card blue-grey darken-1">
                                <div className="card-content white-text">
                                    <span className="card-title">Video</span>
                                    <iframe width="420" height="315" src={post.videoUrl}></iframe>
                                </div>
                                <div className="card-action">
                                    <a href="#">Id: {post.id}, UserId: {post.userId} Comments: {post.comments.length}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
            else if (post.type === 'text') {
                return (

                    <div key={post.id} className="row">
                        <div className="col s12 m6">
                            <div className="card blue-grey darken-1">
                                <div className="card-content white-text">
                                    <span className="card-title">Text</span>
                                    <p>{post.text}</p>
                                </div>
                                <div className="card-action">
                                    <a href="#">Id: {post.id}, UserId: {post.userId} Comments: {post.comments.length}</a>
                                </div>
                            </div>
                        </div>
                    </div>

                )
            }
            else if (post.type === 'image') {
                return (

                    <div key={post.id} className="row">
                        <div className="col s12 m6">
                            <div className="card blue-grey darken-1">
                                <div className="card-content white-text">
                                    <span className="card-title">Image</span>
                                    <img src={post.imageUrl} />
                                </div>
                                <div className="card-action">
                                    <a href="#">Id: {post.id}, UserId: {post.userId} Comments: {post.comments.length}</a>
                                </div>
                            </div>
                        </div>
                    </div>

                )
            }
            else {
                return (
                    <>
                        "Error!"
                </>
                )
            }
        })
    }
}
export default FeedPage