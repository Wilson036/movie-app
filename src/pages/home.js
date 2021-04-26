import Card from 'components/\bCard/Card';
import Banner from 'components/Banner';
import React from 'react';
import { useRecoilValue } from 'recoil';
import { movies } from 'store/atom';
import Carousel from 'react-material-ui-carousel';

const movieInfo = [
  {
    img_src:
      'https://movies.yahoo.com.tw/i/o/production/movies/March2021/vsfkM9g2D2WvlOqvcuS2-672x953.jpg',
    title: '當男人戀愛時',
    movie_id: '11255',
  },
  {
    img_src:
      'https://movies.yahoo.com.tw/i/o/production/movies/March2021/S5Cyarbok0LDaYkEhe9x-742x1080.jpg',
    title: '名偵探柯南：緋色的不在場證明',
    movie_id: '11281',
  },
  {
    img_src:
      'https://movies.yahoo.com.tw/i/o/production/movies/March2021/zdiICr3wA7jaeEANB68a-757x1080.jpg',
    title: '永生戰',
    movie_id: '11073',
  },
  {
    img_src:
      'https://movies.yahoo.com.tw/i/o/production/movies/March2021/Li5ikEWlp63wbE4lLWWb-757x1080.jpg',
    title: '聽見歌 再唱',
    movie_id: '11232',
  },
  {
    img_src:
      'https://movies.yahoo.com.tw/i/o/production/movies/March2021/dlEo9295zU5P29FppTiN-757x1080.jpg',
    title: '哥吉拉大戰金剛',
    movie_id: '11215',
  },
];

function Home() {
  const movie = useRecoilValue(movies);

  return (
    <>
      <Carousel
        stopAutoPlayOnHover={true}
        animation="slide"
        interval={3000}
        navButtonsAlwaysVisible={true}
      >
        {movieInfo.map((info, index) => (
          <Banner key={index} info={info} />
        ))}
      </Carousel>
      <Card title="現正熱映中" movieDatas={movie} />
    </>
  );
}

export default Home;
