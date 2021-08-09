export const ADD_TWEET = 'ADD_TWEET';
export const LIKE_TWEET_REQUESTED = 'LIKE_TWEET_REQUESTED';
export const LIKE_TWEET_SUCCESS = 'LIKE_TWEET_SUCCESS';
export const LIKE_TWEET_FAILED = 'LIKE_TWEET_FAILED';


export function addTweet(tweet) {
    return {
        type: ADD_TWEET,
        tweet
    }
}

export function likeTweet(tweet) {
    return {
        type: LIKE_TWEET_REQUESTED,
        tweet
    }
}


