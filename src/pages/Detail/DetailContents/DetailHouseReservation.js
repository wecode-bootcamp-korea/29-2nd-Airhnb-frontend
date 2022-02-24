import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/esm/locale';
import AtomStartDate from '../../../components/Calendars/AtomStartDate';
import AtomEndDate from '../../../components/Calendars/AtomEndDate';
import { DETAIL_URL } from '../../config';

function DetailHouseReservation({ maxGuest }) {
  const [startDate, setStartDate] = useRecoilState(AtomStartDate);
  const [endDate, setEndDate] = useRecoilState(AtomEndDate);
  const [count, setCount] = useState(1);

  const navigate = useNavigate();

  const plusCount = e => {
    e.preventDefault();
    if (count < maxGuest) {
      setCount(count + 1);
    }
  };

  const minusCount = e => {
    e.preventDefault();
    if (count > 1) {
      setCount(count - 1);
    }
  };

  function parseDate(d) {
    return (
      d.getFullYear() +
      '-' +
      (d.getMonth() + 1 > 9
        ? (d.getMonth() + 1).toString()
        : '0' + (d.getMonth() + 1)) +
      '-' +
      (d.getDate() > 9 ? d.getDate().toString() : '0' + d.getDate().toString())
    );
  }

  const booking = () => {
    fetch(`${DETAIL_URL}/reservations/4`, {
      method: 'POST',
      body: JSON.stringify({
        check_in: parseDate(startDate),
        check_out: parseDate(endDate),
        user_id: 1,
        house_id: 4,
        headcount: { count },
      }),
    })
      .then(res => res.json())
      .then(data => {
        if (data.message === 'reservation succeed') {
          if (window.confirm('정상적으로 예약이 완료되었습니다.')) {
            navigate('/houses');
          }
        } else if ((data.message = 'ALREADY_BOOKED')) {
          alert('예약이 불가능한 날짜입니다.');
        }
      });
  };

  return (
    <DetailHouseReservationStyle>
      <DetailHouwReservationModal>
        예약을 확인하려면 날짜를 입력하세요.
        <CalendarsBox>
          <DatePicker
            dateFormat="yyyy년 MM월 dd일"
            selected={startDate}
            onChange={date => setStartDate(date)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            minDate={new Date()}
            locale={ko}
          />
          <DatePicker
            dateFormat="yyyy년 MM월 dd일"
            selected={endDate}
            onChange={date => setEndDate(date)}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
            locale={ko}
          />
        </CalendarsBox>
        <CalendarsBox />
        <Personnel>
          <PersonnelText>인원 수</PersonnelText>
          <Counter>
            <button onClick={minusCount}>-</button>
            <span>{count}</span>
            <button onClick={plusCount}>+</button>
          </Counter>
        </Personnel>
        <DetailHouwReservationBtn onClick={booking}>
          예약하기
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
  border: 1px solid rgb(221, 221, 221);
  border-radius: 20px;
  box-shadow: rgb(0 0 0 / 12%) 0px 6px 16px;
  color: ${({ theme }) => theme.mainColor};
`;

const DetailHouwReservationBtn = styled.button`
  all: unset;
  cursor: pointer;
  justify-content: center;
  width: 100px;
  padding: 14px 11%;
  background-color: ${({ theme }) => theme.mainColor};
  border-radius: 20px;
  color: white;
  text-align: center;
`;

const CalendarsBox = styled.div`
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

  .react-datepicker {
    margin: 20px 10px 0 0;
    font-size: 14px;
    border: 0px;
  }

  .react-datepicker__header {
    background-color: white;
    border: 0px;

    .react-datepicker__current-month {
      color: ${({ theme }) => theme.mainColor};
      font-size: 16px;
      font-weight: 400;
    }
  }

  .react-datepicker__day,
  .react-datepicker__day-name {
    color: ${({ theme }) => theme.mainColor};
    display: inline-block;
    width: 36px;
    line-height: 36px;
    text-align: center;
  }
  .react-datepicker__day:hover,
  .react-datepicker__day--selected,
  .react-datepicker__day--in-selecting-range,
  .react-datepicker__day--in-range,
  .react-datepicker__day--in-range:not(.react-datepicker__day--in-selecting-range) {
    background-color: ${({ theme }) => theme.mainColor};
    border-radius: 50%;
    color: white;
  }

  .react-datepicker__day--keyboard-selected,
  .react-datepicker__day--in-selecting-range:not(.react-datepicker__day--in-range) {
    background-color: white;
    border-radius: 50%;
    color: #333;
  }
  .react-datepicker__day--disabled {
    cursor: default;
    color: #ccc;
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
    width: 30px;
    height: 30px;
    background-color: white;
    margin: 0 5px;
    border: 1px solid ${theme => theme.mainColor};
    border-radius: 50%;
    text-align: center;
  }

  span {
    display: block;
    text-align: center;
    padding-top: 8px;
    width: 20px;
  }
`;
