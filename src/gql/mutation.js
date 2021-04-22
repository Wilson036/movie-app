const { gql } = require('@apollo/client');

const UPDATE_SHOW_TIME = gql`
  mutation queryTimeByMovieId(
    $id: String!
    $date: String!
    $theater_ids: [String!]!
  ) {
    queryTimeByMovieId(id: $id, date: $date, theater_ids: $theater_ids) {
      theater_id
      type
      show_time
    }
  }
`;

export { UPDATE_SHOW_TIME };
