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

export const Login = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const { name } = useSelector(selectUser);
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();

  const submit = data => {
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
          {...register('email', { required: true, minLength: 8 })}
          placeholder="Enter email"
        />
      </EmailPasswordInputWrapper>
      <EmailPasswordInputWrapper>
        <EmailPasswordInput
          type="password"
          {...register('password', { required: true, minLength: 7 })}
          placeholder="Enter password"
        />
      </EmailPasswordInputWrapper>
      <LoginButton>Login</LoginButton>
      <span>
        Don't have an account?{' '}
        <NavLink to="/register">Let's create it!</NavLink>
      </span>
    </LoginForm>
  );
};
