import React, { Component } from 'react';
import './DictionaryWord.css';

class DictionaryWord extends Component {
    render() {
        return (
            <div id="word_container">
                <h2>{this.props.word_name}</h2>
                <p>{this.props.word_meaning}</p>
            </div>
        );
    }
}

export default DictionaryWord;
