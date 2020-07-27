import React, {Component}  from "react";
import "./Home_word.css"

class Home_word extends React.Component{

    render(){
        return (
            <div id ='word_container'>
                <h2>{this.props.word_name}</h2>
                <p>{this.props.word_meaning}</p>
            </div>
        );
    }
}


export default Home_word;