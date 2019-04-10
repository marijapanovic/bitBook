import React from 'react'
//import FeedPage from './FeedPage';
import VideoItem from './videoItem';
import ImageItem from './ImageItem';
import TextItem from './TextItem';

const FeedList = (props) => {
    const posts = props.posts
    return (
        posts.map(post => {
            if (post.type === 'video') {
                return <VideoItem post={post} />
            }
            else if (post.type === 'text') {
                return <TextItem post={post} />
            }
            else if (post.type === 'image') {
                return <ImageItem post={post} />
            }
        })

    )
}

export default FeedList;