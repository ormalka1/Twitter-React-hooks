import { ADD_TWEET, LIKE_TWEET_SUCCESS } from '../actions/tweetsActions'


export default function tweetsReducer(state = [], action) {
    switch (action.type) {
        case ADD_TWEET:
            return [...state, action.tweet];
        case LIKE_TWEET_SUCCESS:
            let itemIndex = state.findIndex(item => item.id === action.tweet.id);
            let tweets = [...state];
            tweets[itemIndex].isLiked = true;
            return tweets;
        default:
            return state;
    }
}