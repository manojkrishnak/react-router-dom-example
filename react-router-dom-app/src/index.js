import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import App from "./App";
import Help from "./Components/Help.jsx";
import Articles from "./Components/Articles.jsx";
import Article from "./Components/Article.jsx";
import NotFound from "./Components/NotFound";
import "./index.css";

ReactDOM.render(
  <BrowserRouter>
  <Route path={"/"} exact>
    <App />
  </Route>
   <Route path={"/articles"}>
    <Articles />
  </Route>
  <Route path={"/article/:id"} component={Article} />
  {/*<Route path={"/"}>
    <App />
  </Route>
  <Route path={"/"}>
    <App />
</Route> */}
  <Route path={"/help"}>
    <Help />
  </Route> 
  <Route component={NotFound} />
  </BrowserRouter>,
  document.getElementById("root")
);
