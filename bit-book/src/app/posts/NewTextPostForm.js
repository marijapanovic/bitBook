import React from 'react';
import { Button } from 'react-materialize';
import { postPostText } from '../../services/servicesPosts';

class NewTextPostForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null
        };
    }

    createTextPost = (event) => {
        event.preventDefault();
        let formData = new FormData(event.target);
        let postText = formData.get("postText");
        postPostText(postText)
        .then(this.props.loadsPosts);
    }

    render() {
        return (
            <>
                <form onSubmit={this.createTextPost}>
                    <input name="postText" id="textPostData" type="text" placeholder="create text post" />
                    <Button type='submit'>Send</Button>
                </form>
            </>
        )
    }
}

export default NewTextPostForm;