import { LOGIN, SIGN_UP } from '../actions/loginActions'

const initialState = {
    isLoggedIn: false
}

export default function loginReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN:
            return { isLoggedIn: true };
        case SIGN_UP:
            return { isLoggedIn: true };
        default:
            return state;
    }
}