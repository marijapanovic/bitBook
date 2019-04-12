import React from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import fetchUser from '../../services/fetchUser';
// import UpdateProfile from './UpdateProfile';

import './UpdateProfile.css';

class ProfilePage extends React.Component {
    constructor(props, ...args) {
        super(props, ...args);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            user: {},
            modalShow: false,
        }
    }

    componentDidMount() {
        const id = this.props.match.params.userId;
        fetchUser(id)
            .then((user) => {
                console.log(user)
                this.setState({
                    user
                })
            })
    }

    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }

    render() {

        return (
            <>
                <div key={this.state.user.id} className='container'>
                    <div className='center-align'>

                        <div className='profile-picture'>
                            <img src={this.state.user.avatarUrl} className='z-depth-2' alt='Profile picture' />
                        </div>

                        <div className='profile-title'>
                            <h3>
                                {this.state.user.namePrefix} {this.state.user.nameFirst} {this.state.user.nameLast}
                            </h3>

                            <Button variant="primary" onClick={this.handleShow}>
                                Edit profile
                            </Button>

                            <Modal
                                show={this.state.show}
                                onHide={this.handleClose}>

                                <Modal.Header closeButton>
                                    <Modal.Title>Update profile</Modal.Title>
                                </Modal.Header>

                                <Modal.Body>

                                    Woohoo, you're reading this text in a modal!

                            </Modal.Body>

                                <Modal.Footer>
                                    <Button variant="secondary" onClick={this.handleClose}>
                                        Close
                                </Button>
                                    <Button variant="primary" onClick={this.handleClose}>
                                        Update
                                </Button>
                                </Modal.Footer>

                            </Modal>

                        </div>

                        <div className='profile-body'>
                            <p>
                                <span>Bio: </span>
                                {this.state.user.aboutBio}
                                <br></br>

                                <span>Job: </span>
                                {this.state.user.aboutJob}
                                <br></br>

                                <span>Country Code: </span>
                                {this.state.user.aboutCountryCode}
                                <br></br>
                            </p>
                        </div>

                        <div className="profile-posts">
                            <a className="waves-effect waves-light btn-small">{this.state.user.noOfPosts}  posts</a>
                        </div>

                        <div className="profile-comments">
                            <a className="waves-effect waves-light btn-small">{this.state.user.noOfComments} comments</a>
                        </div>

                    </div>
                </div>
            </>
        )
    }
}

export default ProfilePage;