import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import MainContainer from "./components/MainContainer";
import { getEventsByParams } from "./services/heliaService";

function App() {
  useEffect(() => {
    getEventsByParams({ city: "Detroit", sort: "name,desc" }).then(
      (response) => {
        console.log(response);
      }
    );
  }, []);
  return (
    <div className="App">
      <Header />
      <MainContainer />
    </div>
  );
}

export default App;
