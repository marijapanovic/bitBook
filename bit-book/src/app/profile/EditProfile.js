import React from "react";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// import updateProfile from '../../services/updateProfile';

import "./EditProfile.css";
import updateProfile from "../../services/updateProfile";

class EditProfile extends React.Component {
  constructor(props) {
    super(props);

    // this.handleShow = this.handleShow.bind(this);
    // this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: props.show,
      user: props.user,
      handleClose: props.handleClose,
      handleShow: props.handleShow,
      getUser: props.getUser

      //   avatarUrl: "",
      //   namePrefix: "",
      //   nameFirst: "",
      //   nameLast: "",
      //   aboutBio: "",
      //   aboutJob: "",
      //   aboutCountryCode: ""
    };
  }

  handleClose() {
    this.setState({
      show: false
    });
  }

  handleShow() {
    this.setState({
      show: true
    });
  }

  editProfileInfo = event => {
    event.preventDefault();
    const { user } = this.state;
    // const userProfile = {
    //   ...user,
    //   namePrefix: this.user.namePrefix,
    //   nameFirst: this.user.nameFirst,
    //   nameLast: this.user.nameLast,
    //   aboutBio: this.user.aboutBio,
    //   aboutJob: this.user.aboutJob,
    //   aboutCountryCode: this.user.aboutCountryCode
    // };

    const updatedUser = {
      name: {
        first: user.nameFirst,
        last: user.nameLast
      }
    };

    updateProfile(user.id, updatedUser)
      .then(res => {
        window.location.reload();
      })
      .catch(err => {});
  };

  // this.setState(prevState => ({
  //     user: {
  //         ...prevState.user,
  //         namePrefix: this.user.namePrefix,
  //         nameFirst: this.user.nameFirst,
  //         nameLast: this.user.nameLast,
  //         aboutBio: this.user.aboutBio,
  //         aboutJob: this.user.aboutJob,
  //         aboutCountryCode: this.user.aboutCountryCode,
  //     }
  // }))}

  changePrefixName = event => {
    const { user } = this.state;
    const userPrefix = {
      ...user,
      namePrefix: event.target.value
    };
    this.setState({
      user: userPrefix
    });
  };

  changeFirstName = event => {
    const { user } = this.state;
    const userFirstName = {
      ...user,
      nameFirst: event.target.value
    };
    this.setState({
      user: userFirstName
    });
  };

  changeLastName = event => {
    const { user } = this.state;
    const userLastName = {
      ...user,
      nameLast: event.target.value
    };
    this.setState({
      user: userLastName
    });
  };

  changeAboutBio = event => {
    const { user } = this.state;
    const userAboutBio = {
      ...user,
      aboutBio: event.target.value
    };
    this.setState({
      user: userAboutBio
    });
  };

  changeAboutJob = event => {
    const { user } = this.state;
    const userAboutJob = {
      ...user,
      aboutJob: event.target.value
    };
    this.setState({
      user: userAboutJob
    });
  };

  changeAboutCountryCode = event => {
    const { user } = this.state;
    const userAboutCountryCode = {
      ...user,
      aboutCountryCode: event.target.value
    };
    this.setState({
      user: userAboutCountryCode
    });
  };

  render() {
    const { user, show } = this.props;
    const {
      avatarUrl,
      namePrefix,
      nameFirst,
      nameLast,
      aboutBio,
      aboutJob,
      aboutCountryCode
    } = this.state.user;

    if (!show) {
      return null;
    }

    return (
      <>
        <Modal show={show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>UPDATE PROFILE</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form>
              <Form.Group controlId="formGroupPicture">
                <Row>
                  <Col xs={6} md={4}>
                    <Image src={avatarUrl} roundedCircle />
                  </Col>
                </Row>
                <Button variant="primary">Upload Image</Button>
              </Form.Group>

              <Form.Group controlId="formGroupName">
                <Row />

                <Row>
                  <Col>
                    <Form.Label>Prefix</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Prefix"
                      value={namePrefix}
                      name={namePrefix}
                      onChange={this.changePrefixName}
                    />
                  </Col>
                  <Col>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="First Name"
                      value={nameFirst}
                      name={nameFirst}
                      onChange={this.changeFirstName}
                    />
                  </Col>
                  <Col>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Last Name"
                      value={nameLast}
                      name={nameLast}
                      onChange={this.changeLastName}
                    />
                  </Col>
                </Row>
              </Form.Group>

              <Form.Group controlId="formGroupName">
                <Row>
                  <Form.Label>Description</Form.Label>
                </Row>
                <Row>
                  <Col>
                    <Form.Label>Bio</Form.Label>
                    <Form.Control
                      placeholder="Bio"
                      value={aboutBio}
                      name={aboutBio}
                      onChange={this.changeAboutBio}
                    />
                  </Col>
                  <Col>
                    <Form.Label>Job</Form.Label>
                    <Form.Control
                      placeholder="Job"
                      value={aboutJob}
                      name={aboutJob}
                      onChange={this.changeAboutJob}
                    />
                  </Col>
                  <Col>
                    <Form.Label>Country Code</Form.Label>
                    <Form.Control
                      placeholder="Country Code"
                      value={aboutCountryCode}
                      name={aboutCountryCode}
                      onChange={this.changeAboutCountryCode}
                    />
                  </Col>
                </Row>
              </Form.Group>
            </Form>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.editProfileInfo}>
              Update
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default EditProfile;
