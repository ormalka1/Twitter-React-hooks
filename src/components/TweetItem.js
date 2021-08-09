import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faEmptyHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faSolidHeart } from "@fortawesome/free-solid-svg-icons";
import { connect } from 'react-redux';
import { likeTweet } from '../actions/tweetsActions'


function TweetItem(props) {
    const [isLiked, setIsLiked] = useState(props.isLiked);

    const handleLike = (id) => {
        setIsLiked(!isLiked);
        if (!isLiked) props.onLike({ id: id, isLiked: !isLiked });
    }

    return <div className="tweet-item bordered">
        <div className="tweet-item-pic">
            <img src={props.pic} alt="profile" />
        </div>
        <div className="tweet-item-text">
            <div className="tweet-item-text-name">{props.username}</div>
            <div className="tweet-item-text-content">{props.content}</div>
            <div className="like-btn" onClick={() => handleLike(props.id)}>
                {!isLiked ? <FontAwesomeIcon icon={faEmptyHeart} size="1x" color="rgb(83, 100, 113)" /> :
                    <FontAwesomeIcon icon={faSolidHeart} size="1x" color="rgb(224, 36, 94)" />}
            </div>
        </div>
    </div>
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLike: (tweet) => dispatch(likeTweet(tweet))
    }
}


export default connect(null, mapDispatchToProps)(TweetItem);
