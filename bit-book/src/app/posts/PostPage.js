import React from 'react';
import { Modal } from 'react-materialize';
import { fetchPosts } from '../../services/fetchPosts';
import PostList from './PostList';
import {Link} from 'react-router-dom';
import { ModalAdd } from './ModalAdd';

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

        const addButton = <Link to={ModalAdd} className="btn-floating btn-large halfway-fab waves-effect">
            <i className="material-icons">add</i>
        </Link> 

        return (
            <>
            <PostList posts={this.state.posts} />
            {/* <ModalAdd /> */}
            <Modal header="New Post" trigger={addButton}>
               <input  placeholder="insert text"></input>
            </Modal>
            </>
        )
    }
}
export default PostPage;