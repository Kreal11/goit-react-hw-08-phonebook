import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { registerThunk } from 'redux/auth/operations';
import { selectIsLoggedIn, selectUser } from 'redux/auth/selectors';

export const Register = () => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const { name } = useSelector(selectUser);

  const submit = data => {
    dispatch(registerThunk(data));
    reset();
  };

  if (isLoggedIn) {
    toast.success(`Welcome ${name}`);
    return <Navigate to="/home" />;
  }

  return (
    <form action="" onSubmit={handleSubmit(submit)}>
      <input
        type="text"
        {...register('name', { required: true, minLength: 2 })}
        placeholder="Enter name"
      />
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
      <button>Register</button>
      <span>
        Already have an account? <NavLink to="/login">Let's log in!</NavLink>
      </span>
    </form>
  );
};
