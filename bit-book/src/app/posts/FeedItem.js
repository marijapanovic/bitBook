import React from 'react';
import { fetchPost } from '../../services/fetchPosts';
import VideoItem from './VideoItem';
import ImageItem from './ImageItem';
import TextItem from './TextItem';

class FeedItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            post: {},
            comments: []
        }
    }
    componentDidMount() {
        const idPost = this.props.match.params.id;
        fetchPost(idPost)
            .then((post) => {
                this.setState({
                    post
                })
            })
    }

    showDetails = () => {

    }


    render() {
        if (this.state.post.type === 'video') {
            return <VideoItem post={this.state.post} showComments={false} />
        }
        else if (this.state.post.type === 'text') {
            return <TextItem post={this.state.post} showComments={false} />
        }
        else if (this.state.post.type === 'image') {
            return <ImageItem post={this.state.post} showComments={false} />
        }
        return (
            <div>
                <div>PostId: {this.state.post.id} type:{this.state.post.type}</div>
                <div>
                    <input type="text" placeholder="Add your comment" />
                    <button type="submit">Send</button>
                </div>
            </div>
        )

    }
}
export default FeedItem;