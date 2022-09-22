import styled from 'styled-components';
import Loader from 'components/modules/Loader/Loader';
import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAuthErrorMsg, getAuthLoading, getLoginState } from 'redux/Auth/Auth-selectors';
import { authLogin } from 'redux/Auth/Auth-operation';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const store = useSelector(store => store);
  const loading = getAuthLoading(store);
  const isLogin = getLoginState(store)
  const error = getAuthErrorMsg(store)

  const [state, setState] = useState({
    email: '',
    password: '',
  });
  useEffect(() => {
    if(isLogin){
        return navigate('/contacts')
      } 
  }, [isLogin,navigate])
  
  const onChange = e => {
    if (e.target.name === 'email') {
      setState(prevState => {
        return { ...prevState, email: e.target.value };
      });
    }
    if (e.target.name === 'password') {
      setState(prevState => {
        return { ...prevState, password: e.target.value };
      });
    }
  };
  const onSubmit = e => {
    e.preventDefault();
    const newLogin = {
      email: state.email,
      password: state.password,
    };
    dispatch(authLogin(newLogin));
  };
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
        {error && <ErrorStyled>{error}</ErrorStyled>}
        <form onSubmit={onSubmit}>
          <div className="form-group">
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

export default Login;

const ErrorStyled = styled.p`
  width: 100%;
  height: 25px;
  font-size: 22px;
  color: red;
  background-color: white;
  margin: 5px 10px;
`;