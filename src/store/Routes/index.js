import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import ContactList from '../../ContactList';
import ContactDetail from '../../ContactDetail';
import FavouriteList from '../../FavouriteList';

const Routering = () => {

    return (
        <Router>
            <Switch>
                <Route path="/" exact component={ContactList} />
                <Route path="/contactDetail/:id" exact component={ContactDetail} />
                <Route path="/favouriteList" exact component={FavouriteList} />
            </Switch>
        </Router>

    )
};
export default Routering;