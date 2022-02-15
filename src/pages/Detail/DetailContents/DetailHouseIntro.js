import React from 'react';
import styled from 'styled-components';

function DetailHouseIntro() {
  return (
    <DetailHouseIntroStyle>
      <DetailHouseIntroTitle>숙소 안내</DetailHouseIntroTitle>
      <DetailHouseIntroSub>
        *국내 방송 및 넷플릭스 등을 지원하는 빔프로젝터, 오븐토스터기, 전자렌지,
        전기드립포트 및 각종 집기류를 제공합니다.
        <br />
        *필로티 주차공간과 기계식 주차를 이용합니다.
        <br />
        *수건, 어메니티 등의 개인 위생 관련 용품은 구비되어 있지 않습니다.
        <br />
        (길건너에 마트와 다이소가 있습니다.)
        {/* TODO 
        추가구현
        더보기 버튼 */}
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

const DetailHouseIntroSub = styled.span`
  color: ${({ theme }) => theme.mainColor};
  font-size: 16px;
  line-height: 24px;
`;

export default DetailHouseIntro;
