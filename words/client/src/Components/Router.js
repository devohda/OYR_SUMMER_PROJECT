import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Home from '../Routes/Home/Home';
import Dictionary from '../Routes/Dictionary';
import DictionaryDetail from '../Routes/Dictionary/DictionaryDetail';
import QnA from '../Routes/QnA/QnA';
import Beauty from '../Routes/Beauty/Beauty';
import Profile from '../Routes/Profile/Profile';
import Header from '../Routes/Header/';
/**  로그인 및 회원가입 페이지 추가  */
import Login from '../Routes/Login/Login';
import Register from '../Routes/Register/Register';

function Routing() {
    return (
        <Router>
            <Header />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/dictionary" component={Dictionary} />
                <Route path="/dictionarydetail" component={DictionaryDetail} />
                <Route path="/qna" component={QnA} />
                <Route path="/beauty" component={Beauty} />
                <Route path="/profile" component={Profile} />
                {/**  로그인 및 회원가입 페이지 추가  */}
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Redirect from="*" to="/" /> {/*지정한 경로 외의 주소가 돌아왔을 떄 되돌아가기.*/}
            </Switch>
        </Router>
    );
}
export default Routing;
