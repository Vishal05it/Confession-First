import { useState } from "react";
import "./App.css";
import MainSect from "./Components/MainSect";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Tareef from "./Components/Tareef";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainSect />} />
          <Route path="/tareef" element={<Tareef />} />
        </Routes>
        {/* <Outlet /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
