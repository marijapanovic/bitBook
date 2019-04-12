import React from "react";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./EditProfile.css";

class EditProfile extends React.Component {
  constructor(props, ...args) {
    super(props, ...args);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
      user: null,
      updateUser: {
        namePrefix: "",
        nameFirst: "",
        nameLast: "",
        aboutBio: "",
        aboutJob: "",
        aboutCountryCode: ""
      }
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    if (!this.state.user) {
      return <h2>Loading</h2>;
    }

    return (
      <>
        <Button variant="primary" onClick={this.handleShow}>
          Edit profile
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>UPDATE PROFILE</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form>
              <Form.Group controlId="formGroupPicture">
                <Row>
                  <Col xs={6} md={4}>
                    <Image
                      src="https://via.placeholder.com/150"
                      roundedCircle
                    />
                  </Col>
                </Row>
                <Button variant="primary" type="search">
                  Upload Image
                </Button>
              </Form.Group>

              <Form.Group controlId="formGroupName">
                <Row />
                <Row>
                  <Form.Label>Name</Form.Label>
                </Row>

                <Row>
                  <Col>
                    <Form.Control
                      type="text"
                      placeholder={this.state.user.namePrefix}
                    />
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
      </>
    );
  }
}

export default EditProfile;
