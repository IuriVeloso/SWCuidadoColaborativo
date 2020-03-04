export function addNewMember(user, email) {
    return {
        type: '@member/ADD_NEW_MEMBER',
        payload: { user, email }
    };
}

export function refuseNewMember(user, email) {
    return {
        type: '@member/REFUSE_NEW_MEMBER',
        payload: { user, email }
    };
}

export function addAdminMember(user, email) {
    return {
        type: '@member/ADD_ADMIN_MEMBER',
        payload: { user, email }
    };
}

export function excludeMember(user, email) {
    return {
        type: '@member/EXCLUDE_MEMBER',
        payload: { user, email }
    };
}
