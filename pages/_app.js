import { ThemeProvider, createGlobalStyle } from 'styled-components';

import { theme } from '../theme.json';

const GlobalStyle = createGlobalStyle`


html {
  overflow-x: hidden;
  line-height: 1.15; 
  -webkit-text-size-adjust: 100%; 
}

body {
  margin: 0;
  font-size: 14px;

  @media only screen and (min-width: 1400px) and (max-width: 1919px) {
    font-size: 14px;
  }

  @media only screen and (min-width: 1200px) and (max-width: 1400px) {
    font-size: 13px;
  }

  @media only screen and (min-width: 992px) and (max-width: 1200px) {
    font-size: 13px;
  }

  @media only screen and (min-width: 768px) and (max-width: 992px) {
    font-size: 12px;
  }

  @media only screen and (min-width: 576px) and (max-width: 768px) {
    font-size: 12px;
  }

  @media only screen and (max-width: 576px) {
    font-size: 12px;
  }
}


main {
  display: block;
}


h1 {
  font-size: 2em;
  margin: 0.67em 0;
}


hr {
  box-sizing: content-box; 
  height: 0; 
  overflow: visible; 
}


pre {
  font-family: monospace, monospace; 
  font-size: 1em; 
}

a {
  background-color: transparent;
}


abbr[title] {
  border-bottom: none; 
  text-decoration: underline; 
  text-decoration: underline dotted; 
}

b,
strong {
  font-weight: bolder;
}


code,
kbd,
samp {
  font-family: monospace, monospace; 
  font-size: 1em; 
}


small {
  font-size: 80%;
}


sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}


img {
  border-style: none;
}


button,
input,
optgroup,
select,
textarea {
  font-family: inherit; 
  font-size: 100%;
  line-height: 1.15; 
  margin: 0; 
}


button,
input { 
  overflow: visible;
}


button,
select { 
  text-transform: none;
}


button,
[type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: 'button';
}


button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  border-style: none;
  padding: 0;
}


button:-moz-focusring,
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring {
  outline: 1px dotted 'ButtonText';
}


fieldset {
  padding: 0.35em 0.75em 0.625em;
}


legend {
  box-sizing: border-box; 
  color: inherit; 
  display: table; 
  max-width: 100%; 
  padding: 0; 
  white-space: normal; 
}


progress {
  vertical-align: baseline;
}


textarea {
  overflow: auto;
}


[type="checkbox"],
[type="radio"] {
  box-sizing: border-box; 
  padding: 0; 
}


[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}


[type="search"] {
  -webkit-appearance: 'textfield'; 
  outline-offset: -2px; 
}


[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}


::-webkit-file-upload-button {
  -webkit-appearance: 'button'; 
  font: inherit; 
}


details {
  display: block;
}


summary {
  display: list-item;
}


template {
  display: none;
}

[hidden] {
  display: none;
}

body.react-confirm-alert-body-element {
  overflow: hidden;
}

.react-confirm-alert-blur {
  filter: url(#gaussian-blur);
  filter: blur(2px);
  -webkit-filter: blur(2px);
}

.react-confirm-alert-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
  background: rgba(255, 255, 255, 0.9);
  display: -webkit-flex;
  display: -moz-flex;
  display: -ms-flex;
  display: -o-flex;
  display: flex;
  justify-content: center;
  -ms-align-items: center;
  align-items: center;
  opacity: 0;
  -webkit-animation: react-confirm-alert-fadeIn 0.5s 0.2s forwards;
  -moz-animation: react-confirm-alert-fadeIn 0.5s 0.2s forwards;
  -o-animation: react-confirm-alert-fadeIn 0.5s 0.2s forwards;
  animation: react-confirm-alert-fadeIn 0.5s 0.2s forwards;
}

.react-confirm-alert-body {
  font-family: Arial, Helvetica, sans-serif;
  width: 400px;
  padding: 30px;
  text-align: left;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 20px 75px rgba(0, 0, 0, 0.13);
  color: #666;
}

.react-confirm-alert-svg {
  position: absolute;
  top: 0;
  left: 0;
}

.react-confirm-alert-body > h1 {
  margin-top: 0;
}

.react-confirm-alert-body > h3 {
  margin: 0;
  font-size: 1.1em;
}

.react-confirm-alert-button-group {
  display: -webkit-flex;
  display: -moz-flex;
  display: -ms-flex;
  display: -o-flex;
  display: flex;
  justify-content: flex-start;
  margin-top: 20px;
}

.react-confirm-alert-button-group > button {
  outline: none;
  background: #333;
  border: none;
  display: inline-block;
  padding: 6px 18px;
  color: #eee;
  margin-right: 10px;
  border-radius: 5px;
  font-size: 0.8em;
  cursor: pointer;
}

@-webkit-keyframes react-confirm-alert-fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@-moz-keyframes react-confirm-alert-fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@-o-keyframes react-confirm-alert-fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes react-confirm-alert-fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

`;

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
