import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Layout from './Layout';
import { selectToken } from 'redux/auth/selectors';
import { refreshUser } from 'redux/auth/operations';

const HomePage = lazy(() => import('../pages/HomePage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const ContactsPage = lazy(() => import('../pages/ContactsPage'));
const NotFound = lazy(() => import('../pages/NotFound'));

const App = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);

  useEffect(() => {
    if (!token) return;
    dispatch(refreshUser());
  }, [token, dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="contacts" element={<ContactsPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
