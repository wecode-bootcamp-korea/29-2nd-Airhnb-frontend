import React from 'react';
import styled from 'styled-components';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const center = {
  lat: 37.50646411590587,
  lng: 127.05363184054711,
};

function DetailMap({ mapLocation, containerStyle, mapviewMarkerClickHandler }) {
  return (
    <DetailMapContainer>
      <DetailMapTitle>호스팅 지역</DetailMapTitle>
      <div>
        위도, 경도, 지역, 나라
        {/* FIXME 데이터 받기 */}
      </div>
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
            // TODO
            // 위치 받아올 부분
            // 위도, 경도 받기
            position={{ lat: 37.506391778705115, lng: 127.05389342779698 }}
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
  width: '100%',
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

export default DetailMap;
