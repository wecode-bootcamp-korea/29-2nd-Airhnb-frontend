import React from 'react';
import styled from 'styled-components';
import DetailInFoContents from './DetailInfoContents';
import DetailHouseReservation from './DetailHouseReservation';

function DetailContents() {
  return (
    <DetailContentsStyle>
      <DetailInFoContents />
      <DetailHouseReservation />
    </DetailContentsStyle>
  );
}

const DetailContentsStyle = styled.div`
  display: flex;
`;

export default DetailContents;
