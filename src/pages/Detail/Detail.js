import React from 'react';
import styled from 'styled-components';
import DetailTop from './DetailTop/DetailTop';
import DetailContents from './DetailContents/DetailContents';
import DetailReviewMap from './DetailMap/DetailReviewMap';

function Detail() {
  return (
    <DetailPage>
      <DetailTop />
      <DetailContents />
      <DetailReviewMap />
      {/* TODO <DetailNav /> */}
    </DetailPage>
  );
}

const DetailPage = styled.div`
  margin: 80px 160px;
`;

export default Detail;
