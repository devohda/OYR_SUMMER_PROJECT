import React from 'react';
import RandomWord from './RandomWord.js';



class Random extends React.Component {
    state = {
        words: '',
    };
    
    componentDidMount() {
        this.callApi()
            .then((res) => this.setState({ words: res })) //promise 사용.
            .catch((err) => console.log(err)); //에러 처리
    }

    //동기식 방식으로 변경 async, await 사용. api 가져와서 json으로 파싱하기.
    callApi = async () => {
        const response = await fetch('api/words'); //단어 가져오기.
        const body = await response.json(); //json 형식으로 파싱.
        return body;
    };


    render() {
        return (
            <>
                <main>
                { this.state.words ?
                this.state.words.map(w => {
                  return(
                    <RandomWord
                      key={w.id}
                      word_name = {w.name}
                    />);
                }) : ""
              }
                </main>
            </>
        );
    }
}

export default Random;
