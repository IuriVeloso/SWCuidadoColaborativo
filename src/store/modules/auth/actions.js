export function signInRequest(email, password) {
    return {
        type: '@auth/SIGN_IN_REQUEST',
        payload: { email, password }
    };
}
export function signInSucess(token, user) {
    return {
        type: '@auth/SIGN_IN_SUCESS',
        payload: { token, user }
    };
}
export function signFailed() {
    return {
        type: '@auth/SIGN_FAILED'
    };
}

export function signUpRequest(
    fullName,
    email,
    pass,
    confirmPass,
    phone,
    service,
    profession,
    $function,
    matchPass,
    matchEmail
) {
    return {
        type: '@auth/SIGN_UP_REQUEST',
        payload: {
            fullName,
            email,
            pass,
            confirmPass,
            phone,
            service,
            profession,
            $function,
            matchPass,
            matchEmail
        }
    };
}

export function signOut() {
    return {
        type: '@auth/SIGN_OUT'
    };
}
