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

        return (
            <>
                <div>{this.state.posts.map((post) =>
                    <div key={post.id} className="row">
                        <div className="col s12 m6">
                            <div className="card blue-grey darken-1">
                                <div className="card-content white-text">
                                    <span className="card-title">Card Title</span>
                                    <p>I am a very simple card. </p>
                                </div>
                                <div className="card-action">
                                    <a href="#">Id: {post.id}, UserId: {post.userId}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                </div>
            </>
        )
    }

}
export default FeedPage; 