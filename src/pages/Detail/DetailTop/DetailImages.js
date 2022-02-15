import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import FiveImgs from './FiveImgs';

// ADD
// const DetailImgAllBtn = styled.div`
//   position: absolute;
//   z-index: 10;
//   right: 40px;
//   bottom: 30px;
// `;
function DetailImages() {
  const [imgs, setImgs] = useState([]);
  useEffect(() => {
    fetch('/data/detailImages.json')
      .then(res => res.json())
      .then(res => {
        setImgs(res);
      });
  }, []);

  const noLength = imgs.length !== 0;
  const fiveImgs = imgs.length === 4;

  return (
    <div>
      {noLength && (
        <DetailImagesStyle>
          <DetailBigImage alt={imgs[0].alt} src={imgs[0].src} />
          {fiveImgs ? (
            <FiveImgs list={imgs} />
          ) : (
            <DetailBigImage alt={imgs[1].alt} src={imgs[1].src} />
          )}
        </DetailImagesStyle>
      )}
      {/* ADD
      <DetailImgAllBtn>
        <button>사진 모두 보기</button>
      </DetailImgAllBtn> */}
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
