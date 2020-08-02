import React from 'react';
import { Link } from 'react-router-dom';
import './Dictionary.css';
import DictionaryWord from './DictionaryWord.js';
import styled from 'styled-components';

const Anchor = styled.div`
    height: 3vw;
    border-bottom: 0.01vw solid #dbdbdb;
    background-color: white;
    position: sticky;
    top: 4.5vw;
`;

const AnchorButton = styled.div`
    background-color: red;
    height: 10vw;
`;

const Container = styled.div`
    width: 55vw;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
`;
class Dictionary extends React.Component {
    state = {
        words: '',
    };

    //동기식 방식으로 변경 async, await 사용. api 가져와서 json으로 파싱하기.
    callApi = async () => {
        const response = await fetch('api/words'); //단어 가져오기.
        const body = await response.json();
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
                    <a href="#a">ㄱ</a>
                    <a href="#b">ㄴ</a>
                    <a href="#c">ㄷ</a>
                    <a href="#d">ㄹ</a>
                    <a href="#e">ㅁ</a>
                    <a href="#f">ㅂ</a>
                    <a href="#g">ㅅ</a>
                    <a href="#h">ㅇ</a>
                    <a href="#i">ㅈ</a>
                    <a href="#j">ㅊ</a>
                    <a href="#k">ㅋ</a>
                    <a href="#l">ㅌ</a>
                    <a href="#m">ㅍ</a>
                    <a href="#n">ㅎ</a>
                </Anchor>
                <main>
                    <Container>
                        <AnchorButton id={'a'}>ㄱ</AnchorButton>
                        <AnchorButton id={'b'}>ㄴ</AnchorButton>
                        <AnchorButton id={'c'}>ㄷ</AnchorButton>
                        <AnchorButton id={'d'}>ㄹ</AnchorButton>
                        <AnchorButton id={'e'}>ㅁ</AnchorButton>
                        <AnchorButton id={'f'}>ㅂ</AnchorButton>
                        <AnchorButton id={'g'}>ㅅ</AnchorButton>
                        {this.state.words
                            ? this.state.words.map((w) => {
                                  return <DictionaryWord key={w.id} word_name={w.name} word_meaning={w.meaning} />;
                              })
                            : ''}
                    </Container>
                </main>
            </>
        );
    }
}

export default Dictionary;
