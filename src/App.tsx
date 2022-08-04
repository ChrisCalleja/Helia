import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import MainContainer from "./components/MainContainer";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import Favorites from "./components/Favorites";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<MainContainer />} />
          <Route path="/events/search" element={<MainContainer />} />
          {/* <Route path="/gifs/:id/details" element={<Details />} /> */}
          {/* <Route path="/gifs/favorites" element={<Favorites />} /> */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
