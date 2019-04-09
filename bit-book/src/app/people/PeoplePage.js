import React from 'react';
import fetchAllUsers from '../../services/fetchAllUsers';

class People extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            users: []
        };
    }

    componentDidMount() {
        fetchAllUsers()
            .then((users) => {
                this.setState({
                    users
                })
            })
    }

    render() {
        const { users } = this.state;

        return (

            <div className='container'>
                <div className='center-align'>

                    <form className='blue lighten-2 z-depth-1'>
                        <div className="input-field">
                            <input id="search" type="search" placeholder='Search' required />
                            <label className="label-icon" for="search">
                                <i className="material-icons">search</i>
                            </label>
                            <i className="material-icons">close</i>
                        </div>
                    </form>

                    <ul className="collection z-depth-1">

                        {users.map(user => (
                            <li key={user.id} className="collection-item avatar">
                                <img src={user.avatarUrl} alt="Profile picture" className="circle" />
                                <span className="title">{user.namePrefix} {user.nameFirst} {user.nameLast}</span>
                                <p>{user.aboutBio}</p>
                                <div>
                                    <p>{user.createdAt}</p>
                                </div>
                            </li>
                        ))}

                    </ul>

                </div>
            </div>

        )
    }
}

export default People;