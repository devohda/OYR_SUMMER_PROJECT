import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initializeForm } from '../../modules/auth';
import AuthForm from '../Register/AuthForm';

const RegisterForm = () => {
    const dispatch = useDispatch();
    const { form } = useSelector(({ auth }) => ({
        form: auth.register,
    }));
    const onChange = (e) => {
        const { value, name } = e.target;
        dispatch(
            changeField({
                form: 'register',
                key: name,
                value,
            }),
        );
    };

    const onSubit = (e) => {
        e.preventDefault();
    };

    useEffect(() => {
        dispatch(initializeForm('dispatch'));
    }, [dispatch]);

    return <AuthForm type="register" form={form} onChange={onChange} onSubit={onSubit} />;
};

export default RegisterForm;
