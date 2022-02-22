import React, { Suspense } from 'react';
import styled from 'styled-components';
import ListTop from './ListTop/ListTop';
import ListContent from './ListContent/ListContent';

const ListContainer = styled.div``;

const List = () => {
  return (
    <ListContainer>
      <Suspense fallback={<h1>로딩중입니다</h1>}>
        <ListTop />
        <ListContent />
      </Suspense>
    </ListContainer>
  );
};

export default List;
