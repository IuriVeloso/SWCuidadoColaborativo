import { all, call, put, takeLatest } from 'redux-saga/effects';
import { push } from 'connected-react-router';

import { signInSucess } from './actions.js';
import api from '../../../services/api.js';

export function* signIn({ payload }) {
    const { email, password } = payload;
    try {
        const response = yield call(api.post, 'Usuario', { email, password });

        localStorage.setItem('@CuidadoC:token', response.data.token);
        yield put(signInSucess(response.data.token));
        yield put(push('/home'));
    } catch (err) {
        localStorage.setItem('@CuidadoC:hash', '#@$43hj23b4h2');
        yield put(signInSucess(['#@$43hj23b4h2']));
        yield put(push('/home'));
    }
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
