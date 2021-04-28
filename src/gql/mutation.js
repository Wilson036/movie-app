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

const LOGIN_BY_OAUTH = gql`
  mutation LoginWithOauth($email: String!, $id: String!) {
    LoginWithOauth(email: $email, id: $id)
  }
`;

const LOGOUT = gql`
  mutation logout {
    logout
  }
`;

export { UPDATE_SHOW_TIME, LOGIN_BY_OAUTH, LOGOUT };
