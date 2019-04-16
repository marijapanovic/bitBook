import React from 'react'
import PropTypes from 'prop-types';
import VideoItem from './VideoItem';
import ImageItem from './ImageItem';
import TextItem from './TextItem';

function isTypeFiltered(type, filter) {
    return (filter === null || filter === type);
}

const PostList = ({ posts, filter, handleDeletePost}) => (
    posts.map(post => {
        if (isTypeFiltered(post.type, filter)) {
            if (post.type === 'video') {
                return <VideoItem key={post.id} post={post} showComments={true} handleDeletePost ={handleDeletePost}/>
            }
            else if (post.type === 'text') {
                return <TextItem key={post.id} post={post} showComments={true} handleDeletePost ={handleDeletePost}/>
            }
            else {
                return <ImageItem key={post.id} post={post} showComments={true} handleDeletePost ={handleDeletePost}/>
            }            
        } else {
            return <></>
        }
    })
)

PostList.propTypes = {
    posts: PropTypes.arrayOf(PropTypes.object),
    handleDeletePost : PropTypes.func
}

export default PostList;