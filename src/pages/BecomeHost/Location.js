import React, { useCallback, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Search from './Search';
import styled from 'styled-components';
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';
import {
  sectionStyle,
  logoStyle,
  sectionLeftStyle,
  sectionLeftTextStyle,
  sectionMainStyle,
  goToMainButtonStyle,
  sectionMainBottomStyle,
  nextButtonStyle,
  previousButtonStyle,
} from '../../styles/becomeHostStyle';
import { useRecoilState } from 'recoil';
import { becomeHostData } from '../../hostData';

const Location = () => {
  const navigate = useNavigate();
  const goToMain = () => navigate('/');
  const goBack = () => navigate('/become-host/property-type');
  const goToFloorPlan = () => navigate('/become-host/amenities');
  const [hostData, setHostData] = useRecoilState(becomeHostData);
  const [markers, setMarkers] = useState([]);

  const googleMapsApiKey = process.env.REACT_APP_GOOGLE_MAP_KEY;
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: googleMapsApiKey,
    libraries,
  });

  const onMapClick = event => {
    setMarkers([
      {
        lat: event.latLng.lat(),
        lng: event.latLng.lng(),
      },
    ]);
    setHostData({
      ...hostData,
      latitude: event.latLng.lat(),
      longitude: event.latLng.lng(),
    });
  };

  const mapRef = useRef();
  const onMapLoad = useCallback(map => {
    mapRef.current = map;
  }, []);

  const panTo = useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(14);
  }, []);

  if (loadError) return 'Error loading maps';
  if (!isLoaded) return 'loading Maps';

  return (
    <Section>
      <LocationSection>
        <GoToMainAndLogo onClick={goToMain} src="/images/airhnb-white.svg" />
        <LocationText>숙소 위치는 어디인가요?</LocationText>
      </LocationSection>

      <LocationMain>
        <SaveOrOutButton onClick={goToMain}>저장 및 나가기</SaveOrOutButton>
        <LocationMiddle>
          <Search panTo={panTo} hostData={hostData} setHostData={setHostData} />
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            zoom={14}
            center={center}
            options={options}
            onClick={onMapClick}
            onLoad={onMapLoad}
          >
            {markers.map((marker, idx) => (
              <Marker
                key={idx}
                position={{ lat: marker.lat, lng: marker.lng }}
              />
            ))}
          </GoogleMap>
        </LocationMiddle>

        <LocationBottom>
          <HostPreviousButton onClick={goBack}>뒤로</HostPreviousButton>
          <HostNextButton onClick={goToFloorPlan}>다음</HostNextButton>
        </LocationBottom>
      </LocationMain>
    </Section>
  );
};

const libraries = ['places'];

const mapContainerStyle = {
  width: '100%',
  height: '100%',
};

const center = {
  lat: 37.50646411590587,
  lng: 127.05363184054711,
};

const options = {
  disableDefaultUI: true,
  zoomControl: true,
};

const Section = styled.section`
  ${sectionStyle}
`;

const LocationSection = styled.div`
  ${sectionLeftStyle}
`;

const LocationMain = styled.div`
  ${sectionMainStyle}
`;

const GoToMainAndLogo = styled.img`
  ${logoStyle}
`;

const LocationText = styled.p`
  ${sectionLeftTextStyle}
  width: 500px;
`;

const SaveOrOutButton = styled.button`
  ${goToMainButtonStyle}
  position: absolute;
  top: 40px;
  right: 50px;
  z-index: 100;
`;

const LocationMiddle = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const LocationBottom = styled.div`
  ${sectionMainBottomStyle};
  height: 86px;
`;

const HostPreviousButton = styled.p`
  ${previousButtonStyle}
`;

const HostNextButton = styled.button`
  ${nextButtonStyle}
`;

export default Location;
