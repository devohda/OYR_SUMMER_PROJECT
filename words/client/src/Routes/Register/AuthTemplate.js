import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '../header/header_logo.png';

const AuthTemplateBlock = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    background: #f2f2f2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const WhiteBox = styled.div`
    .logo-area {
        display: block;
        padding-bottom: 2rem;
        text-align: center;
        font-weight: bold;
        letter-spacing: 2px;
    }
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.025);
    padding: 2rem;
    width: 450px;
    background: white;
    border-radius: 15px;
`;

const LogoImg = styled.img`
    height: 2.5vw;
    margin: 0 auto;
    margin-top: 30px;
    display: ${(props) => (props.current ? 'none' : 'block')};
`;

const AuthTemplate = ({ children }) => {
    return (
        <AuthTemplateBlock>
            <WhiteBox>
                <div className="logo-area">
                    <Link to="/">
                        <LogoImg src={logo} alt={'logo'} />
                    </Link>
                </div>
                {children}
            </WhiteBox>
        </AuthTemplateBlock>
    );
};

export default AuthTemplate;
