import React from 'react';
import styled from 'styled-components';

function DetailTitle({ name, houseType, city, country }) {
  return (
    <>
      <DetailTitleStyle>{name}</DetailTitleStyle>
      <DetailTitleSubContents>
        {houseType} · {city}, {country}
        <DetailTitleBtns>
          <DetailTitleBtn>공유</DetailTitleBtn>
          <DetailTitleBtn>저장</DetailTitleBtn>
        </DetailTitleBtns>
      </DetailTitleSubContents>
    </>
  );
}

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
const DetailTitleBtns = styled.div``;
const DetailTitleBtn = styled.button`
  all: unset;
  box-sizing: border-box;
  cursor: pointer;
  margin: 0 6px;
`;

export default DetailTitle;
