import React from 'react';
import fetchPosts from '../../services/FetchPosts';
import FeedList from './FeedList'

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