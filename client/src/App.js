import './App.scss';
import { Navigate, Routes, Route, BrowserRouter } from 'react-router-dom';
import UserList from './pages/UserList';
import Login from './pages/Login';
import Cookies from 'js-cookie';

// Protected route
const ProtectedRoute = () => {
  return Cookies.get('accessToken') ? (
    <UserList />
  ) : (
    <Navigate to='/login' exact />
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to='users' exact />} />
        <Route path='/login' element={<Login />} />

        <Route element={<ProtectedRoute />}>
          <Route path='/users' element={<UserList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
