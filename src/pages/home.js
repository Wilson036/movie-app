import { useQuery } from '@apollo/client';
import Card from 'components/\bCard/Card';
import Banner from 'components/Banner';
import { GET_MOVIES } from 'gql/query';
import React from 'react';

function Home() {
  const { data, error, loading } = useQuery(GET_MOVIES, {
    variables: {
      date: '2021-3-24',
    },
  });

  if (loading) return <div>讀取中....</div>;
  if (error) return <div>錯誤發生：{error}</div>;
  console.log('data', data.queryMoviesByDate);
  return (
    <>
      <Banner />
      <Card title="現正熱映中" movieDatas={data.queryMoviesByDate} />
    </>
  );
}

export default Home;
