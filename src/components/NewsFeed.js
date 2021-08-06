import React, { useState } from 'react';
import PostTweet from './PostTweet';
import TweetList from './TweetList';
import Navbar from '../common/Navbar';

function NewsFeed(props) {
    const [tweetList, setTweetList] = useState([]);

    const addNewTweet = (newTweet) => {
        setTweetList([...tweetList, newTweet]);
        console.log(tweetList);
    }

    return <>
        <Navbar />
        <div className="news-feed bordered">
            <PostTweet user={props.user} addNewTweet={addNewTweet} />
            <TweetList list={tweetList} />
        </div>
    </>
}


export default NewsFeed;

//TODO- add PropTypes + useEffect?