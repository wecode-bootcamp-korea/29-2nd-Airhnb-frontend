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
import { becomeHostData } from '../../hostData';
import { useRecoilState } from 'recoil';

const HouseName = () => {
  const navigate = useNavigate();
  const goToMain = () => navigate('/');
  const goBack = () => navigate('/become-host/ghost-type');
  const goToDescription = () => navigate('/become-host/description');

  const [houseName, setHouseName] = useRecoilState(becomeHostData);

  const writeHouseName = e => {
    setHouseName({ ...houseName, name: e.target.value });
  };

  return (
    <Section>
      <HouseNameSection>
        <GoToMainAndLogo onClick={goToMain} src="/images/airhnb-white.svg" />
        <HouseNameText>숙소 이름을 만들어주세요.</HouseNameText>
      </HouseNameSection>
      <HouseNameMain>
        <HouseNameTop>
          <SaveOrOutButton onClick={goToMain}>저장 및 나가기</SaveOrOutButton>
        </HouseNameTop>
        <HouseNameMiddle>
          <WriteHouseTitle>
            <HouseTitleText>숙소 이름 정하기</HouseTitleText>
            <HouseTitleInput
              type="textarea"
              placeholder="ex) 유령을 만날 수 있는 매력 넘치는 흉가"
              onChange={writeHouseName}
            />
          </WriteHouseTitle>
        </HouseNameMiddle>
        <HouseNameBottom>
          <HostPreviousButton onClick={goBack}>뒤로</HostPreviousButton>
          <HostNextButton onClick={goToDescription}>다음</HostNextButton>
        </HouseNameBottom>
      </HouseNameMain>
    </Section>
  );
};

const WriteHouseTitle = styled.div`
  display: flex;
  flex-direction: column;
`;

const HouseTitleText = styled.p`
  margin-bottom: 15px;
  font-size: 20px;
`;

const HouseTitleInput = styled.input`
  width: 500px;
  height: 100px;
  padding: 20px;
  border: 1px solid ${({ theme }) => theme.lightGray};
  border-radius: 15px;
  margin-bottom: 10px;
  font-size: 20px;
`;

const Section = styled.section`
  ${sectionStyle}
`;

const HouseNameSection = styled.div`
  ${sectionLeftStyle}
`;

const HouseNameMain = styled.div`
  ${sectionMainStyle}
`;

const GoToMainAndLogo = styled.img`
  ${logoStyle}
`;

const HouseNameText = styled.p`
  ${sectionLeftTextStyle}
`;

const HouseNameTop = styled.div`
  ${sectionMainTopStyle}
`;

const SaveOrOutButton = styled.button`
  ${goToMainButtonStyle}
`;

const HouseNameMiddle = styled.div`
  ${flexAlign}
  justify-content: space-between;
  width: 75%;
`;

const HouseNameBottom = styled.div`
  ${sectionMainBottomStyle}
`;

const HostPreviousButton = styled.p`
  ${previousButtonStyle}
`;

const HostNextButton = styled.button`
  ${nextButtonStyle}
`;

export default HouseName;
