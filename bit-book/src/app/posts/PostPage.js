import React from 'react';
//import { Modal, Button } from 'react-materialize';
import PostList from './PostList';
import FloatingMenu from './FloatingMenu';
// import { Fab, Icon, FabButtons, FabButton } from 'react-materialize';
// import FloatingActionButton from 'material-ui/FloatingActionButton';
// import ContentAdd from 'material-ui/svg-icons/content/add';
//import { Link } from 'react-router-dom';
//import { ModalAdd } from './ModalAdd';
import { fetchPosts, deletePost } from '../../services/servicesPosts';

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
        return (
            <>
                <PostList posts={this.state.posts} handleDeletePost={this.handleDeletePost} />
                {/* <FloatingMenu /> */}
            </>
        )
    }
}
export default PostPage;