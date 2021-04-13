import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import GlobalStyle from './components/GlobalStyle';
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
} from '@apollo/client';
import { setContext } from 'apollo-link-context';
import { RecoilRoot } from 'recoil';

const uri = process.env.REACT_APP_URI;

//啟動快取
const cache = new InMemoryCache();
const httplink = createHttpLink({ uri });
const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: localStorage.getItem('token') || '',
    },
  };
});

// @ts-ignore
const link = authLink.concat(httplink);
const client = new ApolloClient({
  // @ts-ignore
  link,
  cache,
  //啟用開發者工具
  connectToDevTools: true,
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <RecoilRoot>
      <GlobalStyle />
      <App />
    </RecoilRoot>
  </ApolloProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
