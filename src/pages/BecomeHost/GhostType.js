import React, { useEffect, useState } from 'react';
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
import { END_POINT } from '../../config';

const GhostType = () => {
  const navigate = useNavigate();
  const goToMain = () => navigate('/');
  const goBack = () => navigate('/become-host/amenities');
  const goToDescription = () => navigate('/become-host/title');
  const [ghostType, setGhostType] = useRecoilState(becomeHostData);
  const [ghostTypes, setGhostTypes] = useState([]);

  useEffect(() => {
    fetch(`${END_POINT.ghost}`)
      .then(res => res.json())
      .then(res => setGhostTypes(res.message));
  }, []);

  const checkedGhostType = e => {
    setGhostType({ ...ghostType, ghost_id: e.target.value });
  };

  return (
    <Section>
      <GhostTypeSection>
        <GoToMainAndLogo onClick={goToMain} src="/images/airhnb-white.svg" />
        <GhostTypeText>호스트 유형을 알려주세요.</GhostTypeText>
      </GhostTypeSection>
      <GhostTypeMain>
        <GhostTypeTop>
          <SaveOrOutButton onClick={goToMain}>저장 및 나가기</SaveOrOutButton>
        </GhostTypeTop>
        <GhostTypeMiddle>
          {ghostTypes.map(ghostType => (
            <GhostTypes
              key={ghostType.ghost_id}
              value={ghostType.ghost_id}
              onClick={checkedGhostType}
            >
              {ghostType.ghost_name}
            </GhostTypes>
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

const GhostTypes = styled.button`
  width: 200px;
  height: 100px;
  margin: 10px 20px;
  border: 1px solid ${({ theme }) => theme.darkGray};
  border-radius: 15px;
  background-color: #fff;
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
