/* eslint-disable no-param-reassign */
import produce from 'immer';

const INITIAL_STATE = {
    aproved: false,
    admin: false
};

export default function member(state = INITIAL_STATE, action) {
    return produce(state, draft => {
        switch (action.type) {
            case '@member/ADD_NEW_MEMBER': {
                draft.aproved = true;
                console.tron.log(state);
                break;
            }
            case '@member/ADD_ADMIN_MEMBER': {
                draft.admin = true;
                break;
            }
            case '@member/EXCLUDE_MEMBER': {
                draft.aproved = false;
                break;
            }
            default:
        }
    });
}
