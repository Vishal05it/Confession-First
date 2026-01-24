import { useEffect, useState } from "react";
import "./App.css";
import MainSect from "./Components/MainSect";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Tareef from "./Components/Tareef";
import song from "./TujhMeRab.mp4";
function App() {
  useEffect(() => {
    let htmlTag = document.querySelector("html");
    let mainSong = document.querySelector("audio");
    htmlTag.addEventListener("click", () => {
      mainSong.play();
    });
    mainSong.autoplay = true;
  }, []);
  return (
    <>
      <audio src={song} autoPlay loop></audio>
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
