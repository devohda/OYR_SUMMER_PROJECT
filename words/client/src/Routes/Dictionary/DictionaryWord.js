import React, { Component } from 'react';
import styled from 'styled-components';

const Word = styled.div`
    font-size: 1vw;
    background-color: white;
    border-radius: 5px;
    display:inline-block;
    padding: 1vw 3vw;
`;
class DictionaryWord extends Component {
    render() {
        return <Word>{this.props.word_name}</Word>;
    }
}

export default DictionaryWord;
