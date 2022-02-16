import React, { useState } from 'react';
import styled from 'styled-components';

const ToggleButton = ({ name }) => {
  const [isValid, setIsValid] = useState(false);

  const checkedButton = async () => {
    setIsValid(prev => !prev);
  };
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
