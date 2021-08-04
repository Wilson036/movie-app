import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { areasInfo, theaterInfo } from "../../store";
import { useMutation } from "@apollo/client";
import { UPDATE_SHOW_TIME } from "gql/mutation";
import TheaterSelect from "pages/MovieInfoPage/TheaterSelectPage";
import DateSelect from "pages/MovieInfoPage/DateSelectPage";
import TimeList from "pages/MovieInfoPage/TimeListPage";
import { showTimeListGroupByType } from "../../util";
import { setDateFormat } from "../../util";
import Search from "components/common/Search";

const Container = styled.div`
  margin: 100px;
  margin-top: 0;
  h1 {
    font-size: 42px;
  }
`;
const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CardCont = styled.div`
  border-radius: 3px;
  background: rgba(177, 165, 165, 0.112);
  padding: 0;
  width: 100%;
  display: flex;
`;

const Post = styled.div`
  width: 50%;
  background-image: url(${(props) => `${props.backDrop}`});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
`;

const Description = styled.div`
  width: 50%;
  padding: 25px;
  color: #fafafa;
`;

export default function MovieInfo({ location }) {
  const { movie_id, title, anticipation, satifaction, img_src, release_time } =
    location.state;
  const [queryTimeByMovieId, { loading }] = useMutation(UPDATE_SHOW_TIME);
  const areaItems = useRecoilValue(areasInfo);
  const theaterItems = useRecoilValue(theaterInfo);
  const [timeList, setTimeList] = useState({});
  const [dateTime, setDateTime] = useState(new Date());
  const [tempList, setTempList] = useState({});
  const [area, setArea] = useState(28);
  const [city, setCity] = useState("台北市");
  const [theater, setTheater] = useState(
    theaterItems.filter(({ area_id }) => area_id === "28")
  );

  useEffect(() => {
    setTheater(theaterItems.filter(({ area_id }) => area_id === `${area}`));
  }, [area, theaterItems]);

  useEffect(() => {
    getShowTimeList(movie_id, setDateFormat(dateTime), theater);
  }, [dateTime, theater, movie_id]);

  const handleAreaValue = (e) => {
    const areaId = e.target.value;
    setArea(areaId);
    setCity(areaItems.find(({ area_id }) => area_id === areaId).area_name);
  };

  const setQueryDate = (date) => {
    setDateTime(date);
  };

  const handleTheaterSearch = (e) => {
    const theaterName = e.target.value.trim();
    if (!theaterName) {
      setTimeList({ ...tempList });
      return;
    }
    const newList = Object.entries(tempList).reduce((obj, [key, value]) => {
      if (key.includes(theaterName)) {
        obj[key] = value;
      }
      return obj;
    }, {});
    setTimeList({ ...newList });
  };

  const getShowTimeList = async (id, date, theaterArray) => {
    const theater_ids = theaterArray.map(({ theater_id }) => theater_id);
    try {
      const data = await queryTimeByMovieId({
        variables: {
          id,
          date,
          theater_ids,
        },
      });
      const list = showTimeListGroupByType(
        theaterArray,
        data.data.queryTimeByMovieId
      );
      setTimeList({
        ...list,
      });
      setTempList({ ...list });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Container>
      <CardCont>
        <Post backDrop={img_src} />
        <Description>
          <h1>{title}</h1>
          <StyledDiv>
            <TheaterSelect
              area={area}
              onGetAreaValueEvent={handleAreaValue}
              areaItems={areaItems}
            />
            <Search
              text="搜尋戲院名稱"
              width="50"
              onSearchEvent={handleTheaterSearch}
            />
          </StyledDiv>
          <DateSelect setQueryDate={setQueryDate} queryDate={dateTime} />
          <h1>{city}</h1>
          <TimeList
            timeList={timeList}
            queryDate={dateTime}
            loading={loading}
          />
        </Description>
      </CardCont>
    </Container>
  );
}
