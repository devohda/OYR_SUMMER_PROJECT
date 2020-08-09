//home 화면.
import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


import logo from './home_logo.png';

import Random from './Random';
import SearchWord from './SearchWord';
import SearchList from './SearchList';

const Main = styled.main`
    height: 100%;
    display: flex;

    flex-direction: column;
    background-color: #ffffff;
`;

const Logo = styled.div`
    padding-top: 5vw;
    padding-bottom: 3vw;
    padding-right: 2vw;
    width: 24vw;
    margin: 0 auto;
`;
const Logo_img = styled.img`
    width: 22vw;
`;


const ListArea = styled.div`
    display: flex;
    flex-direction: row;
    width: 40vw;
    margin: 0 auto;
    justify-content: space-between;

    padding-top: 10vw;
`;
const ListDiv = styled.div`
    width: 13vw;
    display: flex;
    flex-direction: column;
`;
const ListName = styled.h3`
    color: #f4b33d;
    padding-bottom: 3vw;
    font-size: 1vw;
`;


function Home() {

    const [inputs, setInputs] = useState({
        wordname: '',
    });
    const {wordname} = inputs;
    const onChange = e => {
        const { name, value } = e.target;
        setInputs({
          ...inputs,
          [name]: value
        });
    };

    const [words, setWords] = useState([

  ]);
  const nextId = useRef(4);
  const onCreate = () => {
    const word = {
        id: nextId.current,
        wordname
      };
      setWords([...words, word]);

    setInputs({
        wordname: '',
      });
    nextId.current += 1;
  };

        return (
            <Main>
                <Logo>
                    <Link to="/">
                        <Logo_img src={logo} alt={'home_logo'} />
                    </Link>
                </Logo>
      <SearchWord 
      wordname={wordname}
      onChange={onChange}
      onCreate={onCreate}
      />
                <ListArea>
                    <ListDiv>
                        <ListName>이런 단어는 어떠신가요?</ListName>
                        <Random />
                    </ListDiv>
                    <ListDiv>
                        <ListName>최근 검색한 단어</ListName>
                        <SearchList words={words} />
                    </ListDiv>
                </ListArea>
            </Main>
        );
}

export default Home;
