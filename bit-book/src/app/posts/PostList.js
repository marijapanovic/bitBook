import React from 'react'
import PropTypes from 'prop-types';
import VideoItem from './VideoItem';
import ImageItem from './ImageItem';
import TextItem from './TextItem';

const PostList = ({ posts, handleDeletePost}) => (
    posts.map(post => {
        if (post.type === 'video') {
            return <VideoItem post={post} showComments={true} handleDeletePost ={handleDeletePost}/>
        }
        else if (post.type === 'text') {
            return <TextItem post={post} showComments={true} handleDeletePost ={handleDeletePost}/>
        }
        else {
            return <ImageItem post={post} showComments={true} handleDeletePost ={handleDeletePost}/>
        }
    })
)

PostList.propTypes = {
    posts: PropTypes.arrayOf(PropTypes.object),
    handleDeletePost : PropTypes.func
}

export default PostList;