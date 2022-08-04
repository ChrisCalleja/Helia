import "./App.css";
import Header from "./components/Header";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import Favorites from "./components/Favorites";
import Main from "./components/Main";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/events/search" element={<Main />} />
          {/* <Route path="/gifs/:id/details" element={<Details />} /> */}
          {/* <Route path="/gifs/favorites" element={<Favorites />} /> */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
