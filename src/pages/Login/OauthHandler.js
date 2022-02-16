import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { LIST_BASE_URL } from '../../config';

const OauthHandler = () => {
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    const authorizeCode = location.search.slice(6);
    fetch(`${LIST_BASE_URL}/users/kakao/signin?code=${authorizeCode}`)
      .then(res => {
        return res.json();
      })
      .then(res => {
        sessionStorage.setItem('JWT', res.access_token);
        navigate('/');
      });
  }, [location.search, navigate]);
  return <div />;
};

export default OauthHandler;
