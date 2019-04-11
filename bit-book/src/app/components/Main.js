import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PeoplePage from '../people/PeoplePage';
import ProfilePage from '../profile/ProfilePage';
import PostPage from '../posts/PostPage';
import PostItem from '../posts/PostItem';

const Main = () => {
    return (
        <Switch>

            <Route path='/profile/:userId' component={ProfilePage} />
            <Route path='/profile' component={ProfilePage} />
            <Route path='/people' component={PeoplePage} />
            <Route path='/posts/:id' component={PostItem} />
            <Route path='/' component={PostPage} />

        </Switch>
    )

}
export default Main;