import ShareData from '../shared/ShareData';

const FetchPosts = () => {
    fetch(ShareData.method, ShareData.url, ShareData.header)
        .then(response => response.json())
}

export default FetchPosts;