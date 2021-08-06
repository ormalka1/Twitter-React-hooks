import React from 'react';

function TweetBtn(props) {
    return <button className={"tweet-btn ".concat(props.size)} type="button" onClick={(e) => props.onClick()}>
        <span>{props.content}</span>
    </button>
}

export default TweetBtn;
