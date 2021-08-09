import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import NavbarItem from './NavbarItem';
import TwweetBtn from './TweetBtn';
import Logo from './Logo';
import svg from '../style/images/logo.svg'
import { connect } from 'react-redux';

function Navbar(props) {
    const history = useHistory();

    const createNewTweet = () => {
        history.push("/home");
    }

    const notificationsCount = props.notificationsList.length;
    const notificationsTitle = notificationsCount ? `Notifications(${notificationsCount})` : "Notifications";

    return < div className="side-navbar" >
        <Logo />
        <NavbarItem title="Home" svg={svg} />
        <NavbarItem title="Explore" svg={svg} />
        <NavbarItem title={notificationsTitle} svg={svg} />
        <NavbarItem title="Messages" svg={svg} />
        <NavbarItem title="Profile" svg={svg} />
        <NavbarItem title="More" svg={svg} />
        <TwweetBtn size="large-btn" content="Tweet" onClick={createNewTweet} />
    </div >
}

const mapStateToProps = (state) => {
    return { notificationsList: state.notifications };
};

Navbar.propTypes = {
    notificationsList: PropTypes.array.isRequired
};

export default connect(mapStateToProps, null)(Navbar);
