import React from 'react';
import styled from 'styled-components';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

function DetailMap({ latitude, longitude, city, country }) {
  const center = {
    lat: Number(latitude),
    lng: Number(longitude),
  };

  return (
    <DetailMapContainer>
      <DetailMapTitle>호스팅 지역</DetailMapTitle>
      <DetailMapDetail>
        {city} · {country}
      </DetailMapDetail>
      <LoadScript
        googleMapsApiKey="AIzaSyBNOa7yNsc8oZTDIDjoNKb5aKzNCsDog3k"
        style={{ position: 'relative', right: '100px' }}
      >
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={14}
        >
          <Marker
            position={{ lat: Number(latitude), lng: Number(longitude) }}
          />
        </GoogleMap>
      </LoadScript>
    </DetailMapContainer>
  );
}

const mapContainerStyle = {
  position: 'sticky',
  top: 0,
  bottom: 0,
  right: 0,
  left: 0,
  width: '95%',
  height: '100vh',
};
const DetailMapContainer = styled.div`
  position: relative;
  width: 100%;
  padding-top: 48px;
  border-top: 1px solid ${({ theme }) => theme.lightGray};
`;

const DetailMapTitle = styled.h2`
  padding-bottom: 24px;
  color: ${({ theme }) => theme.mainColor};
  font-size: 28px;
  font-weight: 400;
`;

const DetailMapDetail = styled.div`
  margin-bottom: 20px;
`;

export default DetailMap;
