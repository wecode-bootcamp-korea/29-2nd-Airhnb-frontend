import React from 'react';
import styled from 'styled-components';

function DetailReviews() {
  return (
    <DetailReviewsStyle>
      <DetailReviewsTitle>후기 11개</DetailReviewsTitle>
      <DetailReviewsBox>
        <DetailReview>
          <DetailReviewUser>
            <DetailReviewUserImg>이미지</DetailReviewUserImg>
            <DetailReviewUserInfo>
              <DetailReviewUserName>닉네임</DetailReviewUserName>
              <DetailReviewDate>2022년 2월</DetailReviewDate>
            </DetailReviewUserInfo>
          </DetailReviewUser>
          {/* FIXME 데이터 받으면 map()으로 구현 */}
          <DetailReviewContent>
            도망가자 어디든 가야 할 것만 같아 넌 금방이라도 울 것 같아 괜찮아
            우리 가자 걱정은 잠시 내려놓고 대신 가볍게 짐을 챙기자 실컷 웃고
            다시 돌아오자 거기서는 우리 아무 생각말자
          </DetailReviewContent>
        </DetailReview>
        <DetailReview>
          <DetailReviewUser>
            <DetailReviewUserImg>이미지</DetailReviewUserImg>
            <DetailReviewUserInfo>
              <DetailReviewUserName>닉네임</DetailReviewUserName>
              <DetailReviewDate>2022년 2월</DetailReviewDate>
            </DetailReviewUserInfo>
          </DetailReviewUser>
          <DetailReviewContent>
            도망가자 어디든 가야 할 것만 같아 넌 금방이라도 울 것 같아 괜찮아
            우리 가자 걱정은 잠시 내려놓고 대신 가볍게 짐을 챙기자 실컷 웃고
            다시 돌아오자 거기서는 우리 아무 생각말자
          </DetailReviewContent>
        </DetailReview>
        <DetailReview>
          <DetailReviewUser>
            <DetailReviewUserImg>이미지</DetailReviewUserImg>
            <DetailReviewUserInfo>
              <DetailReviewUserName>닉네임</DetailReviewUserName>
              <DetailReviewDate>2022년 2월</DetailReviewDate>
            </DetailReviewUserInfo>
          </DetailReviewUser>
          <DetailReviewContent>
            도망가자 어디든 가야 할 것만 같아 넌 금방이라도 울 것 같아 괜찮아
            우리 가자 걱정은 잠시 내려놓고 대신 가볍게 짐을 챙기자 실컷 웃고
            다시 돌아오자 거기서는 우리 아무 생각말자
          </DetailReviewContent>
        </DetailReview>
      </DetailReviewsBox>
    </DetailReviewsStyle>
  );
}

const DetailReviewsStyle = styled.div`
  padding: 48px 0 24px;
  border-top: 1px solid ${({ theme }) => theme.lightGray};
`;

const DetailReviewsTitle = styled.h2`
  padding-bottom: 24px;
  color: ${({ theme }) => theme.mainColor};
  font-size: 28px;
  font-weight: 400;
`;

const DetailReviewsBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const DetailReview = styled.div`
  width: 48%;
  margin: 4px 4px;
`;

const DetailReviewUser = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
`;

const DetailReviewDate = styled.div``;
const DetailReviewContent = styled.div``;
const DetailReviewUserImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  margin-right: 16px;
  background-color: pink;
  border-radius: 50%;
`;

const DetailReviewUserInfo = styled.div``;
const DetailReviewUserName = styled.span`
  font-size: 16px;
  color: ${({ theme }) => theme.mainColor};
`;

export default DetailReviews;
