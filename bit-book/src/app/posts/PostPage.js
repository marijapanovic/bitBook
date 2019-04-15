import React from 'react';
import { Modal } from 'react-materialize';
import { fetchPosts } from '../../services/fetchPosts';
import PostList from './PostList';
import { Link } from 'react-router-dom';
import { ModalAdd } from './ModalAdd';
import { fetchPosts, deletePost } from '../../services/servicesPosts';
import PostList from './PostList';

class PostPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }
    loadsPosts = () => {
        fetchPosts()
            .then((posts) => {
                this.setState({
                    posts: posts
                })
            })
    }
    componentDidMount() {
        this.loadsPosts()
    }
    handleDeletePost = (event, postId) => {
        postId = event.target.value;
        deletePost(postId, this.loadsPosts);
    }

    render() {

        const addButton = <Link to={ModalAdd} className="btn-floating btn-large halfway-fab waves-effect">
            <i className="material-icons">add</i>
        </Link>

        return (
            <>
                <PostList posts={this.state.posts} />
                <Modal header="New Post" trigger={addButton}>
                    <input placeholder="insert text" />
                </Modal>
                < PostList posts={this.state.posts} handleDeletePost={this.handleDeletePost} />
            </>
        )
    }
}
export default PostPage;