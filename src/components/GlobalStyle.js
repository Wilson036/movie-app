import { createGlobalStyle } from 'styled-components';
import normalize from 'normalize.css';

const GlobalStyles = createGlobalStyle`
    ${normalize}

    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
      margin: 0;
      padding: 0;
      border: 0;
      font-size: 100%;
      font: inherit;
      vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
      footer, header, hgroup, menu, nav, section {
      display: block;
    }
    body {
      line-height: 1;
    }
    ol, ul {
      list-style: none;
    }

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
      
      a,a:hover{
        color: #fff;
        text-decoration:none;
      }
     
    
    
    
      code,
      pre {
        max-width: 100%;
        overflow: auto;
        margin: 0 auto;
      }
`;
export default GlobalStyles;
