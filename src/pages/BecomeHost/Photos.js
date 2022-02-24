import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import {
  sectionStyle,
  logoStyle,
  sectionLeftStyle,
  sectionMainStyle,
  goToMainButtonStyle,
  sectionMainBottomStyle,
  nextButtonStyle,
  previousButtonStyle,
  sectionMainTopStyle,
  sectionLeftTextStyle,
  flexAlign,
} from '../../styles/becomeHostStyle';
import { useRecoilValue } from 'recoil';
import { becomeHostData } from '../../hostData';
import { END_POINT } from '../../config';

const Photos = () => {
  const navigate = useNavigate();
  const goToMain = () => navigate('/');
  const goBack = () => navigate('/become-host/description');

  const [images, setImages] = useState([]);
  const [previews, setPreviews] = useState([]);

  const uploadImages = e => {
    let imagesArray = Object.entries(e.target.files).map(e =>
      URL.createObjectURL(e[1])
    );
    setPreviews([...images, ...imagesArray]);
    const imagesArr = Array.from(e.target.files);
    setImages(imagesArr);
  };

  const item = useRecoilValue(becomeHostData);

  const onDataSubmit = () => {
    const formData = new FormData();
    images.forEach(image => {
      formData.append('house_images', image);
      formData.append('house_type_id', item.house_type_id);
      formData.append('latitude', item.latitude);
      formData.append('longitude', item.longitude);
      formData.append('country', item.country);
      formData.append('city', item.city);
      formData.append('max_guest', item.max_guest);
      formData.append('trap', item.trap);
      formData.append('exit', item.exit);
      formData.append('ghost_id', item.ghost_id);
      formData.append('name', item.name);
      formData.append('description', item.description);
    });
    fetch(`${END_POINT.host}`, {
      method: 'POST',
      headers: {
        Authorization: sessionStorage.getItem('JWT'),
      },
      body: formData,
    })
      .then(res => res.json())
      .then(navigate('/become-host/preview'))
      .catch(error => {
        throw new Error(error);
      });
  };

  const deleteFile = e => {
    const deleteImage = previews.filter((image, idx) => idx !== e);
    setPreviews(deleteImage);
  };

  return (
    <Section>
      <PhotosSection>
        <GoToMainAndLogo onClick={goToMain} src="/images/airhnb-white.svg" />
        <AmenitiesText>이제 숙소 사진을 올릴 차례입니다.</AmenitiesText>
      </PhotosSection>
      <PhotosMain>
        <PhotosTop>
          <SaveOrOutButton onClick={goToMain}>저장 및 나가기</SaveOrOutButton>
        </PhotosTop>

        <PhotosMiddle>
          <div>
            {previews.length > 0 &&
              previews.map((image, idx) => {
                return (
                  <PreviewImage key={image}>
                    <img src={image} alt="미리보기" />
                    <button onClick={() => deleteFile(idx)}>삭제</button>
                  </PreviewImage>
                );
              })}
          </div>
          <form encType="multipart/form-data" method="POST">
            <input
              type="file"
              multiple
              accept="images/*"
              onChange={uploadImages}
            />
          </form>
        </PhotosMiddle>
        <AmenitiesBottom>
          <HostPreviousButton onClick={goBack}>뒤로</HostPreviousButton>
          <HostNextButton onClick={onDataSubmit}>다음</HostNextButton>
        </AmenitiesBottom>
      </PhotosMain>
    </Section>
  );
};

const PreviewImage = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 400px;
    height: 200px;
    margin: 0 10px 20px 0;
    border: 1px solid gray;
    border-radius: 10px;
    object-fit: cover;
  }

  button {
    width: 50px;
  }
`;

const Section = styled.section`
  ${sectionStyle}
`;

const PhotosSection = styled.div`
  ${sectionLeftStyle}
`;

const PhotosMain = styled.div`
  ${sectionMainStyle}
`;

const GoToMainAndLogo = styled.img`
  ${logoStyle}
`;

const AmenitiesText = styled.p`
  ${sectionLeftTextStyle}
  width: 450px;
`;

const PhotosTop = styled.div`
  ${sectionMainTopStyle}
`;

const SaveOrOutButton = styled.button`
  ${goToMainButtonStyle}
`;

const PhotosMiddle = styled.div`
  ${flexAlign}
  justify-content: space-between;
  width: 75%;
`;

const AmenitiesBottom = styled.div`
  ${sectionMainBottomStyle}
`;

const HostPreviousButton = styled.p`
  ${previousButtonStyle}
`;

const HostNextButton = styled.button`
  ${nextButtonStyle}
`;

export default Photos;
