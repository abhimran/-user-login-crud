import './App.scss';
import { Navigate, Routes, Route } from 'react-router-dom';
import UserList from './pages/UserList';
import Login from './pages/Login';
import Cookies from 'js-cookie';

const ProtectedRoute = ({ isAllowed, redirectPath = '/', children }) => {
  if (!isAllowed) {
    return <Navigate to={redirectPath} replace />;
  }

  return children ? children : <Login />;
};

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Login />} />

      <Route
        path='users'
        element={
          <ProtectedRoute
            redirectPath='/'
            isAllowed={!!Cookies.get('accessToken')}
          >
            <UserList />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default App;
