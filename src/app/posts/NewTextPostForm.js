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
        const formData = new FormData(event.target);
        const postText = formData.get("postText");
        if(postText.length > 0){
            postPostText(postText)
            .then(this.props.loadsPosts);
        }
        else{
            this.setState({
                error : "Nije moguce kreirati prazan post, unesite neki text."
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
                <form onSubmit={this.createTextPost}>
                    <input name="postText" type="text" placeholder="create text post" />{errorMessage}
                    <Button type='submit'>Send</Button>
                </form>
            </>
        )
    }
}

export default NewTextPostForm;