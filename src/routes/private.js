/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { store } from '../store/index.js';

export default function RouteManager({
    component: Component,
    isPrivate,
    ...rest
}) {
    const isAuth = store.getState().auth.signed;

    if (isPrivate && !isAuth) return <Redirect to="/" />;

    if (!isPrivate && isAuth) return <Redirect to="/home" />;

    return <Route {...rest} component={Component} />;
}

RouteManager.propTypes = {
    isPrivate: PropTypes.bool,
    component: PropTypes.oneOfType([PropTypes.elementType, PropTypes.func])
        .isRequired
};

RouteManager.defaultProps = {
    isPrivate: false
};
