import React from 'react';
import { Switch, Route } from 'react-router-dom';
//import Feed from '../../entities/Feed';
import People from '../../entities/People';
import Profile from '../../entities/Profile';
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