import React from 'react';
import { useHistory } from 'react-router-dom';

function NavbarItem(props) {
    const history = useHistory();
    const url = props.title.toLowerCase();
    return <div className="navbar-list-item" onClick={e => history.push(`/${url}`)}>
        <div className="navbar-list-item-logo">
            <img src={props.svg} alt="logo" />
        </div>
        <div className="navbar-list-item-text title">
            <span>{props.title}</span>
        </div>
    </div>
}


export default NavbarItem;