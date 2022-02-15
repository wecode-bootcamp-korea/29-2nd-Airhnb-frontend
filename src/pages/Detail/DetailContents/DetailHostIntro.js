import React from 'react';
import styled from 'styled-components';

function DetailHostIntro() {
  return (
    <DetailHostIntroStyle>
      <div>
        <DetailHostIntroTitle>
          {/* TODO 숙소유형 */}
          좀비님이 호스팅하는 폐가 전체
        </DetailHostIntroTitle>
        <DetailHostIntroSub>
          {/* TODO 인원수, 유령유형 */}
          최대 인원 2명침실 1개침대 1개욕실 1개
        </DetailHostIntroSub>
      </div>
      <DetailHostImg
        alt=""
        src="https://images.pexels.com/photos/3413812/pexels-photo-3413812.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
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
