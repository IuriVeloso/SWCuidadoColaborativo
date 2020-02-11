/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import store from '../store/index.js';

const PrivateRoutes = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            store.getState().auth.signedIn ? (
                <Component {...props} />
            ) : (
                <Redirect
                    to={{ pathname: '/', state: { from: props.location } }}
                />
            )
        }
    />
);

export default PrivateRoutes;
