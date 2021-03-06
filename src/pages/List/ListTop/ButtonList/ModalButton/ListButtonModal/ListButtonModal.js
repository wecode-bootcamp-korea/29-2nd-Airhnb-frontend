import React from 'react';
import { useState } from 'react/cjs/react.development';
import styled from 'styled-components';
import ListCheckBox from './ListCheckBox/ListCheckBox';
import { queryParam } from '../../../../../../queryparam';
import { useRecoilState } from 'recoil';

const ListButtonModal = ({ type, onClick, name, closeModal }) => {
  const [isValid, setIsValid] = useState(true);
  const [query, setQuery] = useState([]);
  const [param, setParam] = useRecoilState(queryParam);

  const addQuery = item => {
    setParam({ ...param, [name]: [...param[name], item] });
  };

  const deleteQuery = item => {
    setParam({
      ...param,
      [name]: [...param[name].filter(value => value !== item)],
    });
  };

  return (
    <div>
      {isValid && (
        <ListButtonModalContainer>
          <ListCheckBox
            type={type}
            name={name}
            addQuery={addQuery}
            deleteQuery={deleteQuery}
            query={query}
          />
          <CorrectBox>
            <span onClick={() => closeModal(query, name, 'delete')}>
              지우기
            </span>
            <SaveButton onClick={() => closeModal(query, name)}>
              저장
            </SaveButton>
          </CorrectBox>
        </ListButtonModalContainer>
      )}
    </div>
  );
};

export default ListButtonModal;

const ListButtonModalContainer = styled.div`
  position: absolute;
  top: 70px;
  left: 0px;
  width: 360px;
  padding: 20px;
  border: 0.5px solid ${({ theme }) => theme.lightGray};
  border-radius: 14px;
  background-color: ${({ theme }) => theme.white};
  z-index: 5;
`;

const CorrectBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 5px;
  font-size: 14px;
  text-decoration: underline;
`;

const SaveButton = styled.button`
  padding: 10px 14px;
  border-radius: 14px;
  border: none;
  color: white;
  background-color: black;
  font-size: 13px;
`;
