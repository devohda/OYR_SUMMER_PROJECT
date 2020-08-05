//home 화면.
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from './home_logo.png';
import searchImg from './search.png';


const Main = styled.main`
    height:100%;
    display: flex;
    
    flex-direction : column;
    background-color: #FFFFFF;
`;


const Logo= styled.div`
    padding-top: 5vw;
    padding-bottom: 3vw;
    padding-right: 2vw;
    width: 24vw;
    margin: 0 auto;
`;
const Logo_img= styled.img`
    width: 22vw;
`;


const Search= styled.div`
    position: relative;
    width: 40vw;
    margin: 0 auto;
`;
const SearchBox= styled.input`
    height: 2.3vw;
    width: 40vw;
    border-radius: 3vw;
    border: #dbdbdb 1px solid;
    
    font-size: 0.9vw;
    text-align:center;
    &:focus {
        outline: none;
    }
`;
const SearchImg = styled.img`
    width : 1.6vw;
    position: absolute;
    right: 2vw;
    top: 0.4vw;
    margin: 0 auto;
`;


const ListArea = styled.div`
    display : flex;
    flex-direction: row;
    width: 40vw;
    margin: 0 auto;
    justify-content: space-between;

    padding-top: 10vw;

`;
const ListDiv = styled.div`
    width : 13vw;
    display : flex;
    flex-direction: column;


`;
const ListName = styled.h3`
    color : #f4b33d;
    padding-bottom: 3vw;
    font-size: 1vw;


`;
const List = styled.li`
    padding-bottom: 0.7vw;
    

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
              <ListArea>
                <ListDiv>
                    <ListName>이런 단어는 어떠신가요?</ListName>
                    <List></List>
                    <List></List>
                    <List></List>
                </ListDiv>
                <ListDiv>
                    <ListName>최근 검색한 단어</ListName>
                    <List></List>
                    <List></List>
                    <List></List>
                </ListDiv>
              </ListArea>
            </Main>
        )
      }
}

export default Home;
