import React from 'react';
import styled from 'styled-components';
import CheckBox from './CheckBox';

const ListCheckBox = ({
  type,
  checkedItemHandler,
  name,
  addQuery,
  query,
  deleteQuery,
}) => {
  return (
    <ListCheckBoxContainer>
      {type?.map((item, index) => (
        <CheckBox
          item={item}
          index={index}
          key={index}
          name={name}
          addQuery={addQuery}
          deleteQuery={deleteQuery}
          query={query}
        />
      ))}
    </ListCheckBoxContainer>
  );
};

export default ListCheckBox;

const ListCheckBoxContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;
