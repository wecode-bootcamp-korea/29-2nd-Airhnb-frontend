import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { becomeHostData } from '../../hostData';
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

const Description = () => {
  const navigate = useNavigate();
  const goToMain = () => navigate('/');
  const goBack = () => navigate('/become-host/title');
  const goToDescription = () => navigate('/become-host/photos');

  const [houseDescription, setHouseDescription] =
    useRecoilState(becomeHostData);

  const writeHouseDescription = e => {
    setHouseDescription({ ...houseDescription, description: e.target.value });
  };

  return (
    <Section>
      <DescriptionSection>
        <GoToMainAndLogo onClick={goToMain} src="/images/airhnb-white.svg" />
        <DescriptionText>숙소에 대해 설명해주세요.</DescriptionText>
      </DescriptionSection>
      <DescriptionMain>
        <DescriptionTop>
          <SaveOrOutButton onClick={goToMain}>저장 및 나가기</SaveOrOutButton>
        </DescriptionTop>
        <DescriptionMiddle>
          <DescriptionTitle>
            <DescriptionTitleText>숙소 설명 작성하기</DescriptionTitleText>
            <DescriptionTitleInput
              type="textarea"
              onChange={writeHouseDescription}
            />
          </DescriptionTitle>
        </DescriptionMiddle>
        <DescriptionBottom>
          <HostPreviousButton onClick={goBack}>뒤로</HostPreviousButton>
          <HostNextButton onClick={goToDescription}>다음</HostNextButton>
        </DescriptionBottom>
      </DescriptionMain>
    </Section>
  );
};

const DescriptionTitle = styled.div`
  display: flex;
  flex-direction: column;
`;

const DescriptionTitleText = styled.p`
  margin-bottom: 15px;
  font-size: 20px;
`;

const DescriptionTitleInput = styled.input`
  width: 500px;
  height: 100px;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.lightGray};
  border-radius: 15px;
  margin-bottom: 10px;
  font-size: 20px;
`;

const Section = styled.section`
  ${sectionStyle}
`;

const DescriptionSection = styled.div`
  ${sectionLeftStyle}
`;

const DescriptionMain = styled.div`
  ${sectionMainStyle}
`;

const GoToMainAndLogo = styled.img`
  ${logoStyle}
`;

const DescriptionText = styled.p`
  ${sectionLeftTextStyle}
`;

const DescriptionTop = styled.div`
  ${sectionMainTopStyle}
`;

const SaveOrOutButton = styled.button`
  ${goToMainButtonStyle}
`;

const DescriptionMiddle = styled.div`
  ${flexAlign}
  justify-content: space-between;
  width: 75%;
`;

const DescriptionBottom = styled.div`
  ${sectionMainBottomStyle}
`;

const HostPreviousButton = styled.p`
  ${previousButtonStyle}
`;

const HostNextButton = styled.button`
  ${nextButtonStyle}
`;

export default Description;
