import React from 'react';
import PostTweet from './PostTweet';
import TweetList from './TweetList';
import Navbar from '../common/Navbar';

function NewsFeed(props) {
    return <>
        <Navbar />
        <div className="news-feed bordered">
            <PostTweet user={props.user} />
            <TweetList />
        </div>
    </>
}


export default NewsFeed;

//TODO- add PropTypes 