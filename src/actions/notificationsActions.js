export const ADD_NOTIFICATION = 'ADD_NOTIFICATION';


export function addNotification(tweet) {
    return {
        type: ADD_NOTIFICATION,
        tweet
    }
}