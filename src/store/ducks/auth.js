import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

const { Types, Creators } = createActions({
    signInRequest: ['email', 'password'],
    signInSucess: ['token']
});

export const AuthTypes = Types;
export default Creators;

export const INITIAL_STATE = Immutable({
    signedIn: !!localStorage.getItem('@CuidadoC:hash'),
    token: localStorage.getItem('@CuidadoC:hash') || null
});

export const sucess = (state, { token }) => {
    return state.merge({ signedIn: true, token });
};

export const reducer = createReducer(INITIAL_STATE, {
    [Types.SIGN_IN_SUCESS]: sucess
});
