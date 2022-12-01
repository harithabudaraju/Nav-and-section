
import React from 'react';

function Header() {
    return (
        <div>
            <ul className="nav justify-content-end bg-dark">
                <li className="nav-item " >
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">About</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Contact</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled">Services</a>
                </li>
            </ul>
        </div>
    );

}

export default Header;
