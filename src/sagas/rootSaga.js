import { takeEvery, put } from 'redux-saga/effects';
import { LIKE_TWEET_REQUESTED, LIKE_TWEET_SUCCESS, LIKE_TWEET_FAILED } from '../actions/tweetsActions';
import { ADD_NOTIFICATION } from '../actions/notificationsActions';

function* watchLikeTweet() {
    yield takeEvery(LIKE_TWEET_REQUESTED, likeTweet);
}

function* likeTweet(action) {
    try {
        yield put({ type: LIKE_TWEET_SUCCESS, tweet: action.tweet });
        yield put({ type: ADD_NOTIFICATION, tweet: action.tweet });
    } catch (err) {
        console.log(`Like tweet fail ${err}`);
        yield put({ type: LIKE_TWEET_FAILED });
    }
}

export default function* rootSaga() {
    yield watchLikeTweet();
}