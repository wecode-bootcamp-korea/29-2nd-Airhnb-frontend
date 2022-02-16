import {
  faFacebook,
  faGithub,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Footer = () => {
  const [footerData, setFooterData] = useState([]);
  useEffect(() => {
    fetch('/data/footer.json')
      .then(res => res.json())
      .then(data => setFooterData(data.data));
  }, []);

  return (
    <FooterContainer>
      <FooterMain>
        {footerData.map((data, index) => (
          <ListContainer key={index}>
            {data.map((data, index) => (
              <List key={index}>{data}</List>
            ))}
          </ListContainer>
        ))}
      </FooterMain>
      <HrTag />
      <FooterBottom>
        <FooterBottomContent>
          <ul>
            {BOTTOMCONTENT.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </FooterBottomContent>
        <FooterBottomContent>
          <ul>
            <li>
              <FontAwesomeIcon icon={faEarthAmericas} /> 한국어 (KR)
            </li>
            <li>₩ KRW</li>
          </ul>
        </FooterBottomContent>
        <FooterBottomContent>
          <ul>
            <li>
              <FontAwesomeIcon icon={faGithub} />
            </li>
            <li>
              <FontAwesomeIcon icon={faInstagram} />
            </li>
            <li>
              <FontAwesomeIcon icon={faFacebook} />
            </li>
          </ul>
        </FooterBottomContent>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;

const BOTTOMCONTENT = [
  '>© 2022 Airbnb, Inc',
  '개인정보 처리방침',
  '이용약관',
  '사이트맵',
  '한국의 변경된 환불 정책',
  '회사 세부정보',
];
const FooterContainer = styled.div`
  background-color: ${({ theme }) => theme.colorGray};
  color: ${({ theme }) => theme.black};
  z-index: 100;
`;
const FooterMain = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 40px 70px;
`;

const ListContainer = styled.ul`
  padding-right: 60px;
`;

const List = styled.li`
  line-height: 2.5;
  font-size: 12px;
  cursor: pointer;
  font-weight: 350;

  &:nth-child(1) {
    font-weight: 600;
    cursor: auto;
  }
`;

const HrTag = styled.hr`
  width: 90vw;
  margin: 0 auto;
`;

const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 40px 10px 70px;

  ul {
    display: flex;
    padding-right: 50px;
    font-size: 12.5px;

    li {
      margin-right: 10px;
      cursor: pointer;
    }
  }
`;

const FooterBottomContent = styled.div`
  &:nth-child(1) {
    ul {
      li {
        &:nth-child(1) {
          cursor: auto;
        }
      }
    }
  }

  &:nth-child(3) {
    li {
      margin-left: 10px;
      font-size: 14px;
    }
  }
`;
