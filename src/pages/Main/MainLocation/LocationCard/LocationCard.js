import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const LocationCard = () => {
  const [cardData, setCardData] = useState('');

  useEffect(() => {
    fetch('/data/CardList.json')
      .then(res => res.json())
      .then(data => setCardData(data.data));
  }, []);

  console.log('cardData');
  console.log(cardData);
  return (
    <LocationCardContainer>
      {cardData &&
        cardData.map(item => (
          <LocationCardBox key={item.id}>
            <ImageBox>
              <img alt="카드 이미지" src={item.src} />
            </ImageBox>
            <ContentBox>{item.name}</ContentBox>
          </LocationCardBox>
        ))}
    </LocationCardContainer>
  );
};

const LocationCardContainer = styled.section`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
`;

const LocationCardBox = styled.div`
  border-radius: 20px;
  cursor: pointer;

  &:nth-child(1) {
    background-color: #7c0200;
  }

  &:nth-child(2) {
    background-color: #03342e;
  }

  &:nth-child(3) {
    background-color: #03211c;
  }

  &:nth-child(4) {
    background-color: #7d9267;
  }
`;

const ImageBox = styled.div`
  width: 20vw;
  height: 25vh;
  border-radius: 20px;

  img {
    width: 100%;
    height: 100%;
    border-radius: 20px 20px 0px 0px;
    object-fit: cover;
  }
`;

const ContentBox = styled.div`
  width: 20vw;
  height: 25vh;
  padding: 40px 20px;

  color: ${({ theme }) => theme.white};
  font-size: 35px;
`;

export default LocationCard;
