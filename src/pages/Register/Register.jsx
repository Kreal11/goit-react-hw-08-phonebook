import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { registerThunk } from 'redux/auth/operations';
import { selectIsLoggedIn, selectUser } from 'redux/auth/selectors';
import {
  InputWrapper,
  RegisterButton,
  RegisterForm,
  RegisterInput,
} from './StyledRegister';

export const Register = () => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const { name } = useSelector(selectUser);

  const submit = data => {
    // if (!data.name || !data.email || !data.password) {
    //   console.log(data.name);
    //   return toast.warning('Please, fill all input fields!');
    // }
    dispatch(registerThunk(data));
    reset();
  };

  if (isLoggedIn) {
    toast.success(`Welcome ${name}`);
    return <Navigate to="/home" />;
  }

  return (
    <RegisterForm action="" onSubmit={handleSubmit(submit)}>
      <InputWrapper>
        <RegisterInput
          type="text"
          {...register('name', { required: true, minLength: 2 })}
          placeholder="Enter name"
        />
      </InputWrapper>
      <InputWrapper>
        <RegisterInput
          type="text"
          {...register('email', { required: true, minLength: 8 })}
          placeholder="Enter email"
        />
      </InputWrapper>
      <InputWrapper>
        <RegisterInput
          type="password"
          {...register('password', { required: true, minLength: 7 })}
          placeholder="Enter password"
        />
      </InputWrapper>
      <RegisterButton>Register</RegisterButton>
      <span>
        Already have an account? <NavLink to="/login">Let's log in!</NavLink>
      </span>
    </RegisterForm>
  );
};
