import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { queryParam } from '../../../../../../../queryparam';
import { useRecoilValue } from 'recoil';

const CheckBox = ({ item, index, name, addQuery, deleteQuery }) => {
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const queryParameter = useLocation().search.split('?')[1];
  const paramterList = decodeURI(queryParameter).split('&');

  const divideParam = () => {
    for (let param of paramterList) {
      if (name === param.split('=')[0] && item === param.split('=')[1]) {
        setIsButtonClicked(prev => !prev);
      }
    }
  };
  const query = useRecoilValue(queryParam)[name];

  useEffect(() => {
    divideParam();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const buttonClicked = (event, item) => {
    setIsButtonClicked(prev => !prev);
    if (isButtonClicked === false) {
      addQuery(item);
    } else {
      for (let param of query) {
        if (param === item) {
          query.slice(query.indexOf(param), 1);
          deleteQuery(param);
        }
      }
    }
  };

  return (
    <CheckBoxContainer key={index}>
      <Button
        isButtonClicked={isButtonClicked}
        onClick={event => buttonClicked(event, item)}
      >
        {item}
      </Button>
    </CheckBoxContainer>
  );
};

export default CheckBox;

const CheckBoxContainer = styled.div``;

const Button = styled.button`
  width: 60px;
  height: 70px;
  margin-right: 3px;
  margin-bottom: 3px;
  padding: 10px;
  border-radius: 14px;
  border: none;
  color: ${props =>
    props.isButtonClicked ? props.theme.white : props.theme.black};
  background-color: ${props =>
    props.isButtonClicked ? props.theme.mainColor : props.theme.white};
  cursor: pointer;

  &:hover {
    cursor: pointer;
    box-shadow: rgb(10 52 66 / 50%) 13px 10px 16px;
  }
`;
