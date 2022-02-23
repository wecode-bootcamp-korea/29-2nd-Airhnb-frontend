import React from 'react';
import styled from 'styled-components';
import MainContent from './MainContent/MainContent';
import MainLocation from './MainLocation/MainLocation';

const Main = () => {
  return (
    <MainContainer>
      <MainContent />
      <MainLocation />
    </MainContainer>
  );
};

const MainContainer = styled.main``;

export default Main;
