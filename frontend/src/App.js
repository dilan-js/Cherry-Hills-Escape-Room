import logo from "./logo.svg";
import "./App.css";
import history from "./global/history";

import { Navbar, Container, Nav } from "react-bootstrap";
import LandingPage from "./pages/LandingPage";
import LockerRoom from "./pages/LockerRoom";
import Home from "./pages/Home";
import YouLost from "./pages/YouLost";

import { Routes, BrowserRouter, Link, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [hasStarted, sethasStarted] = useState(true);
  const [lockerRoomStart, setLockerRoomStart] = useState(true);
  return (
    <BrowserRouter history={history}>
      <div className="App">
        <div className="main_content">
          <Route exact path="/" render={() => <LandingPage />} />
          <Route
            exact
            path="/begin"
            render={() => <Home hasStarted={true} />}
          />
          <Route
            exact
            path="/locker-room"
            render={() => <LockerRoom lockerRoomStart={lockerRoomStart} />}
          />
          <Route exact path="/lost" render={() => <YouLost />} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
