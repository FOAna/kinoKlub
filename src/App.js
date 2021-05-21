import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import SearchPage from "./SearchPage";
import "./App.css";
import MainPage from "./MainPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/search">
            <SearchPage></SearchPage>
          </Route>
          <Route path="/">
            <MainPage></MainPage>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
