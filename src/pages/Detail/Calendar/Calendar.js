import React from 'react';
import DatePicker from 'react-datepicker';
import styled from 'styled-components';
import 'react-datepicker/dist/react-datepicker.css';
import { useRecoilState } from 'recoil';
import AtomStart from './AtomStart';
import AtomEnd from './AtomEnd';

function Calendar() {
  const [startDate, setStartDate] = useRecoilState(AtomStart);
  const [endDate, setEndDate] = useRecoilState(AtomEnd);

  return (
    <Container>
      <DatePicker
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
    </Container>
  );
}

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
export default Calendar;
