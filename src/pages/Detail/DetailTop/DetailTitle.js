import React from 'react';
import styled from 'styled-components';

function DetailTitle() {
  return (
    <DetailTitleBox>
      <DetailTitleStyle>
        {/* 숙소 이름 */}
        유령이 가득한 집
      </DetailTitleStyle>
      <DetailTitleSubContents>
        {/* 숙소타입, 위치 받기 */}
        폐가 · 제주도, 한국
        <DetailTitleSubContentsBtns>
          <DetailTitleBtn>공유</DetailTitleBtn>
          <DetailTitleBtn>저장</DetailTitleBtn>
        </DetailTitleSubContentsBtns>
      </DetailTitleSubContents>
    </DetailTitleBox>
  );
}

const DetailTitleBox = styled.div``;
const DetailTitleStyle = styled.h1`
  font-size: ${({ theme }) => theme.big};
  color: ${({ theme }) => theme.mainColor};
  font-weight: 600;
`;

const DetailTitleSubContents = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  color: ${({ theme }) => theme.mainColor};
  font-size: 16px;
`;

const DetailTitleBtn = styled.button`
  all: unset;
  box-sizing: border-box;
  cursor: pointer;
  margin: 0 6px;
`;

const DetailTitleSubContentsBtns = styled.div``;

export default DetailTitle;
