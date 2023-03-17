import "./App.css";
import LoginPage from "./Pages/LoginPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import Main from "../src/Components/Main"
function App() {
  return (
    <React.Fragment>
      <Router>
          <Routes>
            <Route exact path="/" element={<LoginPage />} />
            <Route exact path="/home" element={<Main />} />
          </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
