import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { loginThunk } from 'redux/auth/operations';
import { selectIsLoggedIn, selectUser } from 'redux/auth/selectors';
import {
  EmailPasswordInput,
  EmailPasswordInputWrapper,
  LoginButton,
  LoginForm,
} from './StyledLogin';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

export const Login = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const { name } = useSelector(selectUser);
  const dispatch = useDispatch();

  const schemaRegister = yup.object().shape({
    email: yup
      .string()
      .email('Email is not valid')
      .min(5, 'Min length must be at least 5 symbols')
      .required(),
    password: yup
      .string()
      .min(6, 'Min length must be at least 6 symbols')
      .max(18, 'Max length must be 18 symbols')
      .required(),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaRegister),
  });

  const submit = ({ confirmPassword, ...data }) => {
    dispatch(loginThunk(data));
    reset();
  };

  if (isLoggedIn) {
    toast.success(`Greetings, ${name}!`);
    return <Navigate to="/home" />;
  }
  return (
    <LoginForm action="" onSubmit={handleSubmit(submit)}>
      <EmailPasswordInputWrapper>
        <EmailPasswordInput
          type="text"
          {...register('email')}
          placeholder="Enter email"
        />
      </EmailPasswordInputWrapper>
      {errors?.email && <div>{errors.email.message}</div>}
      <EmailPasswordInputWrapper>
        <EmailPasswordInput
          type="password"
          {...register('password')}
          placeholder="Enter password"
        />
      </EmailPasswordInputWrapper>
      {errors?.password && <div>{errors.password.message}</div>}
      <LoginButton>Login</LoginButton>
      <span>
        Don't have an account?{' '}
        <NavLink to="/register">Let's create it!</NavLink>
      </span>
    </LoginForm>
  );
};
