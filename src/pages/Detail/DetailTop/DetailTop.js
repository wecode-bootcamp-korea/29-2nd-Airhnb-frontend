import React from 'react';
import DetailTitle from './DetailTitle';
import DetailImages from './DetailImages';

function DetailTop({ name, houseType, city, country, imgList }) {
  return (
    <>
      <DetailTitle
        name={name}
        houseType={houseType}
        city={city}
        country={country}
      />
      <DetailImages imgList={imgList} />
    </>
  );
}

export default DetailTop;
