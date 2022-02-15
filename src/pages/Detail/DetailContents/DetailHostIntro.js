import React from 'react';
import styled from 'styled-components';

function DetailHostIntro({ houseType, maxGuest }) {
  return (
    <DetailHostIntroStyle>
      <div>
        <DetailHostIntroTitle>
          좀비님이 호스팅하는 {houseType} 전체
        </DetailHostIntroTitle>
        <DetailHostIntroSub>최대 인원 {maxGuest}명</DetailHostIntroSub>
      </div>
      <DetailHostImg
        alt="hostImg"
        src="https://images.pexels.com/photos/970517/pexels-photo-970517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      />
    </DetailHostIntroStyle>
  );
}

const DetailHostIntroStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 48px 0 24px;
`;

const DetailHostIntroTitle = styled.h2`
  margin-bottom: 8px;
  color: ${({ theme }) => theme.mainColor};
  font-size: 28px;
  font-weight: 400;
`;

const DetailHostIntroSub = styled.span`
  font-size: 16px;
  color: ${({ theme }) => theme.mainColor};
`;

const DetailHostImg = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
`;

export default DetailHostIntro;
