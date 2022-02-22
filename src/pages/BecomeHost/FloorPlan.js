import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
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
  sectionMainTopStyle,
} from '../../styles/becomeHostStyle';

const FloorPlan = () => {
  const navigate = useNavigate();
  const goToMain = () => navigate('/');
  const goBack = () => navigate('/become-host/location');
  const goToAmenities = () => navigate('/become-host/amenities');
  const [numberOfPeople, setNumberOfPeople] = useState(0);

  const personCountDown = () => {
    if (numberOfPeople <= 0) return numberOfPeople;
    else setNumberOfPeople(prev => prev - 1);
  };

  const personCountUp = () => {
    setNumberOfPeople(prev => prev + 1);
  };

  return (
    <Section>
      <FloorPlanSection>
        <GoToMainAndLogo onClick={goToMain} src="/images/airhnb-white.svg" />
        <FloorPlanText>숙소에서 맞이할 최대 인원수를 알려주세요.</FloorPlanText>
      </FloorPlanSection>
      <FloorPlanMain>
        <FloorPlanTop>
          <SaveOrOutButton onClick={goToMain}>저장 및 나가기</SaveOrOutButton>
        </FloorPlanTop>
        <FloorPlanMiddle>
          <MaximumPeople>최대인원</MaximumPeople>
          <PersonalControl>
            <PersonalControlButton onClick={personCountDown}>
              -
            </PersonalControlButton>
            <NumberOfPeople>{numberOfPeople}</NumberOfPeople>
            <PersonalControlButton onClick={personCountUp}>
              +
            </PersonalControlButton>
          </PersonalControl>
        </FloorPlanMiddle>
        <FloorPlanBottom>
          <HostPreviousButton onClick={goBack}>뒤로</HostPreviousButton>
          <HostNextButton onClick={goToAmenities}>다음</HostNextButton>
        </FloorPlanBottom>
      </FloorPlanMain>
    </Section>
  );
};

const Section = styled.section`
  ${sectionStyle}
`;

const FloorPlanSection = styled.div`
  ${sectionLeftStyle}
`;

const FloorPlanMain = styled.div`
  ${sectionMainStyle}
`;

const GoToMainAndLogo = styled.img`
  ${logoStyle}
`;

const FloorPlanText = styled.p`
  ${sectionLeftTextStyle};
  width: 450px;
`;

const FloorPlanTop = styled.div`
  ${sectionMainTopStyle}
`;

const SaveOrOutButton = styled.button`
  ${goToMainButtonStyle}
`;

const FloorPlanMiddle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 475px;
`;

const MaximumPeople = styled.p`
  font-size: 30px;
  font-weight: bold;
`;

const PersonalControl = styled.p`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 130px;
`;

const PersonalControlButton = styled.button`
  width: 40px;
  height: 40px;
  border: 1px solid ${({ theme }) => theme.lightGray};
  border-radius: 50%;
  color: gray;
  background-color: transparent;
  text-align: center;
  cursor: pointer;
  :hover {
    border: 1px solid black;
    color: black;
  }
`;

const NumberOfPeople = styled.p`
  width: 50px;
  text-align: center;
`;

const FloorPlanBottom = styled.div`
  ${sectionMainBottomStyle}
`;

const HostPreviousButton = styled.p`
  ${previousButtonStyle}
`;

const HostNextButton = styled.button`
  ${nextButtonStyle}
`;

export default FloorPlan;
