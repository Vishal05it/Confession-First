import React from "react";
import "./TareefPage/style.css";
import { Routes } from "react-router-dom";
import rosePic from "./Styles/rose_PNG66731-removebg-preview.png";
function Tareef() {
  return (
    <>
      <section class="mainSect">
        <p>
          * You have all the qualities a man wants in his woman, <br />
          not just the physical beauty, but the inner beauty :
        </p>
        <div>
          <p>Good Nature</p>
          <p>Caring</p>
          <p>Loyal</p>
          <p>Beautiful</p>
          <p>Strong</p>
          <p>Supportive</p>
          <p>Hard Worker</p>
          <p>Funny</p>
          <p>Dayalu</p>
          <p>Listener</p>
          <p>Loving</p>
          <p>Romantic</p>

          <p>My Comfort zone</p>
          <p>Ambitious</p>
          <p>Vibe Matching</p>
          <p>Pretty</p>
          <p>Cute</p>
          <p>Hot</p>
        </div>
        <img
          src={rosePic}
          className="rosePic"
          style={{
            height: "250px",
            position: "fixed",
            left: "2%",
            bottom: "7.8%",
            transform: "rotate(-55deg)",

            animation: `rosePop1 1.5s linear 1 forwards`,
          }}
          alt=""
        />
        <img
          src={rosePic}
          style={{
            height: "250px",
            position: "fixed",
            right: "2%",
            bottom: "7.5%",
            transform: "rotate(55deg) scaleX(-1)",

            animation: `rosePop2 1.5s linear 1 forwards`,
          }}
          alt=""
          className="rosePic"
        />
      </section>
    </>
  );
}

export default Tareef;
