/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import store from '../store/index.js';

export default function RouteManager({
    component: Component,
    isPrivate,
    ...rest
}) {
    const isAuth = store.getState().auth.signed;

    if (isPrivate && !isAuth) return <Redirect to="/" />;

    /* if (!isPrivate && isAuth) return <Redirect to="/home" />; 
    só liberar quando tiver logout pronto, 
    pois essa linha impede que o usuário logado vá para a pagina de Login denovo */

    return <Route {...rest} component={Component} />;
}

RouteManager.propTypes = {
    isPrivate: PropTypes.bool,
    component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
        .isRequired
};

RouteManager.defaultProps = {
    isPrivate: false
};
