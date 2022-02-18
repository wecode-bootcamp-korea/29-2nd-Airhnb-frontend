import React from 'react';
import styled from 'styled-components';
import LocationCard from './LocationCard/LocationCard';

const MainLocation = () => {
  return (
    <MainLocationContainer>
      <p>세계 각 곳의 공포스러운 장소로 이동하세요</p>
      <LocationCard />
    </MainLocationContainer>
  );
};

const MainLocationContainer = styled.section`
  height: 90vh;
  padding: 10vh 5vw 0px 5vw;

  color: ${({ theme }) => theme.black};
  background-color: ${({ theme }) => theme.white};

  p {
    font-size: 40px;
    font-weight: 600;
  }
`;

export default MainLocation;
