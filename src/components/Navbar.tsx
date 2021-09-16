import React from "react";
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <div className="uk-container">
            <nav className="uk-navbar">
                <div className="uk-navbar-letf">
                    <a href="#" className="uk-navbar-item uk-logo">Create tasks</a>
                </div>

                <div className="uk-navbar-right">
                    <ul className="uk-navbar-nav">
                        <li>
                            <Link to="/create">
                                <a href="#">
                                    <span uk-icon="icon: plus; ratio> 1.2"></span>
                                </a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
  );
}

export default Navbar;
