import React from 'react';
import styled from 'styled-components';
import ButtonList from './ButtonList/ButtonList';

const ListTop = () => {
  return (
    <ListTopContainer>
      <ButtonList />
    </ListTopContainer>
  );
};

export default ListTop;

const ListTopContainer = styled.div`
  height: 8vh;
  padding: 10px 20px;
`;
