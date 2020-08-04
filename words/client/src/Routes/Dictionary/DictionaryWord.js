import React, { Component } from 'react';
import styled from 'styled-components';

const Word = styled.div`
    font-size: 1vw;
    background-color: white;
    border-radius: 5px;
    display: inline-block;
    padding: 1vw 3vw;

    margin: 1vw;
`;

const d = document.getElementsByClassName('word');

function regulateWidth(word) {
    console.log(d);
    /* d.forEach((element) => {
        const len = element.innerText.length;
        if (len < 3) {
            element.style.width = '3vw';
        } else if (len.length < 5) {
            element.style.width = '5vw';
        } else if (len.length < 7) {
            element.style.width = '7vw';
        } else if (len.length < 9) {
            element.style.width = '9vw';
        } else {
            element.style.width = '11vw';
        }
    });*/
}

class DictionaryWord extends Component {
    render() {
        regulateWidth();
        return <Word className="word">{this.props.word_name}</Word>;
    }
}

export default DictionaryWord;
