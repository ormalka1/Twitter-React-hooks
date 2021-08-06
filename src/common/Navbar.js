import React from 'react';
import { useHistory } from 'react-router-dom';
import NavbarItem from './NavbarItem';
import TwweetBtn from './TweetBtn';
import Logo from './Logo';
import svg from '../logo.svg';

function Navbar() {
    const history = useHistory();
    const createNewTweet = () => {
        history.push("/Home");
    }

    return <div className="side-navbar">
        <Logo />
        <NavbarItem title="Home" svg={svg} />
        <NavbarItem title="Explore" svg={svg} />
        <NavbarItem title="Notifications" svg={svg} />
        <NavbarItem title="Messages" svg={svg} />
        <NavbarItem title="Profile" svg={svg} />
        <NavbarItem title="More" svg={svg} />
        <TwweetBtn size="large-btn" content="Tweet" onClick={createNewTweet} />
    </div>
}

export default Navbar;

