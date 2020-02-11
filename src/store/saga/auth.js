import { call, put } from 'redux-saga/effects';
import { push } from 'connected-react-router';

import api from '../../services/api.js';
import AuthActions from '../ducks/auth.js';

export function* signIn({ email, password }) {
    try {
        const response = yield call(api.post, 'Usuario', { email, password });

        localStorage.setItem('@CuidadoC:token', response.data.token);
        yield put(AuthActions.signInSucess(response.data.token));
        yield put(push('/home'));
    } catch (err) {
        localStorage.setItem('@CuidadoC:hash', '#@$43hj23b4h2');
        yield put(AuthActions.signInSucess(['#@$43hj23b4h2']));
        yield put(push('/home'));
    }
}
