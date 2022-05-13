import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    align-items: center;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    margin: 0;
    padding: 0;
    font-family: font-family: 'Mali', cursive;
    transition: all 0.25s linear;
  }

  .text-color {
    color: ${({ theme }) => theme.text};
    transition: all 0.25s linear;
  }

  .box-color {
    background: ${({ theme }) => theme.box}
  }

  .line-color {
    border-color: ${({ theme }) => theme.text} !important;
  }
  `