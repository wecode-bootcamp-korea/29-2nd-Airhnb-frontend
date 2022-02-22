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
import { useRecoilState } from 'recoil';
import { becomeHostData } from '../../hostData';

const Amenities = () => {
  const navigate = useNavigate();
  const goToMain = () => navigate('/');
  const goBack = () => navigate('/become-host/location');
  const goToAmenities = () => navigate('/become-host/ghost-type');
  const [trap, setTrap] = useRecoilState(becomeHostData);
  const [exit, setExit] = useRecoilState(becomeHostData);

  const checkedTrap = () => {
    if (exit.trap === 'False') setTrap({ ...trap, trap: 'True' });
    else setTrap({ ...trap, trap: 'False' });
  };

  const checkedExit = () => {
    if (exit.exit === 'False') setExit({ ...exit, exit: 'True' });
    else setExit({ ...exit, exit: 'False' });
  };

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
            <AmenitiesOption onClick={checkedTrap} test={exit.trap}>
              <FontAwesomeIcon icon={faFaceDizzy} className="fontAwesomeIcon" />
              함정
            </AmenitiesOption>
            <AmenitiesOption onClick={checkedExit} test={exit.exit}>
              <FontAwesomeIcon
                icon={faFaceGrimace}
                className="fontAwesomeIcon"
              />
              탈출구
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

const AmenitiesOption = styled.button`
  ${flexAlign}
  width: 200px;
  height: 200px;
  margin-bottom: 20px;
  border: ${props => (props.test === 'False' ? '1px' : '2px')} solid
    ${props => (props.test === 'False' ? 'lightGray' : 'black')};
  border-radius: 15px;
  color: ${props => (props.test === 'False' ? 'lightGray' : 'black')};
  text-align: center;
  background-color: ${props => (props.test === 'False' ? '#fff' : '#ddd')};
  &:hover {
    background-color: #efefef;
    border: 2px solid black;
    color: black;
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
