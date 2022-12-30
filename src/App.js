import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "scss/head.module.scss";
import React from "react";
const Lazy = React.lazy(() => import("./scenes/home"));
function App() {
  const Loading = (
    <div className={styled.loader}>
      <span className="loader"></span>
    </div>
  );
  return (
    <main className={styled.App}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <React.Suspense fallback={Loading}>
                <Lazy />
              </React.Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
