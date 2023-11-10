import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { loginThunk } from 'redux/auth/operations';
import { selectIsLoggedIn, selectUser } from 'redux/auth/selectors';

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
    toast.success(`Welcome, ${name}`);
    return <Navigate to="/" />;
  }
  return (
    <form action="" onSubmit={handleSubmit(submit)}>
      <input
        type="text"
        {...register('email', { required: true, minLength: 8 })}
        placeholder="Enter email"
      />
      <input
        type="password"
        {...register('password', { required: true, minLength: 7 })}
        placeholder="Enter password"
      />
      <button>Login</button>
      <span>
        Don't have an account?{' '}
        <NavLink to="/register">Let's create it!</NavLink>
      </span>
    </form>
  );
};
