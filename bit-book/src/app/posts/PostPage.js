import React from 'react';
import { fetchPosts } from '../../services/fetchPosts';
import FeedList from './PostList'

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
            < FeedList posts={this.state.posts} />
        )
    }
}
export default FeedPage