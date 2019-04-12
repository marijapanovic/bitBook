import React from 'react';
import { fetchPosts } from '../../services/fetchPosts';
import PostList from './PostList'

class PostPage extends React.Component {
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
            < PostList posts={this.state.posts} />
        )
    }
}
export default PostPage;