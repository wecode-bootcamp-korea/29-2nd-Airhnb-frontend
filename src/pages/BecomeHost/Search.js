import React from 'react';
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from 'use-places-autocomplete';
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxOption,
} from '@reach/combobox';
import '@reach/combobox/styles.css';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { becomeHostData } from '../../hostData';

const Search = ({ panTo }) => {
  const {
    ready,
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

  const [hostData, setHostData] = useRecoilState(becomeHostData);

  return (
    <div>
      <StyledCombobox
        className="search"
        onSelect={async address => {
          setValue(address, false);
          clearSuggestions();

          try {
            const results = await getGeocode({ address });
            const { lat, lng } = await getLatLng(results[0]);
            panTo({ lat, lng });
            setHostData({
              ...hostData,
              country: results[0].formatted_address.split(' ')[0],
              city: results[0].formatted_address.split(' ')[1],
            });
          } catch (error) {
            throw new Error();
          }
        }}
      >
        <StyledComboboxInput
          value={value}
          onChange={e => {
            setValue(e.target.value);
          }}
          disabled={!ready}
          placeholder="주소를 입력해주세요."
        />
        <StyledComboboxPopover>
          {status === 'OK' &&
            data.map(({ description, id }) => (
              <ComboboxOption key={id} value={description} />
            ))}
        </StyledComboboxPopover>
      </StyledCombobox>
    </div>
  );
};

const StyledCombobox = styled(Combobox)`
  position: absolute;
  top: 115px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 400px;
  z-index: 10;
`;

const StyledComboboxInput = styled(ComboboxInput)`
  padding: 15px;
  width: 100%;
  border: 1px solid lightgray;
  border-radius: 5px;
`;

const StyledComboboxPopover = styled(ComboboxPopover)`
  list-style: none;
`;

export default Search;
