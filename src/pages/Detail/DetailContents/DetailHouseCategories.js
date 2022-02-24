import React from 'react';
import styled from 'styled-components';

function DetailHouseCategories({ houseType, maxGuest, exit, trap }) {
  return (
    <DetailHouseCategoriesStyle>
      <DetailHouseCategoriesTitle>흉가 포함사항</DetailHouseCategoriesTitle>
      <DetailHouseCategoriesBox>
        <DetailHouseCategory>
          <DetailHouseCategoryTitle>
            흉가 유형 - {houseType}
          </DetailHouseCategoryTitle>
        </DetailHouseCategory>
        <DetailHouseCategory>
          <DetailHouseCategoryTitle>
            최대 인원 - {maxGuest}명
          </DetailHouseCategoryTitle>
        </DetailHouseCategory>
        <DetailHouseCategory>
          <DetailHouseCategoryTitle>
            {exit ? '탈출로' : trap ? '함정' : '탈출로 & 함정 모두 없음'}
          </DetailHouseCategoryTitle>
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
  margin-top: 20px;
`;

const DetailHouseCategory = styled.div`
  display: flex;
  width: 45%;
  align-items: center;
  margin: 20px 4px;
`;

const DetailHouseCategoryTitle = styled.span`
  color: ${({ theme }) => theme.mainColor};
  font-size: 20px;
`;
export default DetailHouseCategories;
