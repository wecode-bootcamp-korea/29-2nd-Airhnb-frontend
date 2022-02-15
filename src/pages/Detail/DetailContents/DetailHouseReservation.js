import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
import { useRecoilState } from 'recoil';
import AtomStartDate from '../../../components/Calendars/AtomStartDate';
import AtomEndDate from '../../../components/Calendars/AtomEndDate';
import { ko } from 'date-fns/esm/locale';
import { addDays, subDays } from 'date-fns';

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
  // TODO 날짜 형식 바꾸기
  // function parseDate(d) {
  //   return (
  //     d.getFullYear() +
  //     '-' +
  //     (d.getMonth() + 1 > 9
  //       ? (d.getMonth() + 1).toString()
  //       : '0' + (d.getMonth() + 1)) +
  //     '-' +
  //     (d.getDate() > 9 ? d.getDate().toString() : '0' + d.getDate().toString())
  //   );
  // }

  // TODO - 예약 기간 전달
  // const booking = () => {
  //   fetch("주소", {
  //     method: 'POST',
  //     headers: {
  //       Authorization: token,
  //     },
  //     body: JSON.stringify({
  //       start_date: parseDate(startDate),
  //       end_date: parseDate(endDate),
  //       host_id: host_id,
  //     }),
  //   })
  //     .then(res => res.json())
  //     .then(data => {
  //       if (data.message === 'SUCCESS') {
  //         if (window.confirm('정상적으로 예약이 완료되었습니다.')) {
  //           navigate('/');
  //         }
  //       } else if ((data.message = 'ALREADY_BOOKED')) {
  //         alert('예약이 불가능한 날짜입니다.');
  //       }
  //     });
  // };

  return (
    <DetailHouseReservationStyle>
      <DetailHouwReservationModal>
        예약을 확인하려면 날짜를 입력하세요.
        <CalendarsBox>
          <DatePicker
            selected={startDate}
            onChange={date => setStartDate(date)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
          />
          <DatePicker
            selected={endDate}
            onChange={date => setEndDate(date)}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
          />
        </CalendarsBox>
        <Personnel>
          <PersonnelText>인원 수</PersonnelText>
          <Counter>
            <button onClick={minusCount}>-</button>
            <span>{count}</span>
            <button onClick={plusCount}>+</button>
          </Counter>
        </Personnel>
        <DetailHouwReservationBtn
        // TODO onClick={booking}
        >
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
  color: ${({ theme }) => theme.mainColor};
  border: 1px solid rgb(221, 221, 221);
  border-radius: 20px;
  box-shadow: rgb(0 0 0 / 12%) 0px 6px 16px;
  .jlGDeZ {
    background-color: palegreen;
  }
`;

const DetailHouwReservationBtn = styled.button`
  all: unset;
  cursor: pointer;
  width: 100px;
  padding: 14px 11%;
  background-color: ${({ theme }) => theme.mainColor};
  color: white;
  border-radius: 20px;
  text-align: center;
  justify-content: center;
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
