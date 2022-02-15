import React, { useState } from 'react';
import styled from 'styled-components';
// import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
// import { useRecoilState } from 'recoil';
// import AtomStart from '../AtomStart';
// import AtomEnd from '../../../components/Calendar/AtomEnd';
import Calendar from '../Calendar/Calendar';

function DetailHouseReservation() {
  // const [startDate, setStartDate] = useRecoilState(AtomStart);
  // const [endDate, setEndDate] = useRecoilState(AtomEnd);
  const [count, setCount] = useState(1);

  const plusCount = e => {
    e.preventDefault();
    if (count < 5) {
      setCount(count + 1);
    }
  };

  const minusCount = e => {
    e.preventDefault();
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const getFullYmdStr = d => {
    return (
      d.getFullYear() +
      '년 ' +
      (d.getMonth() + 1) +
      '월 ' +
      d.getDate() +
      '일 ' +
      '일월화수목금토'.charAt(d.getUTCDay()) +
      '요일'
    );
  };

  return (
    <DetailHouseReservationStyle>
      <DetailHouwReservationModal>
        예약을 확인하려면 날짜를 입력하세요.
        <Calendar />
        {/* <Container>
          <DatePicker
            selectsRange={true}
            dateFormat="yyyy.MM.dd"
            selected={startDate}
            onChange={date => setStartDate(date)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            minDate={new Date()}
            shouldCloseOnSelect={false}
          />
          <DatePicker
            dateFormat="yyyy.MM.dd"
            selected={endDate}
            onChange={date => setEndDate(date)}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
          />
        </Container> */}
        <Personnel>
          <PersonnelText>인원 수</PersonnelText>
          <Counter>
            <button onClick={minusCount}>-</button>
            <span>{count}</span>
            <button onClick={plusCount}>+</button>
          </Counter>
        </Personnel>
        <DetailHouwReservationBtn>
          예약 가능 여부를 확인하세요.
          {/* 
          FIXME
          버튼 클릭 시
          일정 
          */}
        </DetailHouwReservationBtn>
      </DetailHouwReservationModal>
    </DetailHouseReservationStyle>
  );
}

export default DetailHouseReservation;

const DetailHouseReservationStyle = styled.div`
  display: flex;
  justify-content: center;
  width: 40%;
  padding: 40px 0;
`;

const DetailHouwReservationModal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 20px;
  width: 80%;
  height: 240px;
  padding: 20px;
  background-color: ${({ theme }) => theme.white};
  color: ${({ theme }) => theme.mainColor};
  border: 1px solid rgb(221, 221, 221);
  border-radius: 20px;
  box-shadow: rgb(0 0 0 / 12%) 0px 6px 16px;
`;

const DetailHouwReservationBtn = styled.button`
  all: unset;
  cursor: pointer;
  padding: 14px 11%;
  background-color: ${({ theme }) => theme.mainColor};
  color: white;
  border-radius: 20px;
  text-align: center;
  justify-content: center;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  margin: 15px 0;
  padding: 0 11%;
  width: 100%;
  .react-datepicker-wrapper {
    width: auto;
  }
  .react-datepicker__input-container {
    display: flex;
    align-items: center;
    input {
      width: 100%;
      height: 50px;
      padding: 5px 0;
      border-radius: 20px;
      border: 1px solid ${theme => theme.mainColor};
      text-align: center;
      color: ${({ theme }) => theme.mainColor};
    }
  }
`;

const Personnel = styled.div`
  display: flex;
  margin: 0 0 10px 0;
  align-items: center;
  color: ${({ theme }) => theme.mainColor};
`;

const PersonnelText = styled.span`
  margin-right: 20px;
`;
const Counter = styled.div`
  display: flex;

  justify-content: space-between;
  button {
    all: unset;
    cursor: pointer;
    border-radius: 50%;
    margin: 0 5px;
    width: 30px;
    height: 30px;
    border: 1px solid ${theme => theme.mainColor};
    background-color: white;
    text-align: center;
  }
  span {
    display: block;
    text-align: center;
    padding-top: 8px;
    width: 20px;
  }
`;
