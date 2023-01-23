import axios from 'axios';
import Cookies from 'js-cookie';

export const handleLogin = async (
  username,
  email,
  password,
  setLoading,
  handleTokenResult,
  setOthersErrors
) => {
  if (username && email && password) {
    const loginValue = {
      username,
      email,
      password,
    };

    try {
      const response = await axios.post(
        'http://127.0.0.1:8080/api/users',
        loginValue
      );

      const { data = '' } = response || {};
      console.log('Data found', data);
      const tokenResult = await setTokens(data);
      handleTokenResult(tokenResult, data?.username);
    } catch (error) {
      setLoading(false);
      console.log('bad_request');
      setOthersErrors('Bad request');
    }
  }
};

export const setTokens = async (data) => {
  const { token } = data;
  Cookies.set('accessToken', token, { expires: 7 });
  return { token };
};

export const validate = (fieldName, value) => {
  switch (fieldName) {
    case 'username':
      if (!value) {
        return 'Username is required';
      }
      break;
    case 'email':
      if (!value) {
        return 'Email is required';
      }
      if (value && value.length > 3 && !validateEmail(value)) {
        return 'Please provide a valid email';
      }
      break;
    case 'password':
      if (!value) {
        return 'Password is required';
      }
      break;
    default: {
      return '';
    }
  }
  return '';
};

export const validateEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

export const checkValidationError = (login, setLogin) => {
  const validationErrors = {};
  // check errors
  Object.keys(login.fields).forEach((keyName) => {
    const error = validate(keyName, login.fields[keyName]);
    if (error && error.length > 0) {
      validationErrors[keyName] = error;
    }
  });
  // check validation
  if (Object.keys(validationErrors).length > 0) {
    setLogin({
      fields: {
        ...login.fields,
      },
      errors: {
        ...validationErrors,
      },
    });
  }
};
