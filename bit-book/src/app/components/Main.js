import React from 'react';
import { Switch, Route } from 'react-router-dom';
import People from '../../entities/People';
import Profile from '../profile/ProfilePage';
import FeedPage from '../posts/FeedPage';

const Main = () => {
    return (
        <Switch>
            <Route path='/' component={FeedPage} />
            <Route path='/people' component={People} />
            <Route path='/profile' component={Profile} />


        </Switch>
    )

}
export default Main;