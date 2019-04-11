import React from 'react'
//import FeedPage from './FeedPage';
import VideoItem from './VideoItem';
import ImageItem from './ImageItem';
import TextItem from './TextItem';

const PostList = (props) => {
    const posts = props.posts

    return (
        posts.map(post => {
            //const id = props.match.params.post.id;
            if (post.type === 'video') {
                return <VideoItem post={post} showComments={true} />
            }
            else if (post.type === 'text') {
                return <TextItem post={post} showComments={true} />
            }
            else if (post.type === 'image') {
                return <ImageItem post={post} showComments={true} />
            }
        })

    )
}

export default PostList;