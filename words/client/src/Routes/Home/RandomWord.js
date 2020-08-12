import React, {Component}  from "react";
import styled from 'styled-components';


const Word = styled.li`
    padding-bottom: 1vw;
    background-color: white;
    list-style:none;
    font-size: 0.9vw;
    text-align:center;
`;


class RandomWord extends React.Component{

    render(){
        return (
            <>
                <Word>
                    <h2>{this.props.word_name}</h2>
                </Word>
            </>
        );
    }
}


export default RandomWord;