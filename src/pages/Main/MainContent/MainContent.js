import React, { useState } from 'react';
import styled from 'styled-components';
import ReactPlayer from 'react-player/lazy';
import { flexCenter } from '../../../styles/Mixin';

const PLAY_LIST = [
  { index: 1, url: '/video/scaryvideo1.mp4' },
  { index: 2, url: '/video/scaryvideo2.mp4' },
  { index: 3, url: '/video/scaryvideo3.mp4' },
];

const MainContent = () => {
  const [playIndex, setPlayIndex] = useState(0);

  const handleNextVideo = (video, playIndex) => {
    if (playIndex === video.length - 1) {
      setPlayIndex(0);
    } else {
      setPlayIndex(playIndex + 1);
    }
  };

  if (PLAY_LIST === null) return <p>Loading...</p>;
  return (
    <MainContentContainer>
      <ImageContainer>
        <ReactPlayer
          className="react-player"
          url={PLAY_LIST[playIndex].url}
          width="100%" // 플레이어 크기 (가로)
          height="100%" // 플레이어 크기 (세로)
          playing={true} // 자동 재생 on
          muted={true} // 자동 재생 on
          controls={false} // 플레이어 컨트롤 노출 여부
          light={false} // 플레이어 모드
          pip={true} // pip 모드 설정 여부
          poster="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg" // 플레이어 초기 포스터 사진
          onEnded={() => {
            handleNextVideo(PLAY_LIST, playIndex);
          }}
        />
      </ImageContainer>
      <ContentContaier>
        <span>
          <p>AIR hnb가</p>
          <p>무서운 장소를 찾아드릴게요!</p>
        </span>
        <button>유연한 검색</button>
      </ContentContaier>
    </MainContentContainer>
  );
};

const MainContentContainer = styled.section`
  height: 90vh;
  padding: 10vh 0vw 0px 0vw;
  color: ${({ theme }) => theme.white};
  background-color: ${({ theme }) => theme.black};
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ContentContaier = styled.div`
  position: relative;

  span {
    position: absolute;
    /*display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; */
    ${flexCenter}
    top: -40vh;
    left: 35vw;
    font-size: 40px;
    color: ${({ theme }) => theme.white};

    p {
      margin-bottom: 30px;
    }
  }

  button {
    position: absolute;
    top: -20vh;
    left: 43vw;
    padding: 20px 40px;

    font-size: 20px;
    background-color: ${({ theme }) => theme.white};
    border: none;
    border-radius: 40px;
    cursor: pointer;
  }
`;

export default MainContent;
