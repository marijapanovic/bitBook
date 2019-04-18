import React from 'react';
import { Button } from 'react-materialize';
import { postPostVideo } from '../../services/servicesPosts';

class NewVideoPostForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null
        };
    }

    createVideoPost = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        let postText = formData.get("postVideo");
        if (postText.startsWith("https://www.youtube.com")) {
            this.setState({error: null});
            postText = postText.replace("/watch?v=", "/embed/");
            postPostVideo(postText)
            .then(this.props.loadsPosts);
        } else {
            this.setState({error: "Unesite video sa youtube-a"})
        }
    }

    render() {
        let errorMessage = <></>
        if (this.state.error !== null) {
            errorMessage = <span>{this.state.error}</span>
        }
        return (
            <>
                <form onSubmit={this.createVideoPost}>
                    <input name="postVideo" type="url" placeholder="create video post" />
                    {errorMessage}
                    <Button type='submit'>Send</Button>
                </form>
            </>
        )
    }
}

export default NewVideoPostForm;