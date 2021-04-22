import React, { useState } from 'react';
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
import { useMutation, useQuery } from '@apollo/client';
import { UPDATE_SHOW_TIME } from 'gql/mutation';

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
  height: 800px;
`;

const Description = styled.div`
  width: 50%;
  padding: 25px;
  color: #fafafa;
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

  // const { data, error, loading } = useQuery(GET_SHOW_TIME, {
  //   variables: {
  //     id: movie_id,
  //   },
  // });
  // if (!error && !loading) {
  //   console.log(data.queryTimeById);
  // }

  const [queryTimeByMovieId] = useMutation(UPDATE_SHOW_TIME);

  const getShowTimeList = async (id, date, theater_ids) => {
    try {
      const data = await queryTimeByMovieId({
        variables: {
          id,
          date,
          theater_ids,
        },
      });

      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  const areaItems = useRecoilValue(areasInfo);
  const theaterItems = useRecoilValue(theaterInfo);

  const classes = useStyles();
  const [area, setArea] = useState(28);

  const getAreaValue = (e) => {
    const areaId = e.target.value;
    setArea(areaId);

    const theaterArray = theaterItems.filter(
      ({ area_id }) => area_id === `${areaId}`
    );

    const theater_ids = theaterArray.map(({ theater_id }) => theater_id);
    getShowTimeList(movie_id, '2021-03-29', theater_ids);
  };

  return (
    <Container>
      <CardCont>
        <Post backDrop="https://movies.yahoo.com.tw/i/o/production/movies/March2021/vsfkM9g2D2WvlOqvcuS2-672x953.jpg" />
        <Description>
          <h1>{title}</h1>
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
          <div className={classes.root}>
            {[1, 2, 3, 4, 5].map((num) => {
              return (
                <>
                  <Paper elevation={2}>
                    <Button className={classes.btn}>
                      {' '}
                      <p style={{ margin: '0', fontSize: '20px' }}>
                        3 月 <br />
                        {25 + num}日
                      </p>
                    </Button>
                  </Paper>
                </>
              );
            })}
          </div>
        </Description>
      </CardCont>
    </Container>
  );
}

const getShowTimeList = (theater_ids, showTime) => {
  return theater_ids.reduce((obj, id) => {
    obj[id] = showTime
      .filter(({ theater_id }) => id === theater_id)
      .reduce((typeObj, timeObj) => {
        const { type } = timeObj;
        if (!typeObj[type]) {
          typeObj[type] = [];
        }
        typeObj[type].push(timeObj);

        return typeObj;
      }, {});
    return obj;
  }, {});
};
