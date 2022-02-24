import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import {
  sectionStyle,
  logoStyle,
  goToMainButtonStyle,
  sectionMainBottomStyle,
  nextButtonStyle,
  sectionMainTopStyle,
  flexAlign,
} from '../../styles/becomeHostStyle';

const BecomeHost = () => {
  const navigate = useNavigate();
  const goToMain = () => navigate('/');
  const goToPropertyType = () => navigate('floor-plan');

  return (
    <Section>
      <BecomeHostMainImage>
        <GoToMainAndLogo onClick={goToMain} src="/images/airhnb-white.svg" />
      </BecomeHostMainImage>
      <BecomeHostMain>
        <BecomeHostMainTop>
          <GoToMainButton onClick={goToMain}>나가기</GoToMainButton>
        </BecomeHostMainTop>
        <BecomeHostMainMiddle>
          <BecomeHostMainText>
            간단한 10단계로 호스팅 시작하기
          </BecomeHostMainText>
          <BecomeHostMainSubText>
            에어에이치앤비 호스트가 되어보세요. 에어에이치앤비에서 모든 과정을
            도와드립니다.
          </BecomeHostMainSubText>
        </BecomeHostMainMiddle>
        <BecomeHostMainBottom>
          <BecomeHostButton onClick={goToPropertyType}>
            시작하기
          </BecomeHostButton>
        </BecomeHostMainBottom>
      </BecomeHostMain>
    </Section>
  );
};

const Section = styled.section`
  ${sectionStyle}
`;

const BecomeHostMainImage = styled.div`
  width: 50%;
  background-image: url('/images/becomeHost/host-01.jpg');
  background-position: 45% 30%;
`;

const BecomeHostMain = styled.div`
  ${flexAlign};
  flex-direction: column;
  justify-content: space-between;
  width: 50%;
  background-color: black;
`;

const GoToMainAndLogo = styled.img`
  ${logoStyle}
`;

const BecomeHostMainTop = styled.div`
  ${sectionMainTopStyle}
`;

const GoToMainButton = styled.button`
  ${goToMainButtonStyle}
  width: 55px;
`;

const BecomeHostMainMiddle = styled.div`
  ${flexAlign}
`;

const BecomeHostMainText = styled.p`
  width: 450px;
  margin-bottom: 30px;
  color: ${({ theme }) => theme.white};
  font-size: 45px;
  line-height: 55px;
  text-align: center;
`;

const BecomeHostMainSubText = styled.p`
  width: 450px;
  color: ${({ theme }) => theme.white};
  line-height: 25px;
  text-align: center;
`;

const BecomeHostMainBottom = styled.div`
  ${sectionMainBottomStyle};
  justify-content: flex-end;
`;

const BecomeHostButton = styled.button`
  ${nextButtonStyle};
  width: 105px;
  height: 50px;
`;

export default BecomeHost;
