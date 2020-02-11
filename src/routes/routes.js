import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import history from './history.js';
import Private from './private.js';

import Login from '../pages/LoginPage/index.js';
import Register from '../pages/RegisterPage/index.js';
import HomePage from '../pages/HomePage/index.js';
import ForgotPage from '../pages/ForgotPage/index.js';
import RedefinePage from '../pages/RedefinePage/index.js';
import AddUserPage from '../pages/AddUserPage/index.js';
import SearchUserPage from '../pages/SearchUserPage/index.js';
import UserPage from '../pages/UserPage/index.js';

export default function Routes() {
    return (
        <ConnectedRouter history={history}>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/cadastro" component={Register} />
                <Private path="/home" component={HomePage} />
                <Private path="/users" component={Login} />
                <Private path="/events" component={Login} />
                <Private path="/recuperacao-senha" component={ForgotPage} />
                <Private path="/redefinir-senha" component={RedefinePage} />
                <Private path="/adicionar-paciente" component={AddUserPage} />
                <Private path="/procurar-paciente" component={SearchUserPage} />
                <Private path="/paciente" component={UserPage} />
            </Switch>
        </ConnectedRouter>
    );
}
