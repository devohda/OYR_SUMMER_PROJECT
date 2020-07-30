import React from 'react';
import { Link } from 'react-router-dom';
import logo from './header_logo.png';
import searchImg from './search.png';
import styled from 'styled-components';

const Header = styled.header`
    position: sticky;
    top: 0;
    left: 0;

    background-color: #ffffff;

    height: 4.5vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 4vw;

    box-shadow: 0.05vw 0.05vw 0.7vw 0.05vw #ccc;
`;

const LogoDiv = styled.div`
    height: 2.2vw;
`;

const LogoImg = styled.img`
    height: 2.2vw;
    margin-left: 3vw;
`;

const SearchArea = styled.div`
    position: relative;
`;

const SearchBox = styled.input`
    height: 2.2vw;
    width: 27vw;
    border-radius: 1vw;
    border: #dbdbdb 1px solid;
    padding-left: 2vw;
    font-size: 0.9vw;
    margin-left: 4vw;
    &:focus {
        outline: none;
    }
`;

const SearchImg = styled.img`
    height: 1.1vw;
    position: absolute;
    right: 2vw;
    top: 0.5vw;
`;

const Navigation = styled.ul`
    width: 18vw;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const NaviList = styled.li``;

const Menu = styled(Link)`
    color: #f4b33d;
    font-size: 0.85vw;
    font-weight: 500;
`;

export default () => {
    function clickSearch() {
        let search = document.getElementById('search');
        console.log('hello');
    }

    return (
        <Header>
            <LogoDiv>
                <Link to="/">
                    <LogoImg src={logo} alt={'logo'} />
                </Link>
            </LogoDiv>
            <SearchArea>
                <SearchBox type="text" placeholder="단어 검색" />
                <SearchImg id="search" src={searchImg} alt={'search'} onClick={clickSearch}></SearchImg>
                {/*나중에 이미지 클릭하면 url 변하게하던지 검색 되게 만들어야 함.*/}
            </SearchArea>
            <Navigation>
                <NaviList>
                    <Menu to="/dictionary">words</Menu>
                </NaviList>
                <NaviList>
                    <Menu to="/qna">QnA</Menu>
                </NaviList>
                <NaviList>
                    <Menu to="/beauty">quotes</Menu>
                </NaviList>
                <NaviList>
                    <Menu to="/profile">profile</Menu>
                </NaviList>
            </Navigation>
        </Header>
    );
};
