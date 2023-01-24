import React, { useEffect, useState } from 'react';
import { putRequest } from '../api/handleReq';

const ModalComponent = ({ user }) => {
  // states
  const [state, setState] = useState({
    name: '',
    username: '',
    email: '',
  });
  const [loading, setLoading] = useState(false);

  //   btn disabled
  const disabledBtn =
    state && state?.name && state?.username && state?.email && !loading;

  // submit users
  const handleSubmit = async () => {
    setLoading(true);
    try {
      const resp = await putRequest(`/users/${state.id}`, state);

      if (resp) {
        document.getElementById('edit-modal').click();
        setLoading(false);
      }
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    setState(user);
  }, [user]);

  return (
    <div
      className='modal fade'
      id='edit-modal'
      tabIndex='-1'
      aria-labelledby='exampleModalLabel'
      aria-hidden='true'
    >
      <div className='modal-dialog'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h1 className='modal-title fs-5' id='exampleModalLabel'>
              Edit Modal
            </h1>
            <button
              type='button'
              className='btn-close'
              data-bs-dismiss='modal'
              aria-label='Close'
            ></button>
          </div>
          <div className='modal-body'>
            <div className='mb-3'>
              <label htmlFor='name' className='form-label'>
                Name
              </label>
              <input
                id='name'
                type='text'
                className='form-control'
                placeholder='Name'
                value={state.name}
                onChange={(e) =>
                  setState((prev) => ({ ...prev, name: e.target.value }))
                }
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='username' className='form-label'>
                Username
              </label>
              <input
                id='username'
                type='text'
                className='form-control'
                placeholder='Username'
                value={state.username}
                onChange={(e) =>
                  setState((prev) => ({ ...prev, username: e.target.value }))
                }
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='email' className='form-label'>
                Email
              </label>
              <input
                id='email'
                type='email'
                className='form-control'
                placeholder='Email'
                value={state.email}
                onChange={(e) =>
                  setState((prev) => ({ ...prev, email: e.target.value }))
                }
              />
            </div>
          </div>
          <div className='modal-footer'>
            <button
              type='button'
              className='btn btn-secondary'
              data-bs-dismiss='modal'
            >
              Close
            </button>
            <button
              type='button'
              className={`btn btn-primary ${disabledBtn ? '' : 'disabled'}`}
              onClick={handleSubmit}
            >
              {loading ? 'Loading ' : 'Save changes'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalComponent;
