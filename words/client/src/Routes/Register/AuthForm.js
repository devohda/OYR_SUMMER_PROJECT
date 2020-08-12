import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from '../common/button';

const AuthFormBlock = styled.div`
    h3 {
        margin: 16px;
        margin-top: 48px;
        color: black;
    }
`;

const StyledInput = styled.input`
    font-size: 1rem;
    border: 1px solid #dbdbdb;
    border-radius: 5px;
    padding: 1rem;
    outline: none;
    width: 100%;
    height: 45px;
    margin: 0 auto;
    %focus {
        color: #f2f2f2;
    }
    & + & {
        margin-top: 1rem;
    }
`;

const Footer = styled.div`
    margin-top: 2rem;
    text-align: right;
    a {
        color: black;
        text-decoration: underline;
        &:hover {
            color: f4b33d;
        }
    }
`;

const textMap = {
    login: '로그인',
    register: '회원가입',
};

const AuthForm = ({ type, form, onChange, onSubmit }) => {
    const text = textMap[type];
    return (
        <AuthFormBlock>
            <form onSubmit={onSubmit}>
                <h3>ID</h3>
                <StyledInput autoComplete="username" name="username" onChange={onChange} value={form.username} />
                <h3>PASSWORD</h3>
                <StyledInput autoComplete="new-password" name="password" type="password" onChange={onChange} value={form.password} />
                {type === 'register' && (
                    <>
                        <h3>PASSWORD CONFIRM</h3>
                        <StyledInput
                            autoComplete="new-password"
                            name="passwordConfirm"
                            type="password"
                            onChange={onChange}
                            value={form.passwordConfirm}
                        />
                    </>
                )}
                <Button>{text}</Button>
            </form>
            <Footer>{type === 'login' ? <Link to="/register">회원가입</Link> : <Link to="/login">로그인</Link>}</Footer>
        </AuthFormBlock>
    );
};

export default AuthForm;
