import React from 'react';
import { useEffect } from 'react/cjs/react.development';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ContentPaging from './ContentPaging/ContentPaging';
import axios from 'axios';
import { END_POINT } from '../../../../config';
import styled from 'styled-components';
import { itemListState } from '../../../../itemList';
import { useRecoilState } from 'recoil';
import { useLocation, useNavigate } from 'react-router-dom';

const ListContentContext = () => {
  const [datalist, setDataList] = useRecoilState(itemListState);
  const location = useLocation().search;
  const navigate = useNavigate();

  const fetchList = async () => {
    const fetch = await axios.get(`${END_POINT.itemList}${location}`);
    const datalist = await fetch.data;
    setDataList(datalist);
  };

  useEffect(() => {
    fetchList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  useEffect(() => {}, [datalist]);

  const goDetail = id => {
    navigate(`/houses/${id}`);
  };

  return (
    <ListContentContextContainer>
      <ItemBox>
        <p>인천에 위치한 300개 이상의 숙소</p>
        <p>
          여행 날짜와 게스트 인원수를 입력하면 1박당 총 요금을 확인할 수
          있습니다.{' '}
        </p>
        <p>
          예약하기 전에 코로나19 관련 여행 제한 사항을 확인하세요.
          <span> 자세히 알아보기</span>
        </p>
      </ItemBox>
      {datalist.results &&
        datalist.results.map(item => (
          <ItemBox key={item.house_id}>
            <ImageBox>
              <StyledSlider {...settings}>
                {item.house_image &&
                  item.house_image.map((img, index) => (
                    <div key={index}>
                      <img
                        alt="이미지 대체"
                        src={img}
                        onClick={() => goDetail(item.house_id)}
                      />
                    </div>
                  ))}
                {/* <div>
                  <img alt="이미지 대체" src={item.image[0]} key={item.lat} />
                </div> */}
              </StyledSlider>
            </ImageBox>
            <ContentContext>
              <span onClick={() => goDetail(item.house_id)}>
                {item.country},&nbsp;{item.city}&nbsp;내에 위치
              </span>
              <p onClick={() => goDetail(item.house_id)}>{item.name}</p>
              <hr />
              <span onClick={() => goDetail(item.house_id)}>
                {item.exit ? <p>{item.exit}가 존재합니다 </p> : <p>탈출구 X</p>}
                {item.ghost ? (
                  <p>moster : {item.ghost} </p>
                ) : (
                  <p>monsters don't exist</p>
                )}
              </span>
              <p />
            </ContentContext>
          </ItemBox>
        ))}

      <ContentPaging />
      <span>
        전체 요금을 보려면 날짜를 입력하세요. 추가 요금이 적용되고 세금이 추가될
        수 있습니다.
      </span>
    </ListContentContextContainer>
  );
};

export default React.memo(ListContentContext);

const settings = {
  dots: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 10000,
};

const ListContentContextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90vw;

  span:last-child {
    margin: 0 auto;
    padding: 30px 20px;
    font-size: 10px;
    color: ${({ theme }) => theme.middleGray};
  }
`;

const ItemBox = styled.div`
  display: flex;
  padding: 20px 20px;
  width: 100%;
  height: 200px;
  border: 0.5px solid ${({ theme }) => theme.lightGray};
  border-right: none;
  border-left: none;

  &:nth-child(1) {
    display: flex;
    flex-direction: column;
    height: 110px;
    padding-top: 20px;
    padding-bottom: 20px;
    font-size: 12px;
    line-height: 2;

    span {
      text-decoration: underline;
    }

    p {
      &:nth-child(2) {
        color: ${({ theme }) => theme.middleGray};
      }
    }
  }
`;

const ImageBox = styled.div`
  width: 250px;
  height: 160px;

  img {
    width: 250px;
    height: 160px;
    object-fit: cover;
    border-radius: 14px;
    cursor: pointer;
  }
`;

const ContentContext = styled.div`
  position: relative;
  padding: 10px 30px;
  cursor: pointer;

  p {
    padding: 5px 5px;
    color: ${({ theme }) => theme.mainColor};
  }

  hr {
    position: absolute;
    width: 50px;
    left: 35px;
    border-color: ${({ theme }) => theme.lightGray};
  }
  span {
    padding: 5px;
    font-size: 12px;
    color: ${({ theme }) => theme.middleGray};

    p {
      margin-top: 15px;
      padding: 3px 5px;
      color: ${({ theme }) => theme.middleGray};
      font-size: 12px;

      &:nth-child(2) {
        margin-top: 1px;
      }
    }
  }
`;

const StyledSlider = styled(Slider)`
  .slick-track {
    height: 100%;
  }

  .slick-list {
    width: 260px;
    height: 170px;
    margin: 0 auto;
  }

  .slick-dots {
    top: 140px;
  }

  .slick-next {
    right: 10px;
  }

  .slick-prev {
    left: 10px;
    z-index: 5;
  }
`;
