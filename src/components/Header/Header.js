import React from 'react';
import './Header.css';

// Header Component 
const Header = () => {
    return (
        <div>
            <header className="header">
                <h1>Fundraising By Scouts For Unprevileged Children</h1>
                <p>If you make the world better for KIDS, you make it better for EVERYONE. -<i>Kid President</i></p>
                <h3>Target Fund: <span style={{ color: 'orange', fontSize: '24px' }}>$1000000</span></h3>
            </header>
        </div>
    );
};

export default Header;