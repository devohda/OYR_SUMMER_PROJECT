import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Home from '../Routes/Home/Home';
import Dictionary from '../Routes/Dictionary/Dictionary';
import QnA from '../Routes/QnA/QnA';
import Beauty from '../Routes/Beauty/Beauty';
import Profile from '../Routes/Profile/Profile';

export default () => (
    <Router>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/dictionary" component={Dictionary} />
            <Route path="/qna" component={QnA} />
            <Route path="/beauty" component={Beauty} />
            <Route path="/profile" component={Profile} />
            <Redirect from="*" to="/" /> {/*지정한 경로 외의 주소가 돌아왔을 떄 되돌아가기.*/}
        </Switch>
    </Router>
);
