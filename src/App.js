import styled, { keyframes, ThemeProvider } from "styled-components";
import GlobalStyles from "./components/GlobalStyles";
import { Helmet } from "react-helmet";
import NavBar from "./components/NavBar";
import MainDisplay from "./components/MainDisplay";

const defaultTheme = {
  colors: {
    white: "#fff",
    darkBlue: "#070724",
    lightBlue: "#2D68F0",
    darkGrey: "#38384F",
    grey: "#838391",
    marine: "#419EBB",
    lightYellow: "#EDA249",
    purple: "#6D2ED5",
    lightRed: "#6D2ED5",
    red: "#D83A34",
    orange: "#CD5120",
    lightGreen: "#1EC1A2",
  },
};

function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <Helmet>
          <link
            href="https://fonts.googleapis.com/css2?family=Antonio:wght@400;700&display=swap"
            rel="stylesheet"
          />

          <link
            href="https://fonts.googleapis.com/css2?family=Spartan:wght@400;500;700&display=swap"
            rel="stylesheet"
          />
        </Helmet>
        <NavBar />

        <MainDisplay />
      </ThemeProvider>
    </>
  );
}

export default App;
export { defaultTheme };
