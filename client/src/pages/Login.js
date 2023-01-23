import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { checkValidationError, handleLogin, validate } from '../utils';

const Login = () => {
  // location and history
  const navigate = useNavigate();

  //  states
  const [login, setLogin] = useState({
    fields: {
      username: '',
      email: '',
      password: '',
    },
    errors: {
      username: '',
      email: '',
      password: '',
    },
  });

  const [loading, setLoading] = useState(false);
  const [otherErros, setOthersErrors] = useState('');

  const {
    fields: { username, email, password },
  } = login;

  const userNameError = login.errors.username;
  const emailError = login.errors.email;
  const passwordError = login.errors.password;

  const isEnabled =
    username &&
    email &&
    email.length > 3 &&
    password &&
    password.length > 4 &&
    !userNameError &&
    !emailError &&
    !passwordError;

  const handleChange = (e) => {
    setLogin({
      errors: {
        ...login.errors,
        [e.target.name]: validate(e.target.name, e.target.value),
      },
      fields: {
        ...login.fields,
        [e.target.name]: e.target.value,
      },
    });
  };

  const handleTokenResult = (tokenResult) => {
    if (tokenResult) {
      setLoading(false);
      navigate('/users');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    checkValidationError(login, setLogin);
    handleLogin(
      username,
      email,
      password,
      setLoading,
      handleTokenResult,
      setOthersErrors
    );
  };

  return (
    <div className='row login align-items-center'>
      <div className='col-md-12'>
        <div className='login-page'>
          <div className='register-block p-5 mt-5'>
            <h5 className='text-center text-faded-black'>Log In</h5>

            <p className='text-white my-2 p-3 bg-danger'>
              {otherErros ? otherErros : ''}
            </p>

            <form className='mt-5' onSubmit={handleSubmit}>
              <div className=''>
                <input
                  type='text'
                  name='username'
                  id='login_username'
                  autoComplete='off'
                  onChange={(event) => handleChange(event)}
                  value={username}
                  className='form-control'
                  placeholder='Username'
                />
                <p className='text-danger mt-1'>{userNameError}</p>
              </div>
              <div className='mt-3'>
                <input
                  type='text'
                  name='email'
                  id='login_email'
                  autoComplete='off'
                  onChange={(event) => handleChange(event)}
                  value={email}
                  className='form-control'
                  placeholder='Email'
                />
                <p className='text-danger mt-1'>{emailError}</p>
              </div>

              <div className='mt-3'>
                <input
                  type='password'
                  name='password'
                  id='login_password'
                  autoComplete='off'
                  onChange={(event) => handleChange(event)}
                  value={password}
                  className='form-control'
                  placeholder='Password'
                />
                <p className='text-danger mt-1'>{passwordError}</p>
              </div>
              <div className='mt-4'>
                <div className='form-group col-12 px-0'>
                  <div className='d-grid'>
                    <button
                      type='submit'
                      disabled={loading || !isEnabled}
                      className='btn btn-primary'
                    >
                      {loading ? (
                        <div className='d-flex align-items-center justify-content-center'>
                          <span className='px-1'>LogIn..</span>
                        </div>
                      ) : (
                        <div className='d-flex align-items-center justify-content-center'>
                          <span className='px-1'>LogIn</span>
                        </div>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
