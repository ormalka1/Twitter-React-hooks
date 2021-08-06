import React, { useState, useEffect } from 'react';
import TweetItem from './TweetItem';


function TweetList(props) {
    const [tweetList, setTweetList] = useState(props.list);
    useEffect(() => {
        console.log("useEffect");
        setTweetList(props.list);
    }, [props.list]);

    return <div className="tweet-list">
        {tweetList.map((item, index) => { return <TweetItem key={index} pic={item.picture} username={item.username} content={item.tweetData} /> })}
    </div>
}


export default TweetList;