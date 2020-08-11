import React from 'react';
import styled from 'styled-components';
import searchImg from './search.png';

const SearchArea = styled.div`
    position: relative;
    width: 40vw;
    margin: 0 auto;
`;
const SearchBox = styled.input`
    height: 2.3vw;
    width: 40vw;
    border-radius: 3vw;
    border: #dbdbdb 1px solid;

    font-size: 0.9vw;
    text-align: center;
    &:focus {
        outline: none;
    }
`;

const SearchBtn = styled.button`
    width: 1.6vw;
    height: 1.6vw;
    position: absolute;
    right: 2vw;
    top: 0.4vw;
    margin: 0 auto;
    padding: 0;
    border: none;
    background: none;
    &:hover{
        cursor:pointer
    }
    &:focus{
        outline:none;
    }
`;
const SearchImg = styled.img`
    width: 1.6vw;
`;


function SearchWord({ wordname, onChange, onCreate }) {
  return (
    <>
        <SearchArea>
            <SearchBox
                    name="wordname"
                    placeholder="검색할 단어"
                    onChange={onChange}
                    value={wordname}/>
            <SearchBtn onClick={onCreate}>
                <SearchImg src={searchImg} alt={'search'}/>
            </SearchBtn>
        </SearchArea>
    </>);
}

export default SearchWord;