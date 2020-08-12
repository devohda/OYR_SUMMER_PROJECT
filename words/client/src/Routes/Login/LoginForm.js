import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initializeForm } from '../../modules/auth';
import AuthForm from '../Register/AuthForm';

const LoginForm = () => {
    const dispatch = useDispatch();
    const { form } = useSelector(({ auth }) => ({
        form: auth.login,
    }));
    const onChange = (e) => {
        const { value, name } = e.target;
        dispatch(
            changeField({
                form: 'login',
                key: name,
                value,
            }),
        );
    };

    const onSubit = (e) => {
        e.preventDefault();
    };

    useEffect(() => {
        dispatch(initializeForm('login'));
    }, [dispatch]);

    return <AuthForm type="login" form={form} onChange={onChange} onSubit={onSubit} />;
};

export default LoginForm;
