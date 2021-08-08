import { ADD_TWEET } from '../actions/actions'


export default function tweetsReducer(state = [], action) {
    switch (action.type) {
        case ADD_TWEET:
            const { username, picture, tweetData } = action.tweet;
            console.log("ADD_TWEET");
            console.log({ state });
            return [...state, { username, picture, tweetData }];

        default:
            return state;
    }
}