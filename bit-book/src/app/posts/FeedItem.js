import React from 'react';
import fetchPost from '../../services/fetchPosts'

class FeedItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            post: {},
            comments: []
        }
    }
    componentDidMount() {
        const id = this.props.match.params.id;
        fetchPost(id)
            .then((post) => {
                this.setState({
                    post
                })
            })
    }

    showDetails = () => {

    }


    render() {

        return (
            <div>
                <div>PostId: {this.props.post}</div>
                <div>
                    <input type="text" placeholder="Add your comment" />
                    <button type="submit">Send</button>
                </div>
                {/* <div>
                    {this.props.post.comments.map((comment) => {
                        return (comment.userId, comment.body)
                    })}
                </div> */}
            </div>
        )
    }
}
export default FeedItem;