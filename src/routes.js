import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './pages/LoginPage/index.js';
import Register from './pages/RegisterPage/index.js';
import HomePage from './pages/HomePage/index.js';
import ForgotPage from './pages/ForgotPage/index.js';
import RedefinePage from './pages/RedefinePage/index.js';
import AddUserPage from './pages/AddUserPage/index.js';
import SearchUserPage from './pages/SearchUserPage/index.js';
import UserPage from './pages/UserPage/index.js';
import PartnersPage from './pages/PartnersPage/index.js';
import SchoolsPage from './pages/SchoolsPage/index.js';
import ONGPage from './pages/ONGPage/index.js';
import CapesPage from './pages/CapesPage/index.js';
import CREASPage from './pages/CREASPage/index.js';
import CFPage from './pages/CFPage/index.js';
import CapsiPage from './pages/CapsiPage/index.js';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/cadastro" component={Register} />
                <Route path="/home" component={HomePage} />
                <Route path="/users" component={Login} />
                <Route path="/events" component={Login} />
                <Route path="/recuperacao-senha" component={ForgotPage} />
                <Route path="/redefinir-senha" component={RedefinePage} />
                <Route path="/adicionar-paciente" component={AddUserPage} />
                <Route path="/procurar-paciente" component={SearchUserPage} />
                <Route path="/paciente" component={UserPage} />
                <Route path="/parceiros" component={PartnersPage} />
                <Route path="/escolas-e-creches" component={SchoolsPage} />
                <Route path="/ONGs" component={ONGPage} />
                <Route path="/capes-adulto" component={CapesPage} />
                <Route path="/CREAS/CRAS" component={CREASPage} />
                <Route path="/CF/CMS" component={CFPage} />
                <Route path="/CAPSI" component={CapsiPage} />
            </Switch>
        </BrowserRouter>
    );
}
