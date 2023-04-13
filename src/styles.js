import styled, { createGlobalStyle } from "styled-components";

export const AppContainer = styled.div`
  height: 100%;
  width: 100%;
  background: #272727;
`;

export const GlobalStyles = createGlobalStyle`
  html,
  body {
    @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
    font-family: 'Montserrat', sans-serif;
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    > #root {
      height: 100%;
    }
  }
  .react-photo-gallery--gallery {
    padding-top: 8px;
    padding-left: 8px;
  }
`;
