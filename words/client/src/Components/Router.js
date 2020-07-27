import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from '../Routes/Home/Home';
import Dictionary from '../Routes/Dictionary/Dictionary';
import QnA from '../Routes/QnA/QnA';
import Beauty from '../Routes/Beauty/Beauty';
import Profile from '../Routes/Profile/Profile';

export default () => (
    <Router>
        <>
            <Route path="/" exact component={Home} />
            <Route path="/dictionary" component={Dictionary} />
            <Route path="/qna" component={QnA} />
            <Route path="/beauty" component={Beauty} />
            <Route path="/profile" component={Profile} />
        </>
    </Router>
);
