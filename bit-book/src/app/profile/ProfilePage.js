import React from 'react';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
            show: false,
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
                                    <Modal.Title>UPDATE PROFILE</Modal.Title>
                                </Modal.Header>

                                <Modal.Body>
                                    <Form>

                                        <Form.Group controlId="formGroupPicture">
                                            <Row>
                                                <Col xs={6} md={4}>
                                                    <Image src="https://via.placeholder.com/150" rounded />
                                                </Col>
                                            </Row>
                                            <Button variant="primary" >
                                                Upload Image
                                            </Button>
                                        </Form.Group>

                                        <Form.Group controlId="formGroupName">
                                            <Row></Row>
                                            <Row>
                                                <Form.Label>Name</Form.Label>
                                            </Row>

                                            <Row>
                                                <Col>
                                                    <Form.Control type="text" placeholder="Prefix" />
                                                </Col>
                                                <Col>
                                                    <Form.Control type="text" placeholder="First Name" />
                                                </Col>
                                                <Col>
                                                    <Form.Control type="text" placeholder="Last Name" />
                                                </Col>
                                            </Row>
                                        </Form.Group>

                                        <Form.Group controlId="formGroupName">
                                            <Row>
                                                <Form.Label>Description</Form.Label>
                                            </Row>
                                            <Row>
                                                <Col>
                                                    <Form.Control placeholder="Bio" />
                                                </Col>
                                                <Col>
                                                    <Form.Control placeholder="Job" />
                                                </Col>
                                                <Col>
                                                    <Form.Control placeholder="Country Code" />
                                                </Col>
                                            </Row>
                                        </Form.Group>
                                    </Form>
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