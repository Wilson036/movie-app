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

const SEND_EMAIL = gql`
  mutation sendComfiredEmail($email: String!) {
    sendComfiredEmail(email: $email)
  }
`;
const CHANGE_PASSWORD = gql`
  mutation changePassword($password: String!, $token: String!) {
    changePassword(data: { password: $password, token: $token })
  }
`;
const SET_MOVIE_LIST = gql`
  mutation addFoviesMovie($favorite_movies: [String!]!) {
    addFoviesMovie(favorite_movies: $favorite_movies)
  }
`;

const GET_USER_INFO = gql`
  mutation me {
    me {
      username
      favorite_movies
      avatar
    }
  }
`;

export {
  UPDATE_SHOW_TIME,
  LOGIN_BY_OAUTH,
  LOGOUT,
  SIGN_IN,
  SIGNUP_USER,
  SEND_EMAIL,
  CHANGE_PASSWORD,
  SET_MOVIE_LIST,
  GET_USER_INFO,
};
