import React from "react";
import { fetchPosts, deletePost } from "../../services/servicesPosts";
import Loading from "../components/Loading";
import PostList from "./PostList";

class PostPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: null
    };
  }
  loadsPosts = () => {
    fetchPosts().then(posts => {
      this.setState({
        posts: posts
      });
    });
  };
  componentDidMount() {
    this.loadsPosts();
  }
  handleDeletePost = (event, postId) => {
    postId = event.target.value;
    deletePost(postId, this.loadsPosts);
  };

  render() {
    if (!this.state.posts) {
      return <Loading />;
    }

    return (
      <PostList 
        posts={this.state.posts}
        handleDeletePost={this.handleDeletePost}
      />
    );
  }
}
export default PostPage;
