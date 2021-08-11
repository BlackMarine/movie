import React from 'react';
import {Link} from 'react-router-dom';// 페이지 새로고침 안하고 바꾸는 기능
import './Navigation.css'

function Navigation() {
    return (
        <div className="nav">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
        </div>
    );
}

export default Navigation;