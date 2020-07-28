import React, { Component } from 'react';
import Router from './Router';
import Header from '../Routes/header/Header';
import GlobalStyles from './GlobalStyles';

class App extends Component {
    render() {
        return (
            <>
                <Header />
                <Router />
                <GlobalStyles />
            </>
        );
    }
}

export default App;
