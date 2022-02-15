import React from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import { addDays, subDays } from 'date-fns';
import 'react-datepicker/dist/react-datepicker.css';
import { useRecoilState } from 'recoil';
import AtomStartDate from '../../pages/Detail/AtomStartDate';
import AtomEndDate from '../../pages/Detail/AtomEndDate';

function Calendars() {
  const [startDate, setStartDate] = useRecoilState(AtomStartDate);
  const [endDate, setEndDate] = useRecoilState(AtomEndDate);

  return (
    <CalendarsBox>
      <DatePicker
        dateFormat="yyyy.MM.dd"
        selected={startDate}
        onChange={date => setStartDate(date)}
        selectsStart
        startDate={startDate}
        endDate={endDate}
        // 오늘 기준으로 과거 모두 제외.
        minDate={new Date()}
        // 특정 제외 날짜 .
        excludeDateIntervals={[
          {
            start: subDays(new Date('03/03/2022'), 0), //시작 날짜
            end: addDays(new Date('03/07/2022'), -1), // 끝 날짜
          },
          {
            start: subDays(new Date('03/12/2022'), 0),
            end: addDays(new Date('03/16/2022'), -1),
          },
        ]}
      />
      <DatePicker
        dateFormat="yyyy.MM.dd"
        selected={endDate}
        onChange={date => setEndDate(date)}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
        excludeDateIntervals={[
          {
            start: subDays(new Date('03/03/2022'), 0), //시작 날짜
            end: addDays(new Date('03/07/2022'), -1), // 끝 날짜
          },
          {
            start: subDays(new Date('03/12/2022'), 0),
            end: addDays(new Date('03/16/2022'), -1),
          },
        ]}
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
`;

export default Calendars;
