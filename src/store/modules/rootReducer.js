import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import auth from './auth/reducer.js';
import member from './member/reducer.js';

export default history =>
    combineReducers({
        auth,
        member,
        router: connectRouter(history)
    });
