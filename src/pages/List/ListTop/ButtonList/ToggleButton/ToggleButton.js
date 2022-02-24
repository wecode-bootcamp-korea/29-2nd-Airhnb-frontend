import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { queryParam, setQueryParam } from '../../../../../queryparam';
import { useRecoilState, useRecoilValue } from 'recoil';
import { useNavigate } from 'react-router-dom';

const ToggleButton = ({ name }) => {
  const [isValid, setIsValid] = useState(false);
  const totalQuery = useRecoilValue(setQueryParam);
  const [param, setParam] = useRecoilState(queryParam);
  const navigate = useNavigate();
  const checkedButton = () => {
    setIsValid(prev => !prev);
    if (name === '트랩') {
      if (param.trap === false) {
        setParam({ ...param, trap: true });
      } else {
        setParam({ ...param, trap: false });
      }
    }

    if (name === '탈출구') {
      if (param.trap === false) {
        setParam({ ...param, exit: !param.exit });
      } else {
        setParam({ ...param, exit: !param.exit });
      }
    }
  };

  useEffect(() => {
    navigate(`/houses${totalQuery}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [param.exit, param.trap]);

  return (
    <ToggleButtonContainer>
      <SelectButton isValid={isValid} onClick={() => checkedButton()}>
        {name}
      </SelectButton>
    </ToggleButtonContainer>
  );
};

export default ToggleButton;

const ToggleButtonContainer = styled.div`
  position: relative;
`;

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
