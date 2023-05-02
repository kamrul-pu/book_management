import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav className='navbar navbar-default'>
                <ul>
                    <li><Link to="/">Book List</Link></li>
                    <li><Link to="/add-book">Add Book</Link></li>
                    <li><Link to="/report-page">Report Page</Link></li>
                </ul>
            </nav>

        </div>
    )
}

export default Navbar