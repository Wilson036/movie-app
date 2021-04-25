import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {
  Button,
  FormControl,
  InputLabel,
  makeStyles,
  MenuItem,
  Paper,
  Select,
} from '@material-ui/core';
import { useRecoilValue } from 'recoil';
import { areasInfo, theaterInfo } from '../store';
import { useMutation } from '@apollo/client';
import { UPDATE_SHOW_TIME } from 'gql/mutation';
import Search from 'components/common/Search';

const Container = styled.div`
  margin: 100px;
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

const List = styled.ul`
  height: 510px;
  overflow-y: scroll;
`;

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > div': {
      width: '20%',
      height: theme.spacing(10),
      marginTop: theme.spacing(1),
    },
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  btn: {
    width: '100%',
  },
}));

export default function MovieInfo({ location }) {
  const {
    movie_id,
    title,
    anticipation,
    img_src,
    release_date,
  } = location.state;
  const areaItems = useRecoilValue(areasInfo);
  const theaterItems = useRecoilValue(theaterInfo);
  const initTheaters = theaterItems.filter(({ area_id }) => area_id === '28');
  const [timeList, setTimrList] = useState({});
  const [dateTime, setDateTime] = useState(new Date(2021, 3, 26));
  const [tempList, setTempList] = useState({});
  const [area, setArea] = useState(28);
  const [city, setCity] = useState('台北市');
  const [theater, setTheater] = useState(initTheaters);

  const [queryTimeByMovieId] = useMutation(UPDATE_SHOW_TIME);

  useEffect(() => {
    setTheater(theaterItems.filter(({ area_id }) => area_id === `${area}`));
  }, [area, theaterItems]);

  useEffect(() => {
    getShowTimeList(movie_id, setDateFormat(dateTime), theater);
  }, [dateTime, theater, movie_id]);

  const classes = useStyles();

  const getAreaValue = (e) => {
    const areaId = e.target.value;
    setArea(areaId);
    setCity(areaItems.find(({ area_id }) => area_id === areaId).area_name);
  };

  const setQueryDate = (date) => {
    setDateTime(date);
  };

  const searchTheater = (e) => {
    const theaterName = e.target.value.trim();
    if (!theaterName) {
      setTimrList({ ...tempList });
    }
    const newList = Object.entries(tempList).reduce((obj, [key, value]) => {
      if (key.includes(theaterName)) {
        obj[key] = value;
      }
      return obj;
    }, {});
    setTimrList({ ...newList });
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
      setTimrList({
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
        <Post backDrop="https://movies.yahoo.com.tw/i/o/production/movies/March2021/vsfkM9g2D2WvlOqvcuS2-672x953.jpg" />
        <Description>
          <h1>{title}</h1>
          <StyledDiv>
            <FormControl className={classes.formControl}>
              <InputLabel id="arae-label">選擇地區</InputLabel>
              <Select labelId="arae-label" value={area} onChange={getAreaValue}>
                {areaItems.map((areaInfo) => (
                  <MenuItem value={areaInfo.area_id} key={areaInfo.area_id}>
                    {areaInfo.area_name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <Search
              text="search movie title"
              width="50"
              searchEvent={searchTheater}
            />
          </StyledDiv>
          <div className={classes.root}>
            {[0, 1, 2, 3, 4].map((num) => {
              const date = new Date(2021, 2, 26);
              //const date = new Date(new Date());
              date.setDate(date.getDate() + num);
              return (
                <>
                  <Paper elevation={2} key={`${num}-Paper`}>
                    <Button
                      className={classes.btn}
                      key={`${num}-Button`}
                      onClick={() => {
                        setQueryDate(date);
                      }}
                    >
                      {' '}
                      <p
                        key={`${num}-p`}
                        style={{ margin: '0', fontSize: '20px' }}
                      >
                        {date.getMonth() + 1} 月 <br />
                        {date.getDate()}日
                      </p>
                    </Button>
                  </Paper>
                </>
              );
            })}
          </div>
          <h1>{city}</h1>
          <List>
            {Object.keys(timeList).map((key) => {
              return (
                <li key={key}>
                  {key}:
                  <div key={`${key}-div`}>
                    {Object.keys(timeList[key]).map((type) => {
                      return (
                        <>
                          <div key={`${key}-${type}`}>{type}</div>
                          <div key={`${key}-${type}-time`}>
                            {timeList[key][type].map(({ show_time }) => {
                              return (
                                <button key={`${key}-${type}-${show_time}`}>
                                  {show_time}
                                </button>
                              );
                            })}
                          </div>
                        </>
                      );
                    })}
                  </div>
                </li>
              );
            })}
          </List>
        </Description>
      </CardCont>
    </Container>
  );
}

const showTimeListGroupByType = (theaterArray, showTime) => {
  return theaterArray.reduce((obj, theater) => {
    const showTimeInfo = showTime.filter(
      ({ theater_id }) => theater.theater_id === theater_id
    );
    if (showTimeInfo.length > 0) {
      obj[theater.theater_name] = showTimeInfo.reduce((typeObj, timeObj) => {
        const { type } = timeObj;
        if (!typeObj[type]) {
          typeObj[type] = [];
        }
        typeObj[type].push(timeObj);

        return typeObj;
      }, {});
    }
    return obj;
  }, {});
};

const setDateFormat = (date) => {
  const month = `${date.getMonth() + 1}`.padStart(2, '0');
  const day = `${date.getDate()}`.padStart(2, '0');
  return `${date.getFullYear()}-${month}-${day}`;
};
