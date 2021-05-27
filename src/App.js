import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import SearchPage from "./pages/SearchPage";
import "./App.css";
import MainPage from "./pages/MainPage";

function App() {
  fetch("http://localhost:3001", { method: "GET" })
    .then((response) => {
      return response.text();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/search">
            <SearchPage />
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
