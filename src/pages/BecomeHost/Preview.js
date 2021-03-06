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

const Preview = () => {
  const navigate = useNavigate();
  const goToMain = () => navigate('/');
  const goBack = () => navigate('/become-host/description');
  const goToComplete = () => navigate('/become-host/complete');

  return (
    <Section>
      <PreviewSection>
        <GoToMainAndLogo src="/images/airhnb-white.svg" />
        <PreviewText>새로운 흉가 페이지를 확인하세요!</PreviewText>
      </PreviewSection>
      <PreviewMain>
        <PreviewTop>
          <SaveOrOutButton onClick={goToMain}>저장 및 나가기</SaveOrOutButton>
        </PreviewTop>
        <PreviewMiddle />
        <PreviewBottom>
          <HostPreviousButton onClick={goBack}>뒤로</HostPreviousButton>
          <HostNextButton onClick={goToComplete}>다음</HostNextButton>
        </PreviewBottom>
      </PreviewMain>
    </Section>
  );
};

const Section = styled.section`
  ${sectionStyle}
`;

const PreviewSection = styled.div`
  ${sectionLeftStyle}
`;

const PreviewMain = styled.div`
  ${sectionMainStyle}
`;

const GoToMainAndLogo = styled.img`
  ${logoStyle}
`;

const PreviewText = styled.p`
  ${sectionLeftTextStyle}
  width: 450px;
`;

const PreviewTop = styled.div`
  ${sectionMainTopStyle}
`;

const SaveOrOutButton = styled.button`
  ${goToMainButtonStyle}
`;

const PreviewMiddle = styled.div`
  ${flexAlign}
  justify-content: space-between;
  width: 75%;
`;

const PreviewBottom = styled.div`
  ${sectionMainBottomStyle}
`;

const HostPreviousButton = styled.p`
  ${previousButtonStyle}
`;

const HostNextButton = styled.button`
  ${nextButtonStyle}
`;

export default Preview;
