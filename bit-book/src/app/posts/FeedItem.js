import React from 'react';
import { fetchPost } from '../../services/fetchPosts';
import { fetchComments } from '../../services/fetchComments';
import VideoItem from './VideoItem';
import ImageItem from './ImageItem';
import TextItem from './TextItem';
import CommentsList from './CommentsList';

class FeedItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            post: {},
            comments: []
        }
    }
    componentDidMount() {
        const id = this.props.match.params.id;
        fetchPost(id)
            .then((post) => {
                this.setState({
                    post
                })
            })
        fetchComments(id)
            .then((comments) => {
                this.setState({
                    comments: comments
                })
            })
    }
    render() {
        if (this.state.post.type === 'video') {
            return (<>
                <VideoItem post={this.state.post} showComments={false} />
                <CommentsList comments={this.state.comments} />
            </>)
        }
        else if (this.state.post.type === 'text') {
            return (<>
                <TextItem post={this.state.post} showComments={false} />
                <CommentsList comments={this.state.comments} />
            </>
            )
        }
        else if (this.state.post.type === 'image') {
            return (<>
                <ImageItem post={this.state.post} showComments={false} />
                <CommentsList comments={this.state.comments} />
            </>
            )
        }
        return (<div></div>)
    }
}
export default FeedItem;