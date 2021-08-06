import React from 'react';
import { useHistory } from 'react-router-dom';

function NavbarItem(props) {
    const history = useHistory();
    return <div className="navbar-list-item" onClick={e => history.push(`/${props.title}`)}>
        <div className="navbar-list-item-logo">
            <img src={props.svg} alt="logo" />
        </div>
        <div className="navbar-list-item-text title">
            <span>{props.title}</span>
        </div>
    </div>
}


export default NavbarItem;