import React from 'react';
import styled from 'styled-components';
import theme from '../../../styles/theme';

const MainContent = () => {
  return (
    <MainContentContainer>
      <ImageContainer>
        <img src="/images/maincontent.jpg" alt="메인 이미지" />
      </ImageContainer>
      <ContentContaier>
        <span>
          <p>AIR HNB가</p>
          <p>무서운 장소를 찾아드릴게요!</p>
        </span>
        <button>유연한 검색</button>
      </ContentContaier>
    </MainContentContainer>
  );
};

const MainContentContainer = styled.section`
  height: 90vh;
  padding: 10vh 0vw 0px 0vw;
  color: ${({ theme }) => theme.white};
  background-color: ${({ theme }) => theme.black};
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ContentContaier = styled.div`
  position: relative;

  span {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    top: -40vh;
    left: 30vw;
    font-size: 40px;
    color: ${({ theme }) => theme.white};

    p {
      margin-bottom: 30px;
    }
  }

  button {
    position: absolute;
    top: -20vh;
    left: 40vw;
    padding: 20px 40px;

    font-size: 20px;
    background-color: ${({ theme }) => theme.white};
    border: none;
    border-radius: 40px;
    cursor: hover;
  }
`;

export default MainContent;
