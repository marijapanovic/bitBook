import React from 'react';
import PropTypes from 'prop-types';
import { fetchPost } from '../../services/fetchPosts';
import { fetchComments, postComment } from '../../services/fetchComments';
import VideoItem from './VideoItem';
import ImageItem from './ImageItem';
import TextItem from './TextItem';
import CommentsList from './CommentsList';

class PostItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            post: {},
            comments: [],
            commentInput: "",
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
        this.loadsComments(id);
    }
    loadsComments = (id) => {
        fetchComments(id)
            .then((comments) => {
                this.setState({
                    comments: comments
                })
            })
    }
    handleOnClik = () => {

    }
    handleOnChange = (e) => {
        this.setState({
            commentInput: e.target.value
        })
    }
    onCommentSubmit = (e) => {
        e.preventDefault()

        if (this.state.commentInput.length === 0) {
            alert("Enter comment!")
        } else {
            const postId = this.props.match.params.id
            return (postComment(postId, this.state.commentInput)
                .then(() => {
                    this.loadsComments(postId)
                })
                .then(() => {
                    this.setState({
                        commentInput: "",
                    })
                })
            )
        }
    }

    renderPostComponent(post) {
        if (post.type === 'video') {
            return <VideoItem post={this.state.post} showComments={false} />
        } else if (post.type === 'text') {
            return <TextItem post={this.state.post} showComments={false}
                handleInput={this.handleInput}
                disableBtn={false} />
        } else {
            return <ImageItem post={this.state.post} showComments={false}
                handleInput={this.handleInput} />
        }
    }
    render() {
        return (
            <div>
                {this.renderPostComponent(this.state.post)}
                <form onSubmit={this.onCommentSubmit} className="container">
                    <div>
                        <input id="newCommentInput" onChange={this.handleOnChange} value={this.state.commentInput} type="text" placeholder="Add your comment" />
                        <button type='submit'>Send</button>
                    </div>
                </form>
                < CommentsList comments={this.state.comments} />
            </div>
        )
    }
}

export default PostItem;