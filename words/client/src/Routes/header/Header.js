import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import logo from './header_logo.png';
import searchImg from './search.png';
import styled from 'styled-components';

const Header = styled.header`
    position: sticky;
    top: 0;
    left: 0;

    background-color: #ffffff;
    border-bottom: ${(props) => (props.current ? 'none' : '0.01vw solid #dbdbdb')};

    height: 4.5vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 4vw;
`;

const LogoDiv = styled.div`
    height: 2.2vw;
`;

const LogoImg = styled.img`
    height: 2.2vw;
    margin-left: 3vw;
    display: ${(props) => (props.current ? 'none' : 'block')};
`;

const SearchArea = styled.div`
    position: relative;
    display: ${(props) => (props.current ? 'none' : 'block')};
`;

const SearchBox = styled.input`
    height: 2.2vw;
    width: 27vw;
    border-radius: 1vw;
    border: #dbdbdb 0.01vw solid;
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

const NaviList = styled.li`
    padding-bottom: 0.1vw;
    border-bottom: 0.01vw solid ${(props) => (props.current ? '#f4b33d' : 'transparent')};
`;

const Menu = styled(Link)`
    color: #f4b33d;
    font-size: 0.85vw;
    font-weight: 500;
`;

export default withRouter(({ location: { pathname } }) => {
    return (
        <Header current={pathname === '/'}>
            <LogoDiv>
                <Link to="/">
                    <LogoImg current={pathname === '/'} src={logo} alt={'logo'} />
                </Link>
            </LogoDiv>
            <SearchArea current={pathname === '/'}>
                <SearchBox type="text" placeholder="단어 검색" />
                <SearchImg id="search" src={searchImg} alt={'search'}></SearchImg>
                {/*나중에 이미지 클릭하면 url 변하게하던지 검색 되게 만들어야 함.*/}
            </SearchArea>
            <Navigation>
                <NaviList current={pathname === '/dictionary'}>
                    <Menu to="/dictionary">words</Menu>
                </NaviList>
                <NaviList current={pathname === '/qna'}>
                    <Menu to="/qna">QnA</Menu>
                </NaviList>
                <NaviList current={pathname === '/beauty'}>
                    <Menu to="/beauty">quotes</Menu>
                </NaviList>
                <NaviList current={pathname === '/profile'}>
                    <Menu to="/profile">profile</Menu>
                </NaviList>
            </Navigation>
        </Header>
    );
});
