import React, { useEffect, useState } from 'react';
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
  flexAlign,
} from '../../styles/becomeHostStyle';
import { useRecoilState } from 'recoil';
import { becomeHostData } from '../../hostData';
import { END_POINT } from '../../config';

const PropertyType = () => {
  const navigate = useNavigate();
  const goToMain = () => navigate('/');
  const goBack = () => navigate('/become-host/floor-plan');
  const goToLocation = () => navigate('/become-host/location');
  const [property, setProperty] = useRecoilState(becomeHostData);
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetch(`${END_POINT.house_type}`)
      .then(res => res.json())
      .then(res => setProperties(res.message));
  }, []);

  const checkedProperty = (e, id) => {
    setProperty({ ...property, house_type_id: e.target.value });
    const checkedItem = properties.map(property => {
      if (property.house_type_id === id) {
        return { ...property, is_checked: !property.is_checked };
      } else return { ...property, is_checked: false };
    });
    setProperties(checkedItem);
  };

  return (
    <Section>
      <PropertyTypeSection>
        <GoToMainAndLogo onClick={goToMain} src="/images/airhnb-white.svg" />
        <PropertyTypeText>호스팅할 숙소 유형을 알려주세요.</PropertyTypeText>
      </PropertyTypeSection>
      <PropertyTypeMain>
        <PropertyTypeTop>
          <SaveOrOutButton onClick={goToMain}>저장 및 나가기</SaveOrOutButton>
        </PropertyTypeTop>
        <PropertyTypeMiddle>
          {properties.map(property => (
            <PropertyTypeComponent
              key={property.id}
              property={property}
              checkedProperty={checkedProperty}
            />
          ))}
        </PropertyTypeMiddle>
        <PropertyTypeBottom>
          <HostPreviousButton onClick={goBack}>뒤로</HostPreviousButton>
          <HostNextButton onClick={goToLocation}>다음</HostNextButton>
        </PropertyTypeBottom>
      </PropertyTypeMain>
    </Section>
  );
};

const PropertyTypeComponent = ({ property, checkedProperty }) => {
  const { house_type_id, house_type_name, is_checked } = property;

  return (
    <PropertyTypeStyle
      key={house_type_id}
      value={house_type_id}
      onClick={e => checkedProperty(e, house_type_id)}
      isChecked={is_checked}
    >
      {house_type_name}
    </PropertyTypeStyle>
  );
};

const PropertyTypeStyle = styled.button`
  width: 200px;
  height: 100px;
  margin: 10px 20px;
  border: ${props => (props.isChecked === 'False' ? '1px' : '2px')} solid
    ${props => (props.isChecked ? 'black' : 'lightGray')};
  border-radius: 15px;
  background-color: ${props => (props.isChecked ? '#ddd' : 'white')};
  text-align: center;
  font-size: 20px;
  line-height: 100px;
  &:hover {
    border: 2px solid black;
  }
`;

const Section = styled.section`
  ${sectionStyle}
`;

const PropertyTypeSection = styled.div`
  ${sectionLeftStyle}
`;

const PropertyTypeMain = styled.div`
  ${sectionMainStyle}
  overflow: auto;
`;

const GoToMainAndLogo = styled.img`
  ${logoStyle}
`;

const PropertyTypeText = styled.p`
  ${sectionLeftTextStyle}
  width: 450px;
`;

const PropertyTypeTop = styled.div`
  ${sectionMainTopStyle}
`;

const SaveOrOutButton = styled.button`
  ${goToMainButtonStyle}
`;

const PropertyTypeMiddle = styled.div`
  ${flexAlign}
  flex-wrap: wrap;
  flex-direction: row;
  width: 500px;
`;

const PropertyTypeBottom = styled.div`
  ${sectionMainBottomStyle}
`;

const HostPreviousButton = styled.p`
  ${previousButtonStyle}
`;

const HostNextButton = styled.button`
  ${nextButtonStyle}
`;

export default PropertyType;
