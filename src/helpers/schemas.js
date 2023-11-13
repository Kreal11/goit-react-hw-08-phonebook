import * as yup from 'yup';

export const schemaRegister = yup.object().shape({
  name: yup.string().min(2, 'Min length must be at least 5 symbols').required(),
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
