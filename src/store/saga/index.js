import { all, takeLatest } from 'redux-saga/effects';

import { AuthTypes } from '../ducks/auth.js';
import { signIn } from './auth.js';

export default function* rootSaga() {
    return yield all([takeLatest(AuthTypes.SIGN_IN_REQUEST, signIn)]);
}
