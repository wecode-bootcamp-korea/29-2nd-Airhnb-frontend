import React, { useEffect, useState } from 'react';
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

const Photos = () => {
  const navigate = useNavigate();
  const goToMain = () => navigate('/');
  const goBack = () => navigate('/become-host/amenities');
  const goToTItle = () => navigate('/become-host/ghost-type');

  // Preview
  const [images, setImages] = useState([]);
  const [previews, setPreviews] = useState([]);

  const uploadImages = e => {
    let imagesArray = Object.entries(e.target.files).map(e =>
      URL.createObjectURL(e[1])
    );
    setPreviews([...images, ...imagesArray]);

    console.log(e.target.files);
    console.log(e.target.files[0]);
    const imagesArr = Array.from(e.target.files);
    setImages(imagesArr);
  };

  const onSubmit = e => {
    e.preventDefault();

    const formData = new FormData();
    images.map(image => {
      formData.append('house_images', image);
    });
    for (const keyValue of formData) console.log(keyValue);
    fetch('http://10.58.7.44:8000/houses/being-the-host', {
      method: 'post',
      body: formData,
    })
      .then(res => res.json())
      .then(res => console.log(res))
      .catch(err => {
        console.error(err);
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
                  <div key={image}>
                    <img src={image} alt="미리보기" />
                    <button onClick={() => deleteFile(idx)}>Delete</button>
                  </div>
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
            <button onClick={onSubmit}>submit</button>
          </form>
        </PhotosMiddle>
        <AmenitiesBottom>
          <HostPreviousButton onClick={goBack}>뒤로</HostPreviousButton>
          <HostNextButton onClick={goToTItle}>다음</HostNextButton>
        </AmenitiesBottom>
      </PhotosMain>
    </Section>
  );
};

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
