import React from 'react';
import styled from 'styled-components';
import ListContentContext from './ListContentContext/ListContentContext';
import ListContentMap from './ListContentMap/ListContentMap';

const ListContent = () => {
  return (
    <ListContentContainer>
      <ListContentContext />

      <ListContentMap />
    </ListContentContainer>
  );
};

export default ListContent;
const ListContentContainer = styled.div`
  position: relative;
  display: flex;
  width: 100%;
`;
