import React from 'react';
import './navigation.css';

function Navigation() {
    return <nav className="navbar navbar-expand-lg navbar-dark">
      <ul className="navbar-nav mx-auto">
        <li className="nav-item text-center">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item text-center">
          <a className="nav-link" href="javascript:alert('coming soon...');">About Us</a>
        </li>
        <li className="nav-item text-center">
          <a className="nav-link" href="javascript:alert('coming soon...');">Contact Us</a>
        </li>
      </ul>
    </nav>
}

export default Navigation;