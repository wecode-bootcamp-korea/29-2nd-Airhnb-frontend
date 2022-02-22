import React, { useState } from 'react';
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

const GhostType = () => {
  const navigate = useNavigate();
  const goToMain = () => navigate('/');
  const goBack = () => navigate('/become-host/photos');
  const goToDescription = () => navigate('/become-host/title');

  const ghostTypes = [
    '처녀귀신',
    '좀비',
    '드라큘라',
    '유령',
    '개발자',
    '학생',
    '목사',
    '연쇄 살인마',
    '백작',
    '환자',
  ];

  return (
    <Section>
      <GhostTypeSection>
        <GoToMainAndLogo onClick={goToMain} src="/images/airhnb-white.svg" />
        <GhostTypeText>숙소 이름을 만들어주세요.</GhostTypeText>
      </GhostTypeSection>
      <GhostTypeMain>
        <GhostTypeTop>
          <SaveOrOutButton onClick={goToMain}>저장 및 나가기</SaveOrOutButton>
        </GhostTypeTop>
        <GhostTypeMiddle>
          {ghostTypes.map((ghostType, idx) => (
            <GhostTypes key={idx}>{ghostType}</GhostTypes>
          ))}
        </GhostTypeMiddle>
        <GhostTypeBottom>
          <HostPreviousButton onClick={goBack}>뒤로</HostPreviousButton>
          <HostNextButton onClick={goToDescription}>다음</HostNextButton>
        </GhostTypeBottom>
      </GhostTypeMain>
    </Section>
  );
};

const Section = styled.section`
  ${sectionStyle}
`;

const GhostTypeSection = styled.div`
  ${sectionLeftStyle}
`;

const GhostTypeMain = styled.div`
  ${sectionMainStyle}
`;

const GoToMainAndLogo = styled.img`
  ${logoStyle}
`;

const GhostTypeText = styled.p`
  ${sectionLeftTextStyle}
`;

const GhostTypeTop = styled.div`
  ${sectionMainTopStyle}
`;

const SaveOrOutButton = styled.button`
  ${goToMainButtonStyle}
`;

const GhostTypeMiddle = styled.div`
  ${flexAlign}
  flex-direction: row;
  flex-wrap: wrap;
  width: 500px;
`;

const GhostTypes = styled.div`
  width: 200px;
  height: 100px;
  margin: 10px 20px;
  border: 1px solid ${({ theme }) => theme.darkGray};
  border-radius: 15px;
  text-align: center;
  font-size: 20px;
  line-height: 100px;
  &:hover {
    border: 2px solid black;
  }
`;

const GhostTypeBottom = styled.div`
  ${sectionMainBottomStyle}
`;

const HostPreviousButton = styled.p`
  ${previousButtonStyle}
`;

const HostNextButton = styled.button`
  ${nextButtonStyle}
`;

export default GhostType;
