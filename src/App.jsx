import { useEffect, useState } from "react";
import "./App.css";
import MainSect from "./Components/MainSect";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Tareef from "./Components/Tareef";
import song from "./TujhMeRab.mp4";
function App() {
  useEffect(() => {
    let mainSong = document.querySelector("audio");
    mainSong.src = song;
    mainSong.autoplay = true;
    //mainSong.controls = true;
  }, []);
  return (
    <>
      <audio autoPlay loop></audio>
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
