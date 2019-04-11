import React from 'react';
import { Link } from 'react-router-dom';
import fetchUser from '../../services/fetchUser';
import UpdateProfile from './UpdateProfile';

class ProfilePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {},
            // isShowing: false
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

    // openModalHandler = () => {
    //     this.setState({
    //         isShowing: true
    //     });
    // }

    // closeModalHandler = () => {
    //     this.setState({
    //         isShowing: false
    //     });
    // }

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

                            <p className='waves-effect waves-light modal-trigger'><Link to={`/updateprofile/${this.state.user.id}`} >Edit profile</Link></p>


                            {/* <div>
                                {this.state.isShowing ? <div onClick={this.closeModalHandler} className="back-drop"></div> : null}

                                <button className="open-modal-btn" onClick={this.openModalHandler}>Open Modal</button>

                                <UpdateProfile
                                    className="modal"
                                    show={this.state.isShowing}
                                    close={this.closeModalHandler}>
                                    Maybe aircrafts fly very high because they don't want to be seen in plane sight?
                                </UpdateProfile>
                            </div> */}


                            <div id="modal1" className="modal open" tabindex="0" >
                                <div className="modal-content">
                                    <h4>Modal Header</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                                </div>
                                <div className="modal-footer">
                                    <a href="#!" className="modal-close waves-effect waves-red btn-flat">Disagree</a>
                                    <a href="#!" className="modal-close waves-effect waves-green btn-flat">Agree</a>
                                </div>
                            </div>




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