import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Feed from '../../entities/Feed';
import People from '../../entities/People';
import Profile from '../../entities/Profile';
const Main = () => {
    return (
        <Switch>
            <Route path='/' component={Feed} />
            <Route path='/people' component={People} />
            <Route path='/profile' component={Profile} />


        </Switch>
    )

}
export default Main;