import React from 'react';
import { Switch, Route } from 'react-router-dom';
import People from '../../entities/People';
import Profile from '../profile/ProfilePage';
import PostPage from '../posts/PostPage';
import PostItem from '../posts/PostItem';


const Main = () => {
    return (
        <Switch>
            <Route path='/posts/:id' component={PostItem} />
            <Route path='/profile' component={Profile} />
            <Route path='/people' component={People} />
            <Route path='/' component={PostPage} />
        </Switch>
    )

}
export default Main;