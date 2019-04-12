import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import './UpdateProfile.css';

class UpdateProfile extends React.Component {
    constructor(props) {
        super(props);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            show: false,

        };
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
                <Button variant="primary" onClick={this.handleShow}>
                    Edit profile
                </Button>

                <Modal
                    show={this.state.show} onHide={this.handleClose}

                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >

                    <Modal.Header closeButton>

                        <Modal.Title id="contained-modal-title-vcenter">Update profile</Modal.Title>

                    </Modal.Header>

                    <Modal.Body>
                        AAAAAAAAAAAAAAAAA
                    </Modal.Body>

                    <Modal.Footer>

                        <Button variant="secondary" onClick={() => { this.setState({ show: false }) }}>
                            CLOSE
                     </Button>

                        <Button variant="primary" onClick={this.handleClose}>
                            UPDATE
                     </Button>

                    </Modal.Footer>
                </Modal>

            </>
        );
    }
}

export default UpdateProfile;
