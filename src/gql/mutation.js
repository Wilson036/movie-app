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

const SIGN_IN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password)
  }
`;

const SIGNUP_USER = gql`
  mutation registerUser(
    $username: String!
    $email: String!
    $password: String!
  ) {
    registerUser(
      data: { username: $username, email: $email, password: $password }
    )
  }
`;

export { UPDATE_SHOW_TIME, LOGIN_BY_OAUTH, LOGOUT, SIGN_IN, SIGNUP_USER };
