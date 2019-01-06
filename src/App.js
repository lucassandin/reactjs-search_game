import React, { Fragment } from "react";

import Main from "./pages/main";

import GlobalStyle from "./style/global";

const App = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <Main />
    </Fragment>
  );
};

export default App;
