import React, {Component}  from "react";
import styled from 'styled-components';


const Word = styled.li`
    padding-bottom: 0.7vw;
    background-color: white;
    list-style:none;
`;


class RandomWord extends React.Component{

    render(){
        return (
            <>
                <Word>
                    {this.props.word_name}
                </Word>
            </>
        );
    }
}


export default RandomWord;