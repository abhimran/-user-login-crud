import { Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import UserList from '../pages/UserList';

const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/users' element={<UserList />} />
    </Routes>
  );
};

export default AllRoutes;
