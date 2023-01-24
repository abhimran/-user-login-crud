import React, { useEffect, useState } from 'react';
import PageHeader from '../components/PageHeader';
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';
import ModalComponent from '../components/ModalComponent';
import { deleteRequest, getRequest } from '../api/handleReq';

const UserList = () => {
  // states
  const [userdata, setUserdata] = useState([]);
  const [singleUserData, setSingleUserData] = useState({});

  // get users
  const getUsers = async () => {
    try {
      const resp = await getRequest(`/users`);
      if (resp) {
        setUserdata(resp?.data);
      }
    } catch (err) {
      console.error(err);
    }
  };

  // delete users
  const handleDelete = async (id) => {
    try {
      const resp = await deleteRequest(`/users/${id}`);
      if (resp) {
        const updateUserData = userdata.filter((user) => user.id !== id);
        setUserdata(updateUserData);
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <PageHeader />

      <div className='mt-5 row'>
        <div className='container-fluid px-5'>
          <div className='add_btn mt-2 mb-2'>
            <button className='btn btn-primary'>Add new user</button>
          </div>

          <table className='table'>
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
                      <button
                        className='btn btn-success'
                        data-bs-toggle='modal'
                        data-bs-target='#edit-modal'
                        onClick={() => setSingleUserData(element)}
                      >
                        <AiOutlineEdit />
                      </button>
                    </td>
                    <td>
                      <button
                        className='btn btn-primary'
                        onClick={() => handleDelete(element.id)}
                      >
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
      <ModalComponent user={singleUserData} />
    </div>
  );
};

export default UserList;
