import React from 'react';
import { Link } from 'react-router-dom';

class ProfilePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "id": 2,
            "sid": "4ZX4tPZqMy",
            "email": "pietro_russel@yahoo.com",
            "createdAt": "2019-01-16T17:58:52.634Z",
            "avatarUrl": "https://s3.amazonaws.com/uifaces/faces/twitter/rangafangs/128.jpg",
            "isPublic": false,
            "about": {
                "bio": "Ut consectetur neque est qui.",
                "job": "Dynamic Accountability Strategist",
                "countryCode": "IE"
            },
            "name": {
                "prefix": "Miss",
                "first": "Una",
                "last": "Kutch"
            },
            "comments": [
                {
                    "id": 8,
                    "sid": "DM9Ti7BGDTO",
                    "postId": 7,
                    "userId": 2,
                    "createdAt": "2019-01-16T17:58:52.637Z",
                    "isPublic": false,
                    "body": "Ad quae aut consequatur est deleniti aut numquam. Recusandae temporibus est illum accusamus et suscipit. Aut fugiat ut. Et nostrum voluptas eaque quisquam."
                },
            ]
        }
    }



    render() {
        return (
            <>
                <div key={this.state.id} className='container'>
                    <div className='center-align'>

                        <div className='profile-picture'>
                            <img src={this.state.avatarUrl} className='z-depth-2' alt='Profile picture' />
                        </div>

                        <div className='profile-title'>
                            <h3>
                                {this.state.name.prefix} {this.state.name.first} {this.state.name.last}</h3>
                            <p><Link to='/updateprofile:id'>Edit profile</Link></p>
                        </div>

                        <div className='profile-body'>
                            <p>
                                <span>Bio: </span>
                                {this.state.about.bio}
                                <br></br>

                                <span>Job: </span>
                                {this.state.about.job}
                                <br></br>

                                <span>Country Code: </span>
                                {this.state.about.countryCode}
                                <br></br>
                            </p>
                        </div>

                        <div className="profile-posts">
                            <a className="waves-effect waves-light btn-small">15 posts</a>
                        </div>

                        <div className="profile-comments">
                            <a className="waves-effect waves-light btn-small">30 comments</a>
                        </div>

                    </div>
                </div>
            </>
        )
    }
}




export default ProfilePage;