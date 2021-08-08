import React from 'react';
import TweetBtn from '../common/TweetBtn';
import { connect } from 'react-redux';
import { addTweet } from '../actions/actions'

function PostTweet(props) {
    let tweetData = '';

    const createNewTweet = () => {
        const newTweet = { ...props.user, tweetData: tweetData }
        props.postTweet(newTweet);
    }

    function handleTweetDataChange(e) {
        tweetData = e.target.value;
    }

    return <div className="news-feed-header">
        <div className="news-feed-header-title title">Home</div>
        <div className="tweet-item bordered">
            <div className="tweet-item-pic">
                <img src={props.user.picture} alt="profile" />
            </div>
            <div className="tweet-item-text-input">
                <input id="tweet-input" className="tweet-item-edit-text" placeholder="What's happening?" onChange={(e) => handleTweetDataChange(e)}></input>
            </div>
        </div>
        <TweetBtn size="small-btn" content="Tweet" onClick={createNewTweet} />
    </div>
}

const mapDispatchToProps = (dispatch) => {
    return {
        postTweet: (tweet) => dispatch(addTweet(tweet))
    }
}

export default connect(null, mapDispatchToProps)(PostTweet);

