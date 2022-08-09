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
import Details from "./components/Details";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/events/search" element={<Main />} />
          <Route path="/events/details/:id" element={<Details />} />
          <Route path="/events/favorites" element={<Favorites />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
