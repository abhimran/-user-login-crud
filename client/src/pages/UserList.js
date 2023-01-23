import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';

const UserList = () => {
  // eslint-disable-next-line no-unused-vars
  const [userdata, setUserdata] = useState([
    {
      id: 1,
      name: 'adasdsa',
      username: 'adasda',
      email: 'adasd',
      status: 'adasd',
    },
    {
      id: 2,
      name: 'adasdsa',
      username: 'adasda',
      email: 'adasd',
      status: 'adasd',
    },
  ]);
  return (
    <div>
      <PageHeader />

      <div className='mt-5 row'>
        <div className='container-fluid px-5'>
          <div className='add_btn mt-2 mb-2'>
            <button className='btn btn-primary'>Add new user</button>
          </div>

          <table class='table'>
            <thead>
              <tr className='table-dark'>
                <th scope='col'>Id</th>
                <th scope='col'>Name</th>
                <th scope='col'>Username</th>
                <th scope='col'>Email</th>
                <th scope='col'>Status</th>
                <th scope='col'>Edit</th>
                <th scope='col'>Delete</th>
              </tr>
            </thead>
            <tbody>
              {userdata.map((element, id) => {
                return (
                  <tr key={id}>
                    <th scope='row'>{element.id}</th>
                    <td>{element.name}</td>
                    <td>{element.username}</td>
                    <td>{element.email}</td>
                    <td>{element.status}</td>
                    <td className='d-flex justify-content-between'>
                      <button className='btn btn-success'>
                        <AiOutlineEdit />
                      </button>
                    </td>
                    <td>
                      <button className='btn btn-primary'>
                        <AiOutlineDelete />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserList;
