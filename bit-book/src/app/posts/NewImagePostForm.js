import React from 'react';
import { Button } from 'react-materialize';
import { postPostImage } from '../../services/servicesPosts';

class NewImagePostForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null
        };
    }

    createImagePost = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const postText = formData.get("postImage");
        if(postText.length > 0){
            postPostImage(postText)
            .then(this.props.loadsPosts);
        }
        else{
            this.setState({
                error : "Nije moguce kreirati prazan post, unesite url za sliku."
            })
        }
    }

    render() {
        let errorMessage = <></>
        if (this.state.error !== null) {
            errorMessage = <span>{this.state.error}</span>
        }
        return (
            <>
                <form onSubmit={this.createImagePost}>
                    <input name="postImage" type="url" placeholder="create image post" />{errorMessage}
                    <Button type='submit'>Send</Button>
                </form>
            </>
        )
    }
}

export default NewImagePostForm;