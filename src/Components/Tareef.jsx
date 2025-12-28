import React, { useEffect, useState } from "react";
import "./style.css";
import rosePic from "./Styles/rose_PNG66731-removebg-preview.png";
import hrtImg from "./Styles/heart-removebg-preview.png";
function Tareef() {
  return (
    <>
      <section className="mainSect">
        <p
          style={{
            animation: `showParaX 1.2s linear 1 forwards`,
          }}
        >
          * You have all the qualities a man wants in his woman, <br />
          not just the physical beauty, but the inner beauty :
        </p>
        <div
          style={{
            animation: `showParaX 1.2s linear 1 forwards`,
          }}
        >
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
          <p>Cute</p>
          <p>Relatable</p>
        </div>
        <h2
          style={{
            fontSize: "30px",
            position: "relative",
            zIndex: "3",
            animation: "squishing 2s linear infinite ",
            fontFamily: "sans-serif",
          }}
        >
          Thanks for coming into my life Mrs. Tiwari{" "}
          <img
            src={hrtImg}
            style={{
              height: "40px",
              position: "absolute",
              top: "-4%",
              right: "-8%",
              filter: "drop-shadow(0 0 5px red)",
            }}
            alt=""
          />
          <span
            style={{
              position: "absolute",
              top: "-45%",
              left: "-25%",
              width: "150%",
              backgroundColor: "rgba(255, 192, 203, 0.742)",
              height: "100%",
              zIndex: "-1",
              padding: "30px 100px",
              borderRadius: "10px",
            }}
          ></span>
        </h2>
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
