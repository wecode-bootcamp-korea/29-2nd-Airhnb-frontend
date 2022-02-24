import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import DetailTop from './DetailTop/DetailTop';
import DetailContents from './DetailContents/DetailContents';
import DetailMap from './DetailMap/DetailMap';
import { DETAIL_URL } from '../../config';

function Detail() {
  const [details, setDetails] = useState(null);
  const params = useParams();

  useEffect(() => {
    fetch(`${DETAIL_URL}/houses/${params.house_id}`)
      .then(res => res.json())
      .then(res => {
        setDetails(res);
      });
  }, [params.house_id]);

  const detailData = details.result;
  const {
    name,
    house_type,
    city,
    country,
    houseimage,
    max_guest,
    description,
    exit,
    trap,
    latitude,
    longitude,
  } = detailData;

  return (
    <DetailPage>
      {details && (
        <>
          <DetailTop
            name={name}
            houseType={house_type}
            city={city}
            country={country}
            imgList={houseimage}
          />

          <DetailContents
            houseType={house_type}
            maxGuest={max_guest}
            description={description}
            exit={exit}
            trap={trap}
          />

          <DetailMap
            latitude={latitude}
            longitude={longitude}
            city={city}
            country={country}
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
