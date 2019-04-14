import React from 'react';
import { fetchPosts } from '../../services/fetchPosts';
import FeedList from './PostList'
import Loading from '../components/Loading';

class FeedPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: null
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

        if (!this.state.posts) {
            return <Loading />;
          }
          
        return (
            < FeedList posts={this.state.posts} />
        )
    }
}
export default FeedPage