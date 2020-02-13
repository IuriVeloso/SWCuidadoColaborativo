import { all, call, put, takeLatest } from 'redux-saga/effects';
import { push } from 'connected-react-router';

import { signInSucess } from './actions.js';
import api from '../../../services/api.js';
import history from '../../../routes/history.js';

export function* signIn({ payload }) {
    const { email, password } = payload;
    try {
        const response = yield call(api.post, 'Usuario', { email, password });

        localStorage.setItem('@CuidadoC:hash', response.data.token);
        api.defaults.headers.Authorization = `Bearer ${response.data.token}`;
        yield put(signInSucess(response.data.token));
        yield put(push('/home'));
    } catch (err) {
        // yield put (signFailure()) e fazer algo com isso
        localStorage.setItem('@CuidadoC:hash', '#@$43hj23b4h2');
        yield put(signInSucess(['#@$43hj23b4h2']));
        yield put(push('/home'));
    }
}

export function* signUp({ payload }) {
    const { email, password } = payload;
    try {
        const response = yield call(api.post, 'Usuario', { email, password });

        yield put(signInSucess(response.data.token));
    } catch (err) {
        // yield put (signFailure()) e fazer algo com isso
        console.tron.log(payload);
        yield put(signInSucess(['#@$43hj23b4h2']));
    }
}

export function findToken({ payload }) {
    if (!payload) return;

    const { token } = payload.auth;

    if (token) {
        api.defaults.headers.Authorization = `Bearer ${token}`;
    }
}

export function signOut() {
    history.push('/');
}

export default all([
    takeLatest('persist/REHYDRATE', findToken),
    takeLatest('@auth/SIGN_IN_REQUEST', signIn),
    takeLatest('@auth/SIGN_UP_REQUEST', signUp),
    takeLatest('@auth/SIGN_OUT', signOut)
]);
