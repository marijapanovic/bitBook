import React from 'react'
import PropTypes from 'prop-types';
import VideoItem from './VideoItem';
import ImageItem from './ImageItem';
import TextItem from './TextItem';

const PostList = ({ posts }) => (
    posts.map(post => {
        if (post.type === 'video') {
            return <VideoItem post={post} showComments={true} />
        }
        else if (post.type === 'text') {
            return <TextItem post={post} showComments={true} />
        }
        else {
            return <ImageItem post={post} showComments={true} />
        }
    })
)

PostList.propTypes = {
    posts: PropTypes.arrayOf(PropTypes.object),
}

export default PostList;