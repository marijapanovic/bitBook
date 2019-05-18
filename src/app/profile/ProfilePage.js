import React from "react";
import Button from "react-bootstrap/Button";

import fetchUser from "../../services/fetchUser";
import EditProfile from "./EditProfile";
import Loading from '../components/Loading';

import "./EditProfile.css";

class ProfilePage extends React.Component {
  constructor(props) {
    super(props);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
      user: null
    };
  }

  componentDidMount() {
    this.getUser();
  }

  getUser = () => {
    const id = this.props.match.params.userId;
    fetchUser(id).then(user => {
      console.log(user);
      this.setState({
        user
      });
    });
  }



  handleClose() {
    this.setState({
      show: false,
    });
  }

  handleShow() {
    this.setState({ 
      show: true
    });
  }


  render() {
    if (!this.state.user) {
      return <Loading />;
    }

    const { user, show } = this.state;
    const { 
      id, 
      avatarUrl, 
      namePrefix, 
      nameFirst, 
      nameLast, 
      aboutBio, 
      aboutJob, 
      aboutCountryCode
     } = user;

    return (
      <>
        <div key={id} className="container">
          <div className="center-align">
            <div className="profile-picture">
              <img
                src={avatarUrl}
                className="z-depth-2"
                alt="Profile picture"
              />
            </div>

            <div className="profile-title">
              <h3>
                {namePrefix} {nameFirst} {nameLast}
              </h3>

              <Button variant="primary" onClick={this.handleShow}>
                  Edit profile
              </Button>  

              <EditProfile 
                user={user} 
                show={show} 
                handleClose={this.handleClose}
                handleShow={this.handleShow}        
                getUser={this.getUser}
              />

            </div>

            <div className="profile-body">
              <p>
                <span>Bio: </span>
                {aboutBio}
                <br />

                <span>Job: </span>
                {aboutJob}
                <br />

                <span>Country Code: </span>
                {aboutCountryCode}
                <br />
              </p>
            </div>

            <div className="profile-posts">
              <a className="waves-effect waves-light btn-small">
                {this.state.user.noOfPosts} posts
              </a>
            </div>

            <div className="profile-comments">
              <a className="waves-effect waves-light btn-small">
                {this.state.user.noOfComments} comments
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
}


export default ProfilePage;
