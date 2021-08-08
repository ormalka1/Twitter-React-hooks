export const LOGIN = 'LOGIN';
export const SIGN_UP = 'SIGN_UP';
export const ADD_TWEET = 'ADD_TWEET';

export const login = {
    type: LOGIN
}

export const signup = {
    type: SIGN_UP
}

export function addTweet(tweet) {
    return {
        type: ADD_TWEET,
        tweet
    }
}


