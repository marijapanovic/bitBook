import React from 'react';
import PropTypes from 'prop-types';
import { fetchPost } from '../../services/fetchPosts';
import { fetchComments } from '../../services/fetchComments';
import VideoItem from './VideoItem';
import ImageItem from './ImageItem';
import TextItem from './TextItem';
import CommentsList from './CommentsList';
//import { postComment } from '../../services/postNewComment';

class PostItem extends React.Component {
    constructor(props) {
        super(props);
        // this.handleInput = this.handleInput.bind(this);
        this.state = {
            post: {},
            comments: [],
            nameInput: "",
        }
    }

    static propTypes = {
        match: PropTypes.object
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

    handleInput = (event) => {
        const inputComment = event.target.value;
        //const nameInput = event.target.getAttribute()
        // postComment(this.state.post.id, event.target.value)

        this.setState({
            nameInput: inputComment
        })
        console.log(event.target.value)
    }

    renderPostComponent(post) {
        if (post.type === 'video') {
            return <VideoItem post={this.state.post} showComments={false} onClick={this.handleInput} />
        }
        else if (post.type === 'text') {
            return <TextItem post={this.state.post} showComments={false} />
        }
        else {
            return <ImageItem post={this.state.post} showComments={false} />
        }
    }
    render() {
        return (
            <div>
                {this.renderPostComponent(this.state.post)}
                < CommentsList comments={this.state.comments} />
            </div>
        )
    }
}

export default PostItem;