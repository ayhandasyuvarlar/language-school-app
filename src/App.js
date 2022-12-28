import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from 'scss/head.module.scss'
import React from "react";
import HomePage from "scenes/home";

function App() {
  return (
    <main className={styled.App}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
