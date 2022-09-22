import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authRegister } from 'redux/Auth/Auth-operation';
import {
  getAuthLoading,
  getAuthErrorMsg,
  getLoginState,
} from '../../../redux/Auth/Auth-selectors';
import Loader from 'components/modules/Loader/Loader';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Register = () => {
  const store = useSelector(store => store);
  const loading = getAuthLoading(store);
  const error = getAuthErrorMsg(store);
  const isLogin = getLoginState(store);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [state, setState] = useState({
    name: '',
    email: '',
    password: '',
  });
  useEffect(() => {
    if (isLogin) {
      navigate('/login');
    }
  },[isLogin,navigate])
 
  const onChange = ({ target }) => {
    switch (target.name) {
      case 'name':
        return setState(prevState => {
          return { ...prevState, name: target.value };
        });
      case 'email':
        return setState(prevState => {
          return { ...prevState, email: target.value };
        });
      case 'password':
        return setState(prevState => {
          return { ...prevState, password: target.value };
        });
      default:
        break;
    }
  };
  const onSubmit = e => {
    e.preventDefault();
    const newUser = {
      name: state.name,
      email: state.email,
      password: state.password,
    };
    dispatch(authRegister(newUser));
  };
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          {error && (
            <ErrorStyled>{error}</ErrorStyled>
          )}
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Your name</label>
              <input
                type="text"
                name="name"
                className="form-control"
                id="exampleInputName1"
                aria-describedby="textHelp"
                placeholder="Enter your name"
                onChange={onChange}
              />
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input
                type="email"
                name="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                onChange={onChange}
              />
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input
                name="password"
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
                autoComplete="off"
                onChange={onChange}
              />
            </div>
            <button
              type="submit"
              style={{ marginTop: `${10}px` }}
              className="btn btn-primary"
            >
              Submit
            </button>
          </form>
        </>
      )}
    </>
  );
};

export default Register;

const ErrorStyled = styled.p`
  width: 100%;
  height: 25px;
  font-size: 22px;
  color: red;
  background-color: white;
  margin: 5px 10px;
`;
