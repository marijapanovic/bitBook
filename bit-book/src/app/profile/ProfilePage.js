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
                <div>

                    <div className=''>
                        <img src={this.state.avatarUrl} alt='Profile picture' />
                    </div>

                    <div className=''>
                        <h3>
                            {this.state.name.prefix} {this.state.name.first} {this.state.name.last}</h3>
                        <p><Link to=''>Edit profile</Link></p>
                    </div>

                    <div className=''>
                        <p>
                            {this.state.about.bio}
                            <br></br>
                            {this.state.about.job}
                            <br></br>
                            {this.state.about.countryCode}
                            <br></br>
                        </p>
                    </div>

                    <div className="chip">
                        <i className="small material-icons">copyright</i>
                        15 posts
                    </div>

                    <div className="chip">
                        <i className="small material-icons">copyright</i>
                        30 Comments
                    </div>


                </div>
            </>
        )
    }
}




export default ProfilePage;