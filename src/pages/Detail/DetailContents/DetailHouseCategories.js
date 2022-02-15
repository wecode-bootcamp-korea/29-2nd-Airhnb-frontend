import React from 'react';
import styled from 'styled-components';

function DetailHouseCategories() {
  return (
    <DetailHouseCategoriesStyle>
      {/* 
      FIXME
      데이터 받아오면 map으로 구현 예정 */}
      <DetailHouseCategoriesTitle>숙소 포함사항</DetailHouseCategoriesTitle>
      <DetailHouseCategoriesBox>
        {/* 
        FIXME
        데이터 받아올 곳  - 숙소 정보*/}
        <DetailHouseCategory>
          <DetailHouseCategoryIcon>icon</DetailHouseCategoryIcon>
          <DetailHouseCategoryTitle>숙소유형</DetailHouseCategoryTitle>
        </DetailHouseCategory>
        <DetailHouseCategory>
          <DetailHouseCategoryIcon>icon</DetailHouseCategoryIcon>
          <DetailHouseCategoryTitle>귀신유형</DetailHouseCategoryTitle>
        </DetailHouseCategory>
        <DetailHouseCategory>
          <DetailHouseCategoryIcon>icon</DetailHouseCategoryIcon>
          <DetailHouseCategoryTitle>탈주로 유/무</DetailHouseCategoryTitle>
        </DetailHouseCategory>
        <DetailHouseCategory>
          <DetailHouseCategoryIcon>icon</DetailHouseCategoryIcon>
          <DetailHouseCategoryTitle>함정 유/무</DetailHouseCategoryTitle>
        </DetailHouseCategory>
      </DetailHouseCategoriesBox>
    </DetailHouseCategoriesStyle>
  );
}

const DetailHouseCategoriesStyle = styled.div`
  padding: 48px 0 24px;
  border-top: 1px solid ${({ theme }) => theme.lightGray};
`;

const DetailHouseCategoriesTitle = styled.h2`
  margin-bottom: 8px;
  color: ${({ theme }) => theme.mainColor};
  font-size: 28px;
  font-weight: 400;
`;

const DetailHouseCategoriesBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const DetailHouseCategory = styled.div`
  display: flex;
  align-items: center;
  width: 45%;
  margin: 4px 4px;
`;

const DetailHouseCategoryIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  margin-right: 16px;
  background-color: pink;
  border-radius: 50%;
`;

const DetailHouseCategoryTitle = styled.span`
  color: ${({ theme }) => theme.mainColor};
  font-size: 16px;
`;
export default DetailHouseCategories;
