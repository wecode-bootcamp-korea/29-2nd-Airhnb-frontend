import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import DetailTop from './DetailTop/DetailTop';
import DetailContents from './DetailContents/DetailContents';
import DetailMap from './DetailMap/DetailMap';
import { DETAIL_URL } from '../../config';

function Detail() {
  const [details, setDetails] = useState(null);
  useEffect(() => {
    fetch('http://10.58.2.107:8000/houses/2')
      // fetch(`${DETAIL_URL}/houses/2`)
      .then(res => res.json())
      .then(res => {
        setDetails(res);
      });
  }, []);

  return (
    <DetailPage>
      {details && (
        <>
          <DetailTop
            name={details.house[0].name}
            houseType={details.house[0].house_type}
            city={details.house[0].city}
            country={details.house[0].country}
            imgList={details.house[0].houseimage}
          />

          <DetailContents
            houseType={details.house[0].house_type}
            maxGuest={details.house[0].max_guest}
            description={details.house[0].description}
            exit={details.house[0].exit}
            trap={details.house[0].trap}
          />

          <DetailMap
            latitude={details.house[0].latitude}
            longitude={details.house[0].longitude}
            city={details.house[0].city}
            country={details.house[0].country}
          />
        </>
      )}
    </DetailPage>
  );
}

const DetailPage = styled.div`
  margin: 80px 160px;
`;

export default Detail;
