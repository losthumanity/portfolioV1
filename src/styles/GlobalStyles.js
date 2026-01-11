import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: #050505;
    color: #0ff;
    font-family: 'Courier New', Courier, monospace;
    overflow: hidden;
  }

  /* Scrollbar */
  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-track {
    background: #000;
  }
  ::-webkit-scrollbar-thumb {
    background: #0ff;
    border-radius: 5px;
  }

  h1, h2, h3 {
    text-transform: uppercase;
    text-shadow: 0 0 5px #0ff, 0 0 10px #0ff;
  }

  a {
    color: #f0f;
    text-decoration: none;
    transition: all 0.3s ease;
    &:hover {
      text-shadow: 0 0 10px #f0f;
    }
  }

  #root {
    width: 100vw;
    height: 100vh;
  }

  /* CRT Scanline Effect Overlay */
  &::after {
    content: " ";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06));
    z-index: 2;
    background-size: 100% 2px, 3px 100%;
    pointer-events: none;
  }
`;

export default GlobalStyles;
