import React from 'react';
import { Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import history from './history.js';
import RouteManager from './private.js';

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
                <RouteManager path="/" exact component={Login} />
                <RouteManager path="/cadastro" component={Register} />
                <RouteManager path="/home" component={HomePage} isPrivate />
                <RouteManager path="/users" component={Login} isPrivate />
                <RouteManager path="/events" component={Login} isPrivate />
                <RouteManager
                    path="/recuperacao-senha"
                    component={ForgotPage}
                    isPrivate
                />
                <RouteManager
                    path="/redefinir-senha"
                    component={RedefinePage}
                    isPrivate
                />
                <RouteManager
                    path="/adicionar-paciente"
                    component={AddUserPage}
                    isPrivate
                />
                <RouteManager
                    path="/procurar-paciente"
                    component={SearchUserPage}
                    isPrivate
                />
                <RouteManager path="/paciente" component={UserPage} />
            </Switch>
        </ConnectedRouter>
    );
}
