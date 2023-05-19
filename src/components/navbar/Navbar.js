import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/approach">Approach</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/chamaDetails">Chama Details</Link>
                </li>
                <li>
                    <Link to="/contributionsPage">Contributions Page</Link>
                </li>
                <li>
                    <Link to="/investmentsPage">Investments Page</Link>
                </li>
                <li>
                    <Link to="/meetingsPage">Meetings Page</Link>
                </li>
                <li>
                    <Link to="/membershipPage">Membership Page</Link>
                </li>
                <li>
                    <Link to="/reportsAndStatements">Reports And Statements</Link>
                </li>
                <li>
                    <Link to="/notificationsPage">Notifications Page</Link>
                </li>
                <li>
                    <Link to="/settingsPage">Settings Page</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
