import React from 'react';
import styled from 'styled-components';

function FiveImgs({ list }) {
  return (
    <DetailSmallImageBox>
      {list.map((img, index) => {
        return <DetailSmallImage key={index} alt="smallImages" src={img} />;
      })}
    </DetailSmallImageBox>
  );
}

const DetailSmallImageBox = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const DetailSmallImage = styled.img`
  width: 50%;
  padding: 5px;
  height: 200px;
  border-radius: 20px;
  object-fit: cover;
`;

export default FiveImgs;
