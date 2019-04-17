import React from 'react';
import PostList from './PostList';
import { fetchPosts, deletePost, postPostText, postPostVideo, postPostImage } from '../../services/servicesPosts';
import Loading from '../components/Loading';
import { Dropdown, Button, Modal } from 'react-materialize';
import NewTextPostForm from './NewTextPostForm';
import NewVideoPostForm from './NewVideoPostForm';

class PostPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: null,
            filter:null
        };
    }
    loadsPosts = () => {
        fetchPosts()
            .then((posts) => {
                this.setState({ 	
                    posts: posts,
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

    // filterFeed = (event) => {
    //     const filterType = event.target.text.toLowerCase();
    //     if (filterType !== this.state.filter) {
    //         this.setState({filter: event.target.text.toLowerCase()});
    //     } else {
    //         this.setState({filter: null});
    //     }
    //    // event.preventDefault();
    // }

    
    render() {
        if (!this.state.posts) {
            return <Loading />;
        }

        return (
            <>
                {/* <Dropdown className="nav-wrapper" trigger={<Button>Posts</Button>}>
                    <a href="#" onClick={this.filterFeed}>Text</a>
                    <a href="#" onClick={this.filterFeed}>Image</a>
                    <a href="#" onClick={this.filterFeed}>Video</a>
                </Dropdown> */}
                <Dropdown className="nav-wrapper" trigger={<Button>+</Button>}>
                    <Modal header="Create text post"
                        trigger={<Button>Text</Button>}
                        options={{ preventScrolling: false }}
                        actions={[<Button modal="close">Close</Button>]}
                    >
                        <NewTextPostForm loadsPosts={this.loadsPosts} />
                    </Modal>
                    <Modal header="Create video post"
                        trigger={<Button>Video</Button>}
                        options={{ preventScrolling: false }}
                        actions={[<Button modal="close">Close</Button>]}
                    >
                        <NewVideoPostForm loadsPosts={this.loadsPosts} />
                    </Modal>
                    <Modal header="Create image post"
                        trigger={<Button>Image</Button>}
                        actions={[<Button modal="close">Close</Button>, <Button onClick={() => this.createPost("image")}>Submit</Button>]}
                    >
                        <input type="url" placeholder="create image post" />
                    </Modal>
                </Dropdown>
                <PostList posts={this.state.posts} filter={this.state.filter} handleDeletePost={this.handleDeletePost} />
            </>
        )
    }

}
export default PostPage;
