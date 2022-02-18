import React from 'react';
import styled from 'styled-components';
import MainContent from './MainContent/MainContent';

const Main = () => {
  return (
    <MainContainer>
      <MainContent />
      <MainContainer />
    </MainContainer>
  );
};

const MainContainer = styled.main``;

export default Main;
