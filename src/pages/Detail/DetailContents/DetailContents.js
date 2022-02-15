import React from 'react';
import styled from 'styled-components';
import DetailInFoContents from './DetailInfoContents';
import DetailHouseReservation from './DetailHouseReservation';

function DetailContents({ description, houseType, maxGuest, exit, trap }) {
  return (
    <DetailContentsStyle>
      <DetailInFoContents
        houseType={houseType}
        maxGuest={maxGuest}
        description={description}
        exit={exit}
        trap={trap}
      />
      <DetailHouseReservation maxGuest={maxGuest} />
    </DetailContentsStyle>
  );
}

const DetailContentsStyle = styled.div`
  display: flex;
`;

export default DetailContents;
