import React from 'react';
import DictionaryWord from './DictionaryWord.js';
import styled from 'styled-components';
import Hangul from 'hangul-js';

const WordContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export default ({ words, letter }) => {
    function splitString(string, l) {
        const letter = Hangul.disassemble(string);
        console.log(letter);
        if (letter[0] == l) {
            return true;
        } else return false;
    }

    return (
        <div>
            <div>{letter}</div>
            <WordContainer>
                {words
                    .filter((w) => {
                        return splitString(w.name, letter);
                    })
                    .map((w) => {
                        return <DictionaryWord word_name={w.name} />;
                    })}
            </WordContainer>
        </div>
    );
};

/*export default () => (
    <div>
        <div>ㄱ</div>
        <WordContainer>
            {this.state.words
                ? this.state.words
                      .filter((w) => {
                          return this.splitString(w.name);
                      })
                      .map((w) => {
                          return <DictionaryWord word_name={w.name} />;
                      })
                : ''}
        </WordContainer>
    </div>
);
*/
