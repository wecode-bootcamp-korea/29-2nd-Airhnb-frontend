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

const Complete = () => {
  const navigate = useNavigate();
  const goToMain = () => navigate('/');
  const goToPropertyType = () => navigate('property-type');

  return (
    <Section>
      <HostCompleteImage>
        <GoToMainAndLogo onClick={goToMain} src="/images/airhnb-white.svg" />
      </HostCompleteImage>
      <HostCompleteMain>
        <HostCompleteTop>
          <GoToMainButton onClick={goToMain}>나가기</GoToMainButton>
        </HostCompleteTop>
        <HostCompleteMiddle>
          <HostCompleteText>축하합니다!</HostCompleteText>
          <HostCompleteSubText>
            에어에이치앤비 호스트가 되신 것을 환영합니다. 호스트는
            에어에이치앤비의 중심이라 할 수 있습니다. 이제 호스팅의 매력을
            경험해보세요.
          </HostCompleteSubText>
        </HostCompleteMiddle>
        <HostCompleteBottom>
          <BecomeHostButton onClick={goToPropertyType}>
            호스팅의 세계로!
          </BecomeHostButton>
        </HostCompleteBottom>
      </HostCompleteMain>
    </Section>
  );
};

const Section = styled.section`
  ${sectionStyle}
`;

const HostCompleteImage = styled.div`
  width: 50%;
  background-image: url('/images/becomeHost/host-01.jpg');
  background-position: 45% 30%;
`;

const HostCompleteMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 50%;
  background-color: black;
`;

const GoToMainAndLogo = styled.img`
  ${logoStyle}
`;

const HostCompleteTop = styled.div`
  ${sectionMainTopStyle}
`;

const GoToMainButton = styled.button`
  ${goToMainButtonStyle}
  width: 55px;
`;

const HostCompleteMiddle = styled.div`
  ${flexAlign}
`;

const HostCompleteText = styled.p`
  width: 450px;
  margin-bottom: 30px;
  color: ${({ theme }) => theme.white};
  font-size: 45px;
  line-height: 55px;
  text-align: center;
`;

const HostCompleteSubText = styled.p`
  width: 450px;
  color: ${({ theme }) => theme.white};
  line-height: 25px;
  text-align: center;
`;

const HostCompleteBottom = styled.div`
  ${sectionMainBottomStyle};
  justify-content: flex-end;
`;

const BecomeHostButton = styled.button`
  ${nextButtonStyle};
  width: 105px;
  height: 50px;
`;

export default Complete;
