//home 화면.
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from './home_logo.png';
import searchImg from './search.png';


const Main = styled.main`
    position: relative;
    height:100%;
    display: flex;
    
    justify-content: center;
    align-content: center;
    flex-direction : column;
    background-color: #FFFFFF;
`;


const Logo= styled.div`
    height: 5vw;
`;
const Logo_img= styled.img`
    height: 5vw;
`;


const Search= styled.div`
    position: relative;
`;
const SearchBox= styled.input`
    height: 3vw;
    width: 50vw;
    border-radius: 3vw;
    border: #dbdbdb 1px solid;
    padding-left: 2vw;
    font-size: 0.9vw;
    margin-left: 4vw;

    &:focus {
        outline: none;
    }
`;
const SearchImg = styled.img`
    width : 1.6vw;
    position: absolute;
    right: 2vw;
    top: 0.5vw;
`;


class Home extends React.Component {

    render(){
        return (
            <Main>
              <Logo>
                <Link to="/">
                    <Logo_img src={logo} alt={'home_logo'} />
                </Link>
              </Logo>    
              <Search>
                <SearchBox type="text" />
                <SearchImg src={searchImg} alt={'search'}></SearchImg>
              </Search>
              <p>이런 단어는 어떠신가요?</p>
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </Main>
        )
      }
}

export default Home;
