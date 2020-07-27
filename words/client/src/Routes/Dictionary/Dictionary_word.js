import React, {Component}  from "react";
import "./Dictionary_word.css"

class Dictionary_word extends React.Component{

    render(){
        return (
            <div id ='word_container'>
                <h2>{this.props.word_name}</h2>
                <p>{this.props.word_meaning}</p>
            </div>
        );
    }
}


export default Dictionary_word;