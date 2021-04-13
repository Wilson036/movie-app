import { createGlobalStyle } from 'styled-components';
import normalize from 'normalize.css';

const GlobalStyles = createGlobalStyle`
    ${normalize}

    * {
        @import "https://fonts.googleapis.com/css?family=Lato:100,300,400,700,900";
      }

    *, *:before, *:after {
        box-sizing: border-box;
      }
    
      body,
      html {
        height: 100%;
        margin: 0;
      }
    
      body {
        font-family: "Lato", sans-serif;
        background-color: #fff;
        line-height: 1.4;
        background: #221f1f;
        color: #ffffff;
      }

      ul{
        padding: 0;
        margin: 0;
        list-style: none;
      }


    
      a:link,
      a:visited {
        color: #0077cc;
      }
    
      a:hover,
      a:focus {
        color: #004499;
      }
    
      code,
      pre {
        max-width: 100%;
        overflow: auto;
        margin: 0 auto;
      }
`;
export default GlobalStyles;
