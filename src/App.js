import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Hero } from "./components/Hero";
import { Playground } from "./components/Playground";

function App() {
  

  return (
    <Suspense>
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Playground />

          </>
        }
      />
    </Routes>
  </Suspense>
  )
}

export default App