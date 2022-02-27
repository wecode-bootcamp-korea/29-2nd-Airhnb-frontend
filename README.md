# Air HnB 2차 프로젝트

## 🎆 기획

Air bnb를 모티브로한 흉가 예약 시스템

<br><br>

## ⭐️ 구성원

### 프론트 엔드

- 이화종 &nbsp;[GITHUB](https://github.com/hjlee1811)

- 정지민 &nbsp;[GITHUB](https://github.com/rindalica)

- 신수녕&nbsp; [GITHUB](https://github.com/cozynye)

- 한신웅&nbsp; [GITHUB](https://github.com/hsuj86)

### 백엔드

- 강종범&nbsp; [GITHUB](https://github.com/jxngbxxm)

- 주다희 &nbsp;[GITHUB](https://github.com/newdana01)

- 최형택 &nbsp;[GITHUB](https://github.com/knuckles6974)

<br><br>

## 📆 기간

- 2022/2/14 ~ 2022/2/26

<br><br>

## 🔒 필수 구현 목표

- 소셜 로그인

- 흉가 리스트 페이지

- 흉가 상세 페이지�

- 흉가 검색 기능

- 호스트 되기

<br><br>

## 💻 적용 기술

- FrontEnd : javascript, React, Styled-Component, Google Map API, Recoil
- BackEnd : Python, Django, Mysql, AWS

<br><br>

## 📌 구현 파트

메인페이지(신수녕)

- react-player를 활용한 동영상 플레이어

<br>

리스트 페이지(신수녕)

- Google Map API를 활용한 숙소 위치 마커
- Recodil을 활용한 데이터 전역 상태 관리(필터링, 상품 데이터)
- react-paginate를 활용한 페이징 처리
- slick 라이브러리 활용한 이미지 슬라이더

<br>

흉가 상세페이지(정지민)

![detail](https://user-images.githubusercontent.com/68885795/155672723-2b2062ce-cdc0-4020-9584-6d094be2990b.gif)



- 흉가에 따른 상세페이지 렌더링 화면 변경.
- 데이터로 받아오는 이미지 갯수에 따른 이미지 레이아웃 조건부 랜더링 구현.
- 스크롤 따라 움직이는 일정 예약 모달창 구현.
- React date-picker 라이브러리로 달력 구현.
- 달력에서 선택한 일정 및 인원수 값 ‘예약하기’ 버튼 클릭 시 백엔드로 넘어가도록 구현.

<br>

로그인(이화종)

- kakao 소셜 로그인 (rest api 이용한 백엔드와 통신)

<br>

Nav(이화종)

- Google map api 이용한 위치 검색 기능 구현
- Date picker를 이용한 예약 날짜 기능 구현
- 방문 인원수 기능 구현
- 검색 버튼 클릭시 리스페이지 이동

<br>

호스트 되기 페이지

- 구글 맵 api 활용하여 위치 정보 획득
- recoil로 데이터 전역 상태 관리
- formData로 이미지와 데이터 백엔드에 전송

<br><br>

## Reference

이 프로젝트는 에어비앤비 사이트를 참조하여 학습목적으로 만들었습니다.

실무수준의 프로젝트이지만 학습용으로 만들었기 때문에 이 코드를 활용하여 이득을 취하거나 무단 배포할 경우 법적으로 문제될 수 있습니다.

이 프로젝트에서 사용하고 있는 사진 대부분은 위코드에서 구매한 것이므로 해당 프로젝트 외부인이 사용할 수 없습니다.
