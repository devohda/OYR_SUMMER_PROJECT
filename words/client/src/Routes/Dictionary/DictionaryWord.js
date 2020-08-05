import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

const Word = styled.div`
    font-size: 1.2vw;
    background-color: white;
    border-radius: 8px;
    display: inline-block;
    margin: 1vw 0.3vw;

    text-align: center;
    height: 3vw;
    line-height: 3vw;
`;

function DictionaryWord({ word_name }) {
    // const [d, setd] = useState(document.getElementsByClassName('word'));
    const wordRef = useRef();

    useEffect(() => {
        const wordElem = wordRef.current;

        const len = wordElem.innerText.length;
        if (len >= 8) {
            wordElem.style.width = '30.5vw';
        } else {
            wordElem.style.width = '15vw';
        }
    }, [wordRef]);

    return (
        <Word ref={wordRef} className="word">
            {word_name}
        </Word>
    );
}

export default DictionaryWord;
