import React from 'react';
import styled from 'styled-components';
import DetailHostIntro from './DetailHostIntro';
import DetailHouseIntro from './DetailHouseIntro';
import DetailHouseCategories from './DetailHouseCategories';
import DetailHouseCalendar from './DetailHouseCalendar';

function DetailInfoContents({ description, houseType, maxGuest, exit, trap }) {
  return (
    <DetailInfoContentsStyle>
      <DetailHostIntro houseType={houseType} maxGuest={maxGuest} />
      <DetailHouseIntro description={description} />
      <DetailHouseCategories
        houseType={houseType}
        exit={exit}
        trap={trap}
        maxGuest={maxGuest}
      />
      <DetailHouseCalendar />
    </DetailInfoContentsStyle>
  );
}

const DetailInfoContentsStyle = styled.div`
  width: 60%;
`;

export default DetailInfoContents;
