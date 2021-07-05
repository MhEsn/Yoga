import React, { useEffect } from 'react';

function Nav() {

    function offsetAnchor() {
        if(window.location.hash === '#home') {
            window.scrollTo(window.scrollX, window.scrollY - 300);
        }
    }

    useEffect(() => {
        window.addEventListener("hashchange", offsetAnchor);
    });

    return (
        <div className="nav-bar">
            <div className="menu-container">
                <ul>
                    <li>
                        <a href="#aboutus">تماس با من</a>
                    </li>
                    <li>
                        <a href="#home">صفحه اصلی</a>
                    </li>
                    <li>
                        <a href="#gallery">گالری</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Nav;