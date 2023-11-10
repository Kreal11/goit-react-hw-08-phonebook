import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContactsThunk } from 'redux/operations';
import { Route, Routes } from 'react-router-dom';
import { Home } from 'pages/Home';
import { AddContactForm } from 'pages/AddContact';
import { Register } from 'pages/Register';
import { Login } from 'pages/Login';
import { NotFound } from 'pages/NotFound';
import { Layout } from './Layout/Layout';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="addContact" element={<AddContactForm />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
