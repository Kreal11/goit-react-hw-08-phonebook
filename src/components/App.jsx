import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from 'pages/Home/Home';
import { Register } from 'pages/Register/Register';
import { Login } from 'pages/Login/Login';
import { NotFound } from 'pages/NotFound/NotFound';
import { Layout } from './Layout/Layout';
import { refreshThunk } from 'redux/auth/operations';
import { PrivateRoute } from 'hoc/PrivateRoute';
import { GamePlug } from './GamePlug/GamePlug';
import { selectIsRefresh } from 'redux/auth/selectors';

export const App = () => {
  const dispatch = useDispatch();
  const isRefresh = useSelector(selectIsRefresh);

  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  return isRefresh ? (
    <h2>Loading</h2>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<GamePlug />} />
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
