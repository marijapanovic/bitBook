import React from 'react';
import { Link } from 'react-router-dom';
import fetchUser from '../../services/fetchUser';

class ProfilePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {}
        }
    }

    componentDidMount() {
        fetchUser()
            .then((user) => {
                console.log(user)
                this.setState({
                    user
                })
            })
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
                            <p><Link to='/updateprofile:id'>Edit profile</Link></p>
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