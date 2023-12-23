import { createGlobalStyle } from 'styled-components';
import pv from '@/assets/pv.woff2';
// import styled from 'styled-components';

export const Global = createGlobalStyle`
  @font-face {
    font-family: "pv";
    src: url(${pv}) format("woff2");
    font-display: block;
  }

  * {
    box-sizing: border-box;
    color: var(--font-rev);

    ::selection {
      background: var(--selection-bg);
      color: var(--selection-font);
    }

    font-family: "pv";
  }

  html {
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 16px;

    background-color: #fbfbfb;
  }

  body {
    display: block;
    max-width: 500px;
    width: 100%;
    max-height: 1104px;
    height: 100%;

    margin: 0;
    padding: 12px;
    touch-action: pan-x pan-y;

    & > #root {
      height: 100%;
    }
  }

  body, button, input, textarea{
    font-family : Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;
  }

  p, h1, h2, h3, h4, h5, h6 ,ul, li {
    margin: 0;
  }

  button, input, textarea {
    padding: 0;
  }


  ::-webkit-scrollbar {
    width: 9px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--font-basic);
    background-clip: padding-box;
    border-right: 3px solid transparent;
    border-top: 73px solid transparent;
    border-bottom: 73px solid transparent;;
    border-left: 3px solid transparent;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: var(--font-rev);
    background-clip: padding-box;
    border-right: 3px solid transparent;
    border-top: 73px solid transparent;
    border-bottom: 73px solid transparent;;
    border-left: 3px solid transparent;
  }
`;
