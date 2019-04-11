import React from 'react';
import { Switch, Route } from 'react-router-dom';
import FeedPage from '../posts/FeedPage';
import PeoplePage from '../people/PeoplePage';
import ProfilePage from '../profile/ProfilePage';

const Main = () => {
    return (
        <Switch>
            <Route path='/profile/:userId' component={ProfilePage} />
            <Route path='/profile' component={ProfilePage} />
            <Route path='/people' component={PeoplePage} />
            <Route path='/' component={FeedPage} />
        </Switch>
    )

}
export default Main;