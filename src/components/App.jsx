import { Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import AppBar from './AppBar';
import HomeView from 'views/HomeView';
import RegisterView from 'views/RegisterView';
import LoginView from 'views/LoginView';
import ContactsView from 'views/ContactsView';
import { useEffect } from 'react';
import { authOperations } from 'redux/auth';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);
  return (
    <div>
      <AppBar />
      <Routes>
        <Route exact path="/" element={<HomeView />} />
        <Route
          path="/register"
          element={
            <PublicRoute>
              <RegisterView />
            </PublicRoute>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute>
              <LoginView />
            </PublicRoute>
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute>
              <ContactsView />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}
