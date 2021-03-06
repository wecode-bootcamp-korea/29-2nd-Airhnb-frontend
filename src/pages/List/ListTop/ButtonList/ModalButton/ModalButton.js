import React, { useRef } from 'react';
import styled from 'styled-components';
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ListButtonModal from './ListButtonModal/ListButtonModal';
import { useState } from 'react/cjs/react.development';
import { useNavigate } from 'react-router-dom';
import { queryParam, setQueryParam } from '../../../../../queryparam';
import { useRecoilState, useRecoilValue } from 'recoil';

const ModalButton = ({ item, index }) => {
  const [isValid, setIsValid] = useState(false);
  const navigate = useNavigate();
  const ref = useRef();
  const totalQuery = useRecoilValue(setQueryParam);
  const [param, setParam] = useRecoilState(queryParam);
  const validModal = () => {
    setIsValid(prev => !prev);
  };

  const closeModal = async (query, name, point) => {
    if (point === 'delete') {
      setParam({
        ...param,
        [name]: [],
      });
    }
    setIsValid(false);
    navigate(`/houses${totalQuery}`);
  };

  const englishName = Object.keys(item)[0];
  let name;
  const nameList = Object.keys(ENGLISH_TO_KOREAN);

  for (let names of nameList) {
    if (englishName === names) name = ENGLISH_TO_KOREAN[names];
  }

  const type = item && item[englishName];

  return (
    <ModalButtonContainer key={item.id}>
      <SelectButton
        key={item.id}
        onClick={() => validModal()}
        isValid={isValid}
      >
        {name} <FontAwesomeIcon icon={isValid ? faArrowUp : faArrowDown} />
      </SelectButton>
      {isValid && (
        <ListButtonModal
          type={type}
          name={englishName}
          closeModal={closeModal}
          ref={ref}
        />
      )}
    </ModalButtonContainer>
  );
};

export default ModalButton;

const ENGLISH_TO_KOREAN = {
  house_type: '집의 유형',
  ghost: '유령',
  country: '나라',
  city: '도시',
};

const SelectButton = styled.button`
  padding: 12px 20px;
  margin-right: 20px;
  background-color: transparent;
  border-radius: 50px;
  border: ${props =>
    props.isValid
      ? `2px solid ${props.theme.mainColor}`
      : `0.5px solid ${props.theme.lightGray}`};

  font-size: 12px;
  font-weight: 350;

  cursor: pointer;
`;
const ModalButtonContainer = styled.div`
  position: relative;
`;
