import React from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import AtomStartDate from './AtomStartDate';
import AtomEndDate from './AtomEndDate';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/esm/locale';

function Calendars({ inline }) {
  const [startDate, setStartDate] = useRecoilState(AtomStartDate);
  const [endDate, setEndDate] = useRecoilState(AtomEndDate);

  return (
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
        inline={inline}
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
        inline={inline}
      />
    </CalendarsBox>
  );
}

const CalendarsBox = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;
  margin: 15px 0;
  padding: 0 11%;

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

  .react-datepicker-popper {
    position: relative;
    left: -150px;
    top: 50px;
  }

  .react-datepicker {
    margin: 20px 10px 0 0;
    font-size: 14px;
    border: 0px;
  }

  .react-datepicker__month-container {
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
    display: inline-block;
    width: 36px;
    color: ${({ theme }) => theme.mainColor};
    line-height: 36px;
    text-align: center;
  }

  .react-datepicker__day--disabled,
  .react-datepicker__month-text--disabled,
  .react-datepicker__quarter-text--disabled,
  .react-datepicker__year-text--disabled {
    cursor: default;
    color: #ccc;
  }

  .react-datepicker__day--selected,
  .react-datepicker__day--in-selecting-range,
  .react-datepicker__day--in-range {
    background-color: ${({ theme }) => theme.mainColor};
    color: ${({ theme }) => theme.white};
    border-radius: 50%;
  }
`;

export default Calendars;
