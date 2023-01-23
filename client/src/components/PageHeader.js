import React from 'react';
import { Link } from 'react-router-dom';

const PageHeader = (props) => {
  return (
    <nav class='navbar navbar-dark bg-primary'>
      <div class='container-fluid'>
        <Link class='navbar-brand' to='/users'>
          UserList
        </Link>

        <div class='d-flex'>
          <button class='btn btn-danger'>Logout</button>
        </div>
      </div>
    </nav>
  );
};

export default PageHeader;
