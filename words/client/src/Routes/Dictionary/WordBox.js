import React from 'react';
import DictionaryWord from './DictionaryWord.js';
import styled from 'styled-components';
import Hangul from 'hangul-js';

const Wordbox = styled.div`
    margin-top: 10vw;
`;

const WordContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const Title = styled.div`
    font-size: 1.8vw;
    padding-left: 1.4vw;
`;
const Id = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n'];

export default ({ words, letter, index }) => {
    function splitString(string, l) {
        const letter = Hangul.disassemble(string);
        if (letter[0] === l) {
            return true;
        } else return false;
    }

    return (
        <>
            <div id={Id[index]}></div>
            <Wordbox>
                <Title>{letter}</Title>
                <WordContainer>
                    {words
                        .filter((w) => {
                            return splitString(w.name, letter);
                        })
                        .map((w) => {
                            return <DictionaryWord word_name={w.name} />;
                        })}
                </WordContainer>
            </Wordbox>
        </>
    );
};
