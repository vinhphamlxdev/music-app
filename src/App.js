import { Fragment } from "react";
import "~/App.css";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "~/styles/GlobalStyles";
import { publicRoutes } from "./routes";
import DefaultLayout from "./components/DefaultLayout";
import { useSelector } from "react-redux";
function App() {
  const { theme } = useSelector((state) => state.global);
  return (
    <Fragment>
      <ThemeProvider theme={theme}>
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
