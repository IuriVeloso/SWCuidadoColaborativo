/* eslint-disable require-yield */
import { all, takeLatest } from 'redux-saga/effects';

export function* AproveUser({ payload }) {
    /* colocar algo para enviar notificação ao usuário que for aprovado */
    return payload;
}

export function* AproveAdmin({ payload }) {
    return payload;
    /* colocar algo para enviar notificação ao usuário que virou admin */
}

export function* ExcludeMember({ payload }) {
    return payload;
    /* excluir usuario */
}

export default all([
    takeLatest('@member/ADD_NEW_MEMBER', AproveUser),
    takeLatest('@member/ADD_ADMIN_MEMBER', AproveAdmin),
    takeLatest('@member/EXCLUDE_MEMBER', ExcludeMember)
]);
