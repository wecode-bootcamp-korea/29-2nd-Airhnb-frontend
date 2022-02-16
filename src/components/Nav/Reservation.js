import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import '@reach/combobox/styles.css';
import {
  faCircleMinus,
  faCirclePlus,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from 'use-places-autocomplete';
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from '@reach/combobox';
import { useRecoilState } from 'recoil';
import AtomStartDate from '../Calendars/AtomStartDate';
import AtomEndDate from '../Calendars/AtomEndDate';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/esm/locale';

const Reservation = ({ panTo }) => {
  const [isToggle, setIsToggel] = useState(false);
  const [adults, setAdults] = useState(0);
  const [startDate, setStartDate] = useRecoilState(AtomStartDate);
  const [endDate, setEndDate] = useRecoilState(AtomEndDate);
  const navigate = useNavigate();
  const {
    // ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      location: { lat: () => 37.50646411590587, lng: () => 127.05363184054711 },
      radius: 200 * 1000,
    },
  });

  const handleInput = e => {
    setValue(e.target.value);
  };

  const handleSelect = async address => {
    setValue(address, false);
    clearSuggestions();

    try {
      const results = await getGeocode({ address });
      const { lat, lng } = await getLatLng(results[0]);
      panTo({ lat, lng });
    } catch (error) {
      throw new Error();
    }
  };
  const toggelMenu = () => {
    setIsToggel(!isToggle);
  };

  const onClickMinusHandler = e => {
    e.preventDefault();
    if (adults > 0) setAdults(adults - 1);
  };

  const onClickPlusHandler = e => {
    e.preventDefault();
    setAdults(adults + 1);
  };

  const goList = () => {
    navigate(
      `houses?country=${value}&check_in=${checkIn}&check_out=${checkOut}&headCount=${adults}`
    );
  };

  const checkIn = `${startDate.getFullYear()}-${
    startDate.getMonth() + 1
  }-${startDate.getDate()}`;

  const checkOut = `${endDate.getFullYear()}-${
    endDate.getMonth() + 1
  }-${endDate.getDate()}`;

  return (
    <Section>
      <ReservationContainer>
        <LocationSearch>
          <LocationText>위치</LocationText>
          <Combobox onSelect={handleSelect}>
            <LocationComboboxInput
              value={value}
              onChange={handleInput}
              placeholder="Search your location"
            />
            <ComboboxPopover>
              <ComboboxList>
                {status === 'OK' &&
                  data.map(({ id, description }) => (
                    <ComboboxOption key={id} value={description} />
                  ))}
              </ComboboxList>
            </ComboboxPopover>
          </Combobox>
          {/* <p>위치</p>

          <LocationInput type="text" placeholder="어떤 흉가를 찾으시나요??" /> */}
        </LocationSearch>
        <DateDecision>
          <ReservationDate>
            <CheckIn>체크인</CheckIn>
            <CheckOut>체크아웃</CheckOut>
          </ReservationDate>
          <Calendars>
            <DatePicker
              dateFormat="yyyy-MM-dd"
              selected={startDate}
              onChange={date => setStartDate(date)}
              selectsStart
              startDate={startDate}
              endDate={endDate}
              minDate={new Date()}
              locale={ko}
            />
            <DatePicker
              class="endDate"
              dateFormat="yyyy-MM-dd"
              selected={endDate}
              onChange={date => setEndDate(date)}
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              minDate={startDate}
              locale={ko}
            />
          </Calendars>
        </DateDecision>

        <VisitorContainer>
          <Visitor onClick={toggelMenu}>
            <p>인원</p>
            <p>게스트 추가</p>
          </Visitor>
          {isToggle ? (
            <VistorNumber isToggle={isToggle}>
              <VisitorContext>
                <VisitorAdult>성인</VisitorAdult>
              </VisitorContext>
              <VisitorButton>
                <FontAwesomeIcon
                  icon={faCircleMinus}
                  onClick={onClickMinusHandler}
                />
                <ButtonNumber>{adults}</ButtonNumber>
                <FontAwesomeIcon
                  icon={faCirclePlus}
                  onClick={onClickPlusHandler}
                />
              </VisitorButton>
            </VistorNumber>
          ) : null}
        </VisitorContainer>
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className="glass"
          onClick={goList}
        />
      </ReservationContainer>
    </Section>
  );
};

const Section = styled.div`
  ${({ theme }) => theme.flexMixin('center', 'center', 'row')};
  padding-top: 10px;
`;

const ReservationContainer = styled.div`
  ${({ theme }) => theme.flexMixin('center')};
  width: 850px;
  height: 66px;
  padding-left: 10px;
  border: 1px solid lightgray;
  border-radius: 110px;

  .glass {
    border-radius: 50px;
    width: 20px;
    height: 20px;
    color: white;
    background-color: #e51d54;
    padding: 10px;
  }
`;

const LocationSearch = styled.div`
  width: 15rem;
  border-right: 1px solid #dadada;
`;

const LocationText = styled.p`
  font-size: 15px;
`;

const LocationComboboxInput = styled(ComboboxInput)`
  background-color: transparent;
  border: none;
  outline: none;
`;

const DateDecision = styled.div`
  width: 28rem;

  p {
    margin-left: 10px;
  }
`;

const ReservationDate = styled.div`
  ${({ theme }) => theme.flexMixin('flex-start')};
  width: 29rem;
  margin-left: 10px;
`;

const CheckIn = styled.div`
  width: 13rem;

  p {
    margin-left: 10px;
  }
`;

const CheckOut = styled.div`
  width: 13rem;
  margin-left: 10px;
`;

const VisitorContainer = styled.div`
  cursor: pointer;
`;

const Visitor = styled.div`
  width: auto;
  border: none;
  p {
    margin-left: 10px;
  }
`;

const VistorNumber = styled.div`
  display: flex;
  justify-content: space-around;
  position: absolute;
  top: 133px;
  left: 850px;
  right: 10px;
  width: 200px;
  height: 200px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 5px 5px grey;
`;

const VisitorContext = styled.div`
  margin-top: 10px;
`;

const VisitorAdult = styled.p`
  font-weight: 600;
`;

const VisitorButton = styled.div`
  display: flex;
  margin-top: 10px;
`;

const ButtonNumber = styled.div`
  margin: 0 5px 0 5px;
`;

const Calendars = styled.div`
  display: flex;
  justify-content: flex-start;
  position: relative;

  width: 100%;

  .react-datepicker-wrapper {
    width: auto;
  }

  .react-datepicker__input-container {
    display: flex;
    justify-content: space-between;
    align-items: space-between;

    input {
      width: 100%;
      height: 20px;
      margin-left: 10px;
      margin-right: 65px;
      border: 0px;
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
export default Reservation;
