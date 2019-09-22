import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Settings from './pages/Settings/Settings';
import NoPage from './pages/NoPage/NoPage';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/settings" component={Settings} />
            <Route path="*" component={NoPage} />
        </Switch>
    </BrowserRouter>
);

export default Routes;