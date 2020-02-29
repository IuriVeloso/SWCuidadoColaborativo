import { all } from 'redux-saga/effects';

import auth from './auth/saga';
import member from './member/saga';

export default function* rootSaga() {
    return yield all([auth, member]);
}
