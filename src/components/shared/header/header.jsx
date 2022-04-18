import React from 'react';
import './header.css';
import Navigation from '../../../components/shared/navigation/navigation';

function Header () {
    return <header>
        <div className="website-title">Random People Coding Challenge</div>
        <Navigation />
    </header>;
}

export default Header;