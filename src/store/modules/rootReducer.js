import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import auth from './auth/reducer.js';

export default history =>
    combineReducers({
        auth,
        router: connectRouter(history)
    });
