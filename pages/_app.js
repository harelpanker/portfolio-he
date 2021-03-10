import { createGlobalStyle } from 'styled-components';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <GlobalStyle />
    </>
  );
}

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html,
  body {
    font-family: 'Rubik', sans-serif;
    background-color: #1b1b1b;
    color: white;
    overflow-x: hidden;
    font-size: 16px;
  }
  html {
    @media (max-width: 1700px) {
      font-size: 75%;
    }
  }
  button {
    font-family: 'Rubik', sans-serif;
    font-weight: bold;
    font-size: 1.1rem;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 3px solid #23d997;
    background: transparent;
    color: white;
    transition: all 0.5s ease;
    &:hover {
      background-color: #23d997;
      color: white;
    }
  }
  h1 {
    font-weight: lighter;
    font-size: 3.8rem;
  }
  h2 {
    font-weight: lighter;
    font-size: 3.8rem;
    padding-bottom: 7rem;
  }
  h3 {
    color: white;
  }
  h4 {
    font-weight: bold;
    font-size: 2rem;
  }
  a {
    font-size: 1.1rem;
  }
  span {
    font-weight: bold;
    color: #23d997;
  }
  p {
    padding: 2.5rem 0rem;
    color: #ccc;
    font-size: 1.4rem;
    line-height: 150%;
  }
`;

export default MyApp;
