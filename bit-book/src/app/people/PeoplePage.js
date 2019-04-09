import React from 'react';


class People extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (

            <div className='container'>
                <div className='center-align'>

                    <div className="nav-wrapper">
                        <form>
                            <div className="input-field">
                                <input id="search" type="search" required />
                                <label className="label-icon" for="search">
                                    <i className="material-icons">search</i>
                                </label>
                                <i className="material-icons">close</i>
                            </div>
                        </form>
                    </div>

                    <ul className="collection">

                        <li className="collection-item avatar">
                            <img src="" alt="" className="circle" />
                            <i class="material-icons circle">folder</i>
                            <span className="title">Jane Doe</span>
                            <p>Short user description bla bla</p>
                            <div>
                                <p>Last post at 07:53</p>
                            </div>
                        </li>

                    </ul>
                </div>
            </div>

        )
    }
}

export default People;