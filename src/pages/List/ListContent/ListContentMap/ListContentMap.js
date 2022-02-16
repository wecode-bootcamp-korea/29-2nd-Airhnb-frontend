import React, { useState } from 'react';
import styled from 'styled-components';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { useToggle } from '../../../../hoc/useToggle.js';
import { itemListState } from '../../../../itemList';
import { useRecoilValue } from 'recoil';

const ListContentMap = ({
  mapLocation,
  containerStyle,
  mapviewMarkerClickHandler,
}) => {
  const markerList = useRecoilValue(itemListState);
  const [isResize, setIsResize] = useState(true);
  const [center, setCenter] = useState({
    lat: 37.50646411590587,
    lng: 127.05363184054711,
  });
  const resizeMap = object => {
    setIsResize(prev => !prev);
    if (object.target.parentNode.parentNode.lastChild.style.width === '100%') {
      object.target.parentNode.parentNode.parentNode.firstChild.style.display =
        'none';
    } else {
      object.target.parentNode.parentNode.parentNode.firstChild.style.display =
        'flex';
    }
  };
  const mapStyle = {
    position: 'sticky',
    top: 0,
    width: isResize ? '100%' : '100vw',
    height: '900px',
    scrollBehavior: 'smooth',
    transition: 'width 0.5s',
    overflow: 'hidden',
  };

  const [mapref, setMapRef] = React.useState(null);
  const handleOnLoad = map => {
    setMapRef(map);
  };

  const handleCenterChanged = e => {
    if (mapref && isChecked) {
      const newCenter = mapref.getCenter();
      center.lat = newCenter.lat();
      center.lng = newCenter.lng();
    }
  };

  const [isChecked, setIsChecked] = useToggle();

  const mapClicked = event => {
    setCenter({ ...center, lat: event.latLng.lat(), lng: event.latLng.lng() });
  };
  const googleMapApiKey = process.env.REACT_APP_GOOGLE_MAP_API_KEY;

  return (
    <ListContentMapContainer>
      <ArrowBox>
        <ArrowButton onClick={resizeMap}>
          {isResize ? '<' : '> 목록보기'}
        </ArrowButton>
      </ArrowBox>
      <SearchBox onClick={setIsChecked}>
        <SearchButton>
          <input type="checkbox" checked={isChecked} />
          <span>&nbsp; 지도를 움직이며 검색하기</span>
        </SearchButton>
      </SearchBox>
      <LoadScript
        googleMapsApiKey={googleMapApiKey}
        style={{ position: 'relative', right: '100px' }}
      >
        <GoogleMap
          mapContainerStyle={mapStyle}
          center={center}
          zoom={14}
          options={{
            mapTypeControl: false,
            fullscreenControl: false,
            streetViewControl: false,
            scrollwheel: true,
          }}
          onDblClick={mapClicked}
          onLoad={handleOnLoad}
          onCenterChanged={handleCenterChanged}
        >
          {markerList.results &&
            markerList.results.map((item, index) => (
              <Marker
                key={index}
                position={{
                  lat: Number(item.lat),
                  lng: Number(item.lng),
                }}
                icon="/images/iconimage.png"
              />
            ))}
        </GoogleMap>
      </LoadScript>
    </ListContentMapContainer>
  );
};

export default ListContentMap;

const ListContentMapContainer = styled.div`
  position: relative;
  width: 100%;
`;

const ArrowBox = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;

  margin-left: 24px;
  margin-top: 24px;
  z-index: 1;
  &:hover {
    cursor: pointer;
    box-shadow: rgb(0 0 0 / 12%) 0px 6px 16px;
  }
`;

const ArrowButton = styled.button`
  position: inline-flex;
  height: 40px;
  padding: 7px 15px;
  background: ${({ theme }) => theme.white}
  box-shadow: rgb(0 0 0 / 12%) 0px 6px 16px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  z-index: 100;
  cursor: pointer;
  transition: all 10s, color 10;
`;

const SearchBox = styled.div`
  position: absolute;
  top: 0px;
  left: 40%;
  margin-left: 24px;
  margin-top: 24px;
  z-index: 1;

  &:hover {
    cursor: pointer;
    box-shadow: rgb(0 0 0 / 12%) 0px 6px 16px;
  }
`;

const SearchButton = styled.div`
  position: inline-flex;
  display: flex;
  align-items: center;
  height: 40px;
  padding: 7px 15px;
  background: rgb(255, 255, 255);
  box-shadow: rgb(0 0 0 / 12%) 0px 6px 16px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  z-index: 100;
  cursor: pointer;
  transition: all 10s, color 10;

  input,
  span {
    margin: 0 auto;
    font-size: 14px;
  }
`;
