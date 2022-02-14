import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFaceGrimace,
  faFaceDizzy,
} from '@fortawesome/free-regular-svg-icons';
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

const Amenities = () => {
  const navigate = useNavigate();
  const goToMain = () => navigate('/');
  const goBack = () => navigate('/become-host/floor-plan');
  const goToAmenities = () => navigate('/become-host/amenities');

  return (
    <Section>
      <AmenitiesSection>
        <GoToMainAndLogo onClick={goToMain} src="/images/airhnb-white.svg" />
        <AmenitiesText>숙소 편의시설 정보를 추가해 주세요.</AmenitiesText>
      </AmenitiesSection>
      <AmenitiesMain>
        <AmenitiesTop>
          <SaveOrOutButton onClick={goToMain}>저장 및 나가기</SaveOrOutButton>
        </AmenitiesTop>
        <AmenitiesMiddle>
          <AmenitiesQuestion>다음 인기 편의시설이 있나요?</AmenitiesQuestion>
          <AmenitiesOptions>
            <AmenitiesOption>
              <FontAwesomeIcon
                icon={faFaceGrimace}
                className="fontAwesomeIcon"
              />
              탈출구
            </AmenitiesOption>
            <AmenitiesOption>
              <FontAwesomeIcon icon={faFaceDizzy} className="fontAwesomeIcon" />
              함정
            </AmenitiesOption>
          </AmenitiesOptions>
        </AmenitiesMiddle>
        <AmenitiesBottom>
          <HostPreviousButton onClick={goBack}>뒤로</HostPreviousButton>
          <HostNextButton onClick={goToAmenities}>다음</HostNextButton>
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
  width: 450px;
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

const AmenitiesQuestion = styled.p`
  width: 475px;
  margin-bottom: 30px;
  font-size: 25px;
  font-weight: bold;
  text-align: left;
`;

const AmenitiesOptions = styled.div`
  width: 475px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const AmenitiesOption = styled.div`
  ${flexAlign}
  width: 200px;
  height: 200px;
  margin-bottom: 20px;
  border: 1px solid ${({ theme }) => theme.lightGray};
  border-radius: 15px;
  text-align: center;
  &:hover {
    border: 2px solid black;
  }

  .fontAwesomeIcon {
    font-size: 40px;
    margin-bottom: 20px;
  }
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

export default Amenities;
