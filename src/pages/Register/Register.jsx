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
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

export const Register = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const { name } = useSelector(selectUser);

  const schemaRegister = yup.object().shape({
    name: yup
      .string()
      .min(2, 'Min length must be at least 5 symbols')
      .required(),
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
    confirmPassword: yup.string().oneOf([yup.ref('password')]),
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
          {...register('name')}
          placeholder="Enter name"
        />
      </InputWrapper>
      {errors?.name && <div>{errors.name.message}</div>}
      <InputWrapper>
        <RegisterInput
          type="text"
          {...register('email')}
          placeholder="Enter email"
        />
      </InputWrapper>
      {errors?.email && <div>{errors.email.message}</div>}
      <InputWrapper>
        <RegisterInput
          type="password"
          {...register('password')}
          placeholder="Enter password"
        />
      </InputWrapper>
      {errors?.password && <div>{errors.password.message}</div>}
      <InputWrapper>
        <RegisterInput
          type="password"
          {...register('confirmPassword')}
          placeholder="Confirm password"
        />
      </InputWrapper>
      {errors?.confirmPassword && <div>{errors.confirmPassword.message}</div>}
      <RegisterButton>Register</RegisterButton>
      <span>
        Already have an account? <NavLink to="/login">Let's log in!</NavLink>
      </span>
    </RegisterForm>
  );
};
