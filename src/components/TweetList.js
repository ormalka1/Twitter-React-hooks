import React from 'react';
import TweetItem from './TweetItem';
import { connect } from 'react-redux';


function TweetList(props) {
    const tweetList = props.tweetList ? props.tweetList : [];

    return <div id="tweet-list" className="tweet-list">
        {tweetList.map((item, index) => { return <TweetItem key={index} pic={item.picture} username={item.username} content={item.tweetData} /> })}
    </div>
}

const mapStateToProps = (state) => {
    console.log("mapStateToProps - TweetList");
    console.log(state.tweets);
    return { tweetList: state.tweets };
};


export default connect(mapStateToProps, mapDispatchToProps)(TweetList);