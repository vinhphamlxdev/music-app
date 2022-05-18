import { Fragment } from "react";
import "~/App.css";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "~/styles/GlobalStyles";
import { publicRoutes } from "./routes";
import DefaultLayout from "./components/DefaultLayout";
import {
  lonDonTheme,
  lightDarkTheme,
  dynamicBlueTheme,
  dynamicPink,
  xoneTheme,
  zmaTheme,
  eiffelTheme,
  iuTheme,
  lisaTheme,
  jennieTheme,
  jisooTheme,
  roseTheme,
  purpleTheme,
  jiChangWookTheme,
  darkTheme,
} from "./themes/ThemeData";
function App() {
  return (
    <Fragment>
      <ThemeProvider theme={darkTheme}>
        <GlobalStyles></GlobalStyles>
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component;
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <DefaultLayout>
                    <Page />
                  </DefaultLayout>
                }
              ></Route>
            );
          })}
        </Routes>
        ;
      </ThemeProvider>
    </Fragment>
  );
}

export default App;
