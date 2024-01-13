import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Hero } from "./components/Hero";
import { Playground } from "./components/Playground";
import { Login } from "./components/Login"
import { Signup } from "./components/Signup";

function App() {
  

  return (
    <Suspense>
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Signup />

          </>
        }
      />
    </Routes>
  </Suspense>
  )
}

export default App