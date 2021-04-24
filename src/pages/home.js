import Card from 'components/\bCard/Card';
import Banner from 'components/Banner';
import React from 'react';
import { useRecoilValue } from 'recoil';
import { movies } from 'store/atom';

function Home() {
  const movie = useRecoilValue(movies);

  return (
    <>
      <Banner />
      <Card title="現正熱映中" movieDatas={movie} />
    </>
  );
}

export default Home;
