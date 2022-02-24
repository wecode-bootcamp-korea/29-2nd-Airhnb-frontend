import React from 'react';
import styled from 'styled-components';
import FiveImgs from './FiveImgs';

function DetailImages({ imgList }) {
  const noLength = imgList.length !== 0;
  const fiveImgs = imgList.length === 4;

  return (
    <div>
      {noLength && (
        <DetailImagesStyle>
          <DetailBigImage src={imgList[0]} />
          {fiveImgs ? (
            <FiveImgs list={imgList} />
          ) : (
            <DetailBigImage src={imgList[1]} />
          )}
        </DetailImagesStyle>
      )}
    </div>
  );
}

const DetailImagesStyle = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  padding-top: 24px;
`;

const DetailBigImage = styled.img`
  width: 50%;
  height: 400px;
  padding: 5px;
  border-radius: 20px;
  object-fit: cover;
`;

export default DetailImages;
