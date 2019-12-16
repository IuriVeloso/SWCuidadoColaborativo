import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Login from './pages/LoginPage';
import Register from './pages/RegisterPage';
import HomePage from './pages/HomePage';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path= "/" exact component={Login}/>
                <Route path= "/cadastro" component={Register}/>
                <Route path= "/home" component={HomePage}/>
                <Route path= "/users" component={Login}/>
                <Route path= "/events" component={Login}/>
            </Switch>
        </BrowserRouter>
    );
}