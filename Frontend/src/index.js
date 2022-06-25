import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Home from "./components/Home/Home";
import { Provider } from "react-redux";
import { store } from "./app/store";
import Login from "./components/Login/Login";
import Leaderboard from "./components/Leaderboard/Leaderboard";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";
import SignUp from "./components/SignUp/SignUp";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route exact path="/community" element={<Home />} />
        <Route exact path="/homepage" element={<Homepage />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/leaderboard" element={<Leaderboard />} />
        <Route exact path="/channels/:id" element={<Home />} />
      </Routes>
    </Provider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
