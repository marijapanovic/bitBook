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
                // console.log(posts);
            })
    }

    render() {
        return (
            <>
                <div>{this.state.posts.map((post) =>
                    <div>Id: {post.id}, UserId: {post.userId}</div>
                )}</div>
            </>
        )
    }

}
export default FeedPage; 