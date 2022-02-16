import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ModalButton from './ModalButton/ModalButton';
import ToggleButton from './ToggleButton/ToggleButton';
import axios from 'axios';
import { END_POINT } from '../../../../config';

const ListButton = () => {
  const [category, setCategory] = useState({});

  const fetchCategoryList = async () => {
    const fetch = await axios.get(END_POINT.category);
    const datalist = await fetch.data;
    setCategory(datalist);
  };

  useEffect(() => {
    fetchCategoryList();
  }, []);

  return (
    <ListButtonContainer>
      {/* {list.map((item, index) => (
        <ModalButton item={item} key={index} />
      ))} */}

      {category.results &&
        category.results.map((item, index) => (
          <ModalButton item={item} key={index} />
        ))}
      {toggleName.map(item => (
        <ToggleButton key={item.key} name={item.name} />
      ))}
    </ListButtonContainer>
  );
};

export default ListButton;

const ListButtonContainer = styled.div`
  position: relative;
  display: flex;
`;
const toggleName = [
  { key: 1, name: '트랩' },
  { key: 2, name: '탈출구' },
];
