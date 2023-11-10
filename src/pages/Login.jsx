import React from 'react';
import { useForm } from 'react-hook-form';

export const Login = () => {
  const { register, handleSubmit, reset } = useForm;

  return (
    <form action="">
      <input type="text" />
      <input type="text" />
    </form>
  );
};
