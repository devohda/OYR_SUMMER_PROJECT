import React, { Component } from 'react';
import './header.css';
import logo from './header_logo.png';

class Header extends Component {
    render() {
        return (
            <header id="header">
                <div id="logo">
                    <a href="/">
                        <img src={logo} alt={'logo'} />
                    </a>
                </div>
                <div id="search">
                    <input type="text" />
                </div>

                <div id="navibox">
                    <ul>
                        <li>
                            <a href="/">main</a>
                        </li>
                        <li>
                            <a href="/dictionary">words</a>
                        </li>
                        <li>
                            <a href="/qna">QnA</a>
                        </li>
                        <li>
                            <a href="/beauty">quotes</a>
                        </li>
                        <li>
                            <a href="/profile">profile</a>
                        </li>
                    </ul>
                </div>
            </header>
        );
    }
}

export default Header;
