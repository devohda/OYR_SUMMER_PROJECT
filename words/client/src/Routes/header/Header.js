import React from 'react';
import logo from './header_logo.png';
import searchImg from './search.png';
import styled from 'styled-components';

const Header = styled.header`
    position: sticky;
    top: 0;
    left: 0;

    background-color: #ffffff;

    height: 5vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 4vw;

    box-shadow: 0.05vw 0.05vw 0.7vw 0.05vw #ccc;
`;

const LogoDiv = styled.div`
    height: 2.7vw;
`;

const LogoImg = styled.img`
    height: 2.7vw;
`;

const SearchBox = styled.input`
    text-align: center;
    width: 679px;
    height: 46.5px;
    border: 0px;
    border-bottom: 5px solid #f4b33d;
    box-sizing: border-box;

    &:focus {
        outline: none;
    }
`;

const SearchImg = styled.img`
    height: 1.5vw;
`;
const Navigation = styled.ul`
    width: 356px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const NaviList = styled.li`
    width: 34px;
    height: 20px;
`;

const Menu = styled.a`
    color: #f4b33d;
    font-size: 0.9vw;
    font-weight: 600;
`;

export default () => {
    function clickSearch() {
        let search = document.getElementById('search');
        console.log('hello');
    }

    return (
        <Header>
            <LogoDiv>
                <a href="/">
                    <LogoImg src={logo} alt={'logo'} />
                </a>
            </LogoDiv>
            <div>
                <SearchBox type="text" />
                <SearchImg id="search" src={searchImg} alt={'search'} onClick={clickSearch}></SearchImg>
            </div>
            <Navigation>
                <NaviList>
                    <Menu href="/">main</Menu>
                </NaviList>
                <NaviList>
                    <Menu href="/dictionary">words</Menu>
                </NaviList>
                <NaviList>
                    <Menu href="/qna">QnA</Menu>
                </NaviList>
                <NaviList>
                    <Menu href="/beauty">quotes</Menu>
                </NaviList>
                <NaviList>
                    <Menu href="/profile">profile</Menu>
                </NaviList>
            </Navigation>
        </Header>
    );
};
