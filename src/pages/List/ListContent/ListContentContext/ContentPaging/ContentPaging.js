import React from 'react';
import ReactPaginate from 'react-paginate';
import styled from 'styled-components';
import { itemListState } from '../../../../../itemList';
import { useRecoilState } from 'recoil';
import axios from 'axios';
import { END_POINT } from '../../../../../config';

const ContentPaging = () => {
  const [datalist, setDataList] = useRecoilState(itemListState);

  const fetchList = async pagination => {
    const selectedButton = pagination.selected * 10;
    const fetch = await axios.get(
      `${END_POINT.itemList}?limit=10&offset=${selectedButton}`
    );
    const datalist = await fetch.data;
    setDataList(datalist);
  };

  return (
    <ContentPagingContainer>
      <PagingButtonContainer>
        <StyledPaginateContainer>
          <ReactPaginate
            previousLabel="previous"
            nextLabel="next"
            breakLabel="..."
            breakClassName="break-me"
            pageCount={datalist.total_pages ? datalist.total_pages / 10 : 20}
            marginPagesDisplayed={1}
            pageRangeDisplayed={4}
            onPageChange={pagination => fetchList(pagination)}
            containerClassName="pagination"
            activeClassName="active"
          />
        </StyledPaginateContainer>
      </PagingButtonContainer>
    </ContentPagingContainer>
  );
};

export default ContentPaging;

const ContentPagingContainer = styled.div`
  padding: 30px 150px 10px 150px;
`;

const PagingButtonContainer = styled.nav``;
const StyledPaginateContainer = styled.div`
  .pagination {
    color: ${({ theme }) => theme.mainColor};
  }

  .break-me {
    cursor: default;
  }

  .active {
    border-color: transparent;
    border-radius: 14px;
    background-color: ${({ theme }) => theme.mainColor};
    color: white;
  }

  ul {
    display: flex;

    li {
      color: ${({ theme }) => theme.mainColor};
      padding: 5px;

      &:hover {
        cursor: pointer;
      }
    }
  }
`;
