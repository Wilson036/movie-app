import Card from 'components/\bCard/Card';
import Banner from 'components/Banner';
import React from 'react';

function home() {
  return (
    <>
      <Banner />
      <Card
        title="Top TV picks for Jack"
        url="discover/tv?sort_by=popularity.desc&page=1"
      />
    </>
  );
}

export default home;
