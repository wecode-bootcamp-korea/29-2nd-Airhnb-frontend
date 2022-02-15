import React from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useRecoilState } from 'recoil';

import AtomStartDate from '../../../components/Calendars/AtomStartDate';
import AtomEndDate from '../../../components/Calendars/AtomEndDate';
import { ko } from 'date-fns/esm/locale';

function DetailHouseCalendar() {
  const [startDate, setStartDate] = useRecoilState(AtomStartDate);
  const [endDate, setEndDate] = useRecoilState(AtomEndDate);

  return (
    <DetailHouseCalendarStyle>
      <DetailHouseCalendarTitle>
        체크아웃 날짜를 선택하세요.
      </DetailHouseCalendarTitle>
      <DetailHouseCalendarRange>
        {/* 예약 기간 : {startDate.toDateString()} ~ {startDate.toDateString()} */}
      </DetailHouseCalendarRange>
      <Calendar>
        <DatePicker
          dateFormat="yyyy년 MM월 dd일"
          selected={startDate}
          onChange={date => setStartDate(date)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          minDate={new Date()}
          shouldCloseOnSelect={false}
          locale={ko}
          inline
          //FIXME
          //제외 날짜
          // list.map(("날짜")=>{new Date("날짜")})
          // excludeDates={[new Date(), new Date('2022/3/2')]}
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
          inline
        />
      </Calendar>
    </DetailHouseCalendarStyle>
  );
}

const DetailHouseCalendarStyle = styled.div`
  padding: 48px 0 24px;
  border-top: 1px solid ${({ theme }) => theme.lightGray};
`;

const DetailHouseCalendarTitle = styled.h2`
  margin-bottom: 8px;
  color: ${({ theme }) => theme.mainColor};
  font-size: 28px;
  font-weight: 400;
`;

const DetailHouseCalendarRange = styled.div`
  margin-bottom: 8px;
  color: ${({ theme }) => theme.mainColor};
  font-size: 16px;
`;

const Calendar = styled.div`
  display: flex;
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
    color: ${({ theme }) => theme.mainColor};
    display: inline-block;
    width: 36px;
    line-height: 36px;
    text-align: center;
    /* margin: 0.3rem; */
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
    color: white;
    border-radius: 50%;
  }
`;

export default DetailHouseCalendar;
