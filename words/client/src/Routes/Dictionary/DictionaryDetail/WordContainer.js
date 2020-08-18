import React from 'react';
import styled from 'styled-components';

/*****내용 들어가는 부분*****/
const Container = styled.div`
    width: 65vw;
    margin: 0 auto;

    display: flex;
    flex-direction: column;

    background-color: white;
    padding: 0vw 0 3vw;
`;

const Word = styled.div`
    margin: 3vw 0;
    padding: 0 6vw;
    font-size: 2.55vw;
`;

const WordMeaning = styled.div`
    padding: 0 6vw;
    font-size: 1.5vw;
    margin-bottom: 3vw;
`;

const IconContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    padding: 0 3vw;
`;

const Icon = styled.img`
    margin: 0 1.5vw;
`;

const WordContainer = ({ name, meaning }) => {
    return (
        <Container>
            <Word>{name}</Word>
            <WordMeaning>{meaning}</WordMeaning>
            <IconContainer>
                <Icon src="/positive-vote.png" />
                <Icon src="/negative-vote.png" />
                <Icon src="/bookmark.png" />
            </IconContainer>
        </Container>
    );
};

export default WordContainer;
