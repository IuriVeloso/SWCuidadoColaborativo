import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Login from './pages/LoginPage';
import Register from './pages/RegisterPage';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path= "/" exact component={Login}/>
                <Route path= "/cadastro" component={Register}/>
            </Switch>
        </BrowserRouter>
    );
}