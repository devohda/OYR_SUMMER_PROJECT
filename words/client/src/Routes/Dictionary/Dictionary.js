import React from 'react';
import { Link } from 'react-router-dom';
import DictionaryWord from './DictionaryWord.js';
import styled from 'styled-components';

/*****Anchor 부분*****/
const Anchor = styled.div`
    height: 3vw;
    padding: 0 25vw;
    border-bottom: 0.01vw solid #dbdbdb;
    background-color: white;

    position: sticky;
    top: 4.5vw;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`;
const AnchorButton = styled.a`
    background-color: #f2f2f2;
    border-radius: 50%;
    font-size: 1.2vw;
    padding: 0.3vw;
`;

/*****내용 들어가는 부분*****/
const Container = styled.div`
    width: 55vw;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
`;

/*****단어 링크*****/
const WordDiv = styled.div`
    background-color: red;
    height: 10vw;
`;
const WordContainer = styled.div``;

class Dictionary extends React.Component {
    state = {
        words: '',
    };

    //동기식 방식으로 변경 async, await 사용. api 가져와서 json으로 파싱하기.
    callApi = async () => {
        const response = await fetch('api/words'); //단어 가져오기.
        const body = await response.json(); //json 형식으로 파싱.
        return body;
    };

    componentDidMount() {
        this.callApi()
            .then((res) => this.setState({ words: res })) //promise 사용.
            .catch((err) => console.log(err)); //에러 처리
    }

    render() {
        return (
            <>
                <Anchor>
                    <AnchorButton href="#a">ㄱ</AnchorButton>
                    <AnchorButton href="#b">ㄴ</AnchorButton>
                    <AnchorButton href="#c">ㄷ</AnchorButton>
                    <AnchorButton href="#d">ㄹ</AnchorButton>
                    <AnchorButton href="#e">ㅁ</AnchorButton>
                    <AnchorButton href="#f">ㅂ</AnchorButton>
                    <AnchorButton href="#g">ㅅ</AnchorButton>
                    <AnchorButton href="#h">ㅇ</AnchorButton>
                    <AnchorButton href="#i">ㅈ</AnchorButton>
                    <AnchorButton href="#j">ㅊ</AnchorButton>
                    <AnchorButton href="#k">ㅋ</AnchorButton>
                    <AnchorButton href="#l">ㅌ</AnchorButton>
                    <AnchorButton href="#m">ㅍ</AnchorButton>
                    <AnchorButton href="#n">ㅎ</AnchorButton>
                </Anchor>
                <main>
                    <Container>
                        <div>
                            <div>ㄱ</div>
                            <WordContainer>
                                {this.state.words
                                    ? this.state.words.map((w) => {
                                          return <DictionaryWord word_name={w.name} />;
                                      })
                                    : ''}
                            </WordContainer>
                        </div>
                    </Container>
                </main>
            </>
        );
    }
}

export default Dictionary;
