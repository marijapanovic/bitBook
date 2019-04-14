import React from 'react';
import { Link } from 'react-router-dom';
import fetchAllUsers from '../../services/fetchAllUsers';
import Loading from '../components/Loading';

class PeoplePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            users: null,
            allUsers: [],
            query: "",

        };
    }

    componentDidMount() {
        fetchAllUsers()
            .then((users) => {
                this.setState({
                    allUsers: users,
                    users: users
                })
                console.log(users)
            })
    }

    handleInputChange = (event) => {
        const query = event.target.value;
        const filteredUsers = this.state.allUsers.filter((user) => {
            const fullName = `${user.nameFirst} ${user.nameLast}`;
            return fullName.includes(query)
        })
        this.setState({
            users: filteredUsers
        })
    }

    render() {
        const { users } = this.state;

        if (!this.state.users) {
            return <Loading />;
          }
          
        return (

            <div className='container'>
                <div className='center-align'>

                    <form className='blue-grey lighten-5 z-depth-1'>
                        <div className="input-field">
                            <input
                                className='search-people'
                                id="search"
                                type="search"
                                placeholder='Search'
                                onChange={this.handleInputChange}
                                required />
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

                                <div className='people-title'>
                                    <Link to={`/profile/${user.id}`}><h6>{user.namePrefix} {user.nameFirst} {user.nameLast}</h6></Link>
                                    <p>{user.aboutBio}</p>
                                </div>

                                <div className='people-time'>
                                    <p>Last post
                                        <br></br>
                                        at {user.createdAt}
                                    </p>
                                </div>
                            </li>
                        ))}
                    </ul>

                </div>
            </div>

        )
    }
}

export default PeoplePage;