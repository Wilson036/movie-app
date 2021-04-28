const { gql } = require('@apollo/client');

const GET_AREA_INFO = gql`
  query queryAllArea {
    queryAllArea {
      area_name
      area_id
    }
  }
`;

const GET_THEATER_INFO = gql`
  query getAllTheaters {
    getAllTheaters {
      theater_id
      theater_name
      area_id
    }
  }
`;

const GET_MOVIES = gql`
  query queryMoviesByDate($date: String!) {
    queryMoviesByDate(date: $date) {
      movie_id
      title
      anticipation
      img_src
      release_date
    }
  }
`;

const GET_SHOW_TIME = gql`
  query queryTimeById($id: String!) {
    queryTimeById(id: $id) {
      theater_id
      type
      show_time
    }
  }
`;

const GET_USER_INFO = gql`
  query me {
    me {
      username
    }
  }
`;

export {
  GET_AREA_INFO,
  GET_THEATER_INFO,
  GET_MOVIES,
  GET_SHOW_TIME,
  GET_USER_INFO,
};
