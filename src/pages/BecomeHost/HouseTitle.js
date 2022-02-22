import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import {
  sectionStyle,
  logoStyle,
  sectionLeftStyle,
  sectionMainStyle,
  goToMainButtonStyle,
  sectionMainBottomStyle,
  nextButtonStyle,
  previousButtonStyle,
  sectionMainTopStyle,
  sectionLeftTextStyle,
  flexAlign,
} from '../../styles/becomeHostStyle';

const HouseTitle = () => {
  const navigate = useNavigate();
  const goToMain = () => navigate('/');
  const goBack = () => navigate('/become-host/photos');
  const goToDescription = () => navigate('/become-host/description');

  return (
    <Section>
      <AmenitiesSection>
        <GoToMainAndLogo onClick={goToMain} src="/images/airhnb-white.svg" />
        <AmenitiesText>숙소 이름을 만들어주세요.</AmenitiesText>
      </AmenitiesSection>
      <AmenitiesMain>
        <AmenitiesTop>
          <SaveOrOutButton onClick={goToMain}>저장 및 나가기</SaveOrOutButton>
        </AmenitiesTop>
        <AmenitiesMiddle>
          <div>Hello</div>
        </AmenitiesMiddle>
        <AmenitiesBottom>
          <HostPreviousButton onClick={goBack}>뒤로</HostPreviousButton>
          <HostNextButton onClick={goToDescription}>다음</HostNextButton>
        </AmenitiesBottom>
      </AmenitiesMain>
    </Section>
  );
};

const Section = styled.section`
  ${sectionStyle}
`;

const AmenitiesSection = styled.div`
  ${sectionLeftStyle}
`;

const AmenitiesMain = styled.div`
  ${sectionMainStyle}
`;

const GoToMainAndLogo = styled.img`
  ${logoStyle}
`;

const AmenitiesText = styled.p`
  ${sectionLeftTextStyle}
`;

const AmenitiesTop = styled.div`
  ${sectionMainTopStyle}
`;

const SaveOrOutButton = styled.button`
  ${goToMainButtonStyle}
`;

const AmenitiesMiddle = styled.div`
  ${flexAlign}
  justify-content: space-between;
  width: 75%;
`;

const AmenitiesBottom = styled.div`
  ${sectionMainBottomStyle}
`;

const HostPreviousButton = styled.p`
  ${previousButtonStyle}
`;

const HostNextButton = styled.button`
  ${nextButtonStyle}
`;

export default HouseTitle;
