import React from 'react';
import { Route } from 'react-router-dom';

import HomeView from './containers/content/HomeView';
import ColorView from './containers/content/ColorView';
import avatar from './components/avatar/avatar';
import button from './components/button/button';
import chips from './components/chips/chips';
import notification from './components/notification/notification';
import table from './components/table/table';

const BaseRouter = () => (
    <div>
        <Route exact path ='/home' component={HomeView} />
        <Route exact path ='/color' component={ColorView} />
        <Route exact path ='/avatar' component={avatar} />
        <Route exact path ='/button' component={button} />
        <Route exact path ='/chips' component={chips} />
        <Route exact path ='/notification' component={notification} />
        <Route exact path ='/table' component={table} />
    </div>
);

export default BaseRouter;