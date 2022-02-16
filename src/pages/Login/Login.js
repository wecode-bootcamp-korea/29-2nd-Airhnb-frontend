import React from 'react';
import { faX, faComment } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

const Login = ({ closeModal }) => {
  const REACT_APP_REST_API_KEY = process.env.REACT_APP_REST_API_KEY;

  const REACT_APP_REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI;

  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REACT_APP_REST_API_KEY}&redirect_uri=${REACT_APP_REDIRECT_URI}&response_type=code`;
  return (
    <ModalContainer>
      <ModalHeader>
        <FontAwesomeIcon
          icon={faX}
          onClick={closeModal}
          className="closeButton"
        />
        <ModalHeaderText>로그인 또는 회원가입</ModalHeaderText>
      </ModalHeader>
      <ModalContent>
        <SocialLoginButton href={KAKAO_AUTH_URL}>
          <FontAwesomeIcon icon={faComment} />
          <p>카카오로 로그인 하기</p>
        </SocialLoginButton>
      </ModalContent>
    </ModalContainer>
  );
};

const ModalContainer = styled.div`
  ${({ theme }) => theme.flexMixin('space-between', 'center', 'column')};
  position: fixed;
  top: 0;
  left: 0;
  margin-left: 40px;
  margin-top: 40px;
  /* width: 100%;
  height: 100%; */
`;

const ModalHeader = styled.div`
  ${({ theme }) => theme.flexMixin('space-between', 'center')};
  width: 495px;
  padding-bottom: 15px;
  margin-bottom: 15px;
  border-bottom: 1px solid lightgray;

  .closeButton {
    margin-top: 15px;
  }
`;

const ModalHeaderText = styled.div`
  display: flex;
  padding-top: 10px;
  margin-left: 160px;
  font-size: 25px;
`;

const ModalContent = styled.div`
  ${({ theme }) => theme.flexMixin('center')};
`;

const SocialLoginButton = styled.a`
  ${({ theme }) => theme.flexMixin('flex-start', 'center', 'row')};
  border-radius: 10px;
  width: 500px;
  height: 50px;
  background-color: white;
  border: 1px solid;
`;

export default Login;
