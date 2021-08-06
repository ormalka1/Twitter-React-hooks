import React from 'react';
import Navbar from '../common/Navbar';
import '../style/Profile.css';


function Profile(props) {
    return <>
        <Navbar />
        <div className="profile-container bordered">
            <div className="profile-cover-img">
                <img className="cover-img" src={props.user.cover} alt="cover" />
            </div>
            <div className="profile-picture">
                <img className="profile-img" src={props.user.picture} alt="profile" />
            </div>
            <div className="profile-header">
                <div className="profile-header-name">{props.user.username}</div>
                <div className="profile-header-bio">{props.user.bio}</div>
            </div>
        </div>
    </>
}


export default Profile;