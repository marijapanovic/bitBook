import React from 'react';
import PostList from './PostList';
import { fetchPosts, deletePost, postPostText, postPostVideo, postPostImage } from '../../services/servicesPosts';
import Loading from '../components/Loading';
import { Dropdown, Button, Modal } from 'react-materialize';
class PostPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: null,
            postContent: ""
        }
    }
    loadsPosts = () => {
        fetchPosts()
            .then((posts) => {
                this.setState({
                    posts: posts,
                    filter: null
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
    //     event.preventDefault();
    // }

    createPost = (type) => {
        console.log(type);
    }
    handleChange = (event) => {
        this.setState({
            postContent: event.target.value
        })
    }
    createNewPost = (event) => {
        event.preventDefault();

    }


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
                        actions={[<Button modal="close">Close</Button>, <Button onClick={() => postPostText("text")}>Submit</Button>]}
                    >
                        <input type="text" value={this.state.postContent} onChange={this.handleChange} placeholder="create text post" />
                    </Modal>
                    <Modal header="Create video post"
                        trigger={<Button>Video</Button>}
                        actions={[<Button modal="close">Close</Button>, <Button onClick={() => this.createPost("video")}>Submit</Button>]}
                    >
                        <input type="url" placeholder="create video post" />
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
