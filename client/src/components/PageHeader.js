import Cookies from 'js-cookie';
import React from 'react';
import { Link } from 'react-router-dom';

const PageHeader = () => {
  const logOut = () => {
    Cookies.remove('accessToken');
    window.location.reload(false);
  };
  return (
    <nav class='navbar navbar-dark bg-primary'>
      <div class='container-fluid'>
        <Link class='navbar-brand' to='/users'>
          UserList
        </Link>

        <div class='d-flex'>
          <button class='btn btn-danger' onClick={logOut}>
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default PageHeader;
