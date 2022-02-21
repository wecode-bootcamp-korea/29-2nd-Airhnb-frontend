import React from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useRecoilState } from 'recoil';
import AtomStartDate from './AtomStartDate';
import AtomEndDate from './AtomEndDate';
import { ko } from 'date-fns/esm/locale';

function Calender() {
  const [startDate, setStartDate] = useRecoilState(AtomStartDate);
  const [endDate, setEndDate] = useRecoilState(AtomEndDate);

  return (
    <Calendars>
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
        excludeDates={[new Date(), new Date('2022/3/2')]}
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
    </Calendars>
  );
}

export default Calender;
