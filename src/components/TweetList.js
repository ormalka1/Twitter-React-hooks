import React from 'react';
import PropTypes from 'prop-types';
import TweetItem from './TweetItem';
import { connect } from 'react-redux';


function TweetList(props) {
    return <div id="tweet-list" className="tweet-list">
        {props.tweetList.map((item) => { return <TweetItem key={item.id} pic={item.picture} username={item.username} content={item.tweetData} id={item.id} isLiked={item.isLiked} /> })}
    </div>
}

const mapStateToProps = (state) => {
    return { tweetList: state.tweets };
};

TweetList.TweetList = {
    tweetList: PropTypes.array.isRequired
};


export default connect(mapStateToProps, null)(TweetList);