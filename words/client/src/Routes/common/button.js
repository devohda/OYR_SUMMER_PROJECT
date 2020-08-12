import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    border: none;
    border-radius: 30px;
    font-weight: bold;
    padding: 0.25rem 1rem;
    color: white;
    outline: none;
    cursor: pointer;
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    margin-left: 43px;
    margin-right: 43px;
    margin-top: 50px;
    margin-bottom: 50px;
    width: 300px;
    height: 60px;
    font-size: 1.125rem;
    background: #f4b33d;
    &:hover {
        background: ##d28f14;
    }
`;

const Button = (props) => <StyledButton {...props} />;

export default Button;
