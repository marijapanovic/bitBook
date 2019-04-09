import React from 'react';
import { Switch, Route } from 'react-router-dom';
//import Feed from '../../entities/Feed';
import People from '../../entities/People';
import Profile from '../../entities/Profile';
import FeedPage from '../posts/FeedPage';
import FeedItem from '../posts/FeedItem';

const Main = () => {
    return (
        <Switch>
            <Route path='/posts/:id' component={FeedItem} />
            <Route path='/profile' component={Profile} />
            <Route path='/people' component={People} />
            <Route path='/' component={FeedPage} />
        </Switch>
    )

}
export default Main;