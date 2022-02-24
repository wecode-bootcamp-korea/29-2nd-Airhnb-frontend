import React from 'react';
import styled from 'styled-components';

function DetailHouseIntro({ description }) {
  const descriptionText = description;

  return (
    <DetailHouseIntroStyle>
      <DetailHouseIntroTitle>숙소 안내</DetailHouseIntroTitle>
      <DetailHouseIntroSub>
        {descriptionText.split('\\n').map(line => {
          return (
            <>
              {line}
              <br />
            </>
          );
        })}
      </DetailHouseIntroSub>
    </DetailHouseIntroStyle>
  );
}

const DetailHouseIntroStyle = styled.div`
  padding: 48px 0 24px;
  border-top: 1px solid ${({ theme }) => theme.lightGray};
`;

const DetailHouseIntroTitle = styled.h2`
  margin-bottom: 8px;
  color: ${({ theme }) => theme.mainColor};
  font-size: 28px;
  font-weight: 400;
`;

const DetailHouseIntroSub = styled.p`
  color: ${({ theme }) => theme.mainColor};
  font-size: 16px;
  line-height: 24px;
`;

export default DetailHouseIntro;
