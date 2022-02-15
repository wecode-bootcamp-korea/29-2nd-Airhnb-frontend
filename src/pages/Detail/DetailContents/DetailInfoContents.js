import React from 'react';
import styled from 'styled-components';
import DetailHostIntro from './DetailHostIntro';
import DetailHouseIntro from './DetailHouseIntro';
import DetailHouseCategories from './DetailHouseCategories';
import DetailHouseCalendar from './DetailHouseCalendar';

function DetailInfoContents() {
  return (
    <DetailInfoContentsStyle>
      <DetailHostIntro />
      <DetailHouseIntro />
      <DetailHouseCategories />
      <DetailHouseCalendar />
    </DetailInfoContentsStyle>
  );
}

const DetailInfoContentsStyle = styled.div`
  width: 60%;
`;

export default DetailInfoContents;
