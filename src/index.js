import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import { AppContainer, GlobalStyles } from "./styles";
import ImageGallery from "./ImageGallery";

const App = () => (
  <ThemeProvider
    theme={{
      pageBackgroundColor: "#101010",
      pageContentFontColor: "#e2e5ec",
      pageContentLinkHoverColor: "aquamarine",
      pageContentSelectionColor: "aquamarine",
      headerNavFontColor: "#e2e5ec",
      accentColor: "#1f1f1f"
    }}
  >
    <AppContainer>
      <GlobalStyles />
      <ImageGallery />
    </AppContainer>
  </ThemeProvider>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
