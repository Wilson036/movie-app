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
  query queryTheaterById($id: String!) {
    queryTheaterById(id: $id) {
      theater_id
      theater_name
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

export { GET_AREA_INFO, GET_THEATER_INFO, GET_MOVIES };
