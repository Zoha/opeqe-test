import React from "react";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Layout from "./components/Layout";
import HeadSlider from "./components/common/HeadSlider";
import FoodCarousels from "./components/common/FoodCarousels";

import "./App.css";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#026764"
    },
    secondary: {
      main: "#282828"
    }
  }
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Layout>
          <HeadSlider />
          <FoodCarousels />
        </Layout>
      </ThemeProvider>
    </div>
  );
}

export default App;
