import React, { useEffect, useRef, useState } from "react";
import "./Styles/MainSect.css";
import lock from "./Styles/pngtree-stylish-heart-shape-red-love-padlock-clipart-illustration-png-image_15447128.png";
import keyImg from "./vintage-heart-shaped-key-symbolizing-love-and-romance-png.png";
import hrtImg from "./Styles/heart-removebg-preview.png";
import rosePic from "./Styles/rose_PNG66731-removebg-preview.png";
import sparkles from "./Styles/clearSparkles-removebg-preview.png";
import SparkleBox from "./SparkleBox";
import { NavLink } from "react-router-dom";
import Tareef from "./Tareef";
function MainSect() {
  let wrap1 = useRef();
  let wrap2 = useRef();
  let key = useRef();
  let popHeading = useRef();
  let sparklesImg = useRef();
  let outSect = useRef();
  let imgDivRef = useRef();
  let [open, setOpen] = useState("none");
  let [showRose, setRose] = useState("none");
  let [popAnim, setPopAnim] = useState("");
  let [roseAnim1, setRoseAnim1] = useState("");
  let [roseAnim2, setRoseAnim2] = useState("");
  let [y, setY] = useState(0);
  let [x, setX] = useState(0);
  let [showTareef, setTareef] = useState("none");
  let [imgHt, setImgHt] = useState(0);
  return (
    <>
      <section
        id="outSect"
        ref={outSect}
        onMouseMove={(e) => {
          key.current.style.top = `${e.clientY - 50}px`;
          key.current.style.left = `${e.clientX + 5}px`;

          setX(e.clientX);
          setY(e.clientY);
        }}
        onClick={() => {
          setImgHt(40);
          setTimeout(() => {
            setImgHt(0);
          }, 1100);
        }}
      >
        <img src={keyImg} alt="" id="keyPic" ref={key} />
        <div
          id="imgDiv"
          style={{
            display: open,
            top: `${y}px`,
            left: `${x}px`,
            height: `${imgHt}px`,
            width: "100px",
          }}
        >
          <img
            src={sparkles}
            alt=""
            id="sparkles"
            ref={sparklesImg}
            style={{
              height: "100%",
              animation: "sparklesMove 1.2s linear infinite forwards",
            }}
          />
        </div>
        <span id="wrapSpan">
          <div className="wrapper wrap1" ref={wrap1}></div>
          <div className="wrapper wrap2" ref={wrap2}></div>
        </span>
        <img
          id="lock"
          src={lock}
          onClick={(e) => {
            wrap1.current.style.animation = "openGift 2s ease-in 1 forwards";
            wrap2.current.style.animation = "openGift 2s ease-in 1 forwards";
            e.target.style.animation = "vanishLock 1.7s linear 1 forwards";
            key.current.style.animation = "vanishKey 1.7s linear 1 forwards";

            setTimeout(() => {
              setOpen((open = "flex"));
              setPopAnim("popUp");
              console.log(open);
            }, 1400);
            setTimeout(() => {
              setRose("block");
              setRoseAnim1("rosePop1");
              setRoseAnim2("rosePop2");
            }, 1800);
          }}
        />
        <img
          src={rosePic}
          className="rosePic"
          style={{
            height: "250px",
            position: "fixed",
            left: "2%",
            bottom: "7.8%",
            transform: "rotate(-55deg)",
            display: showRose,
            animation: `${roseAnim1} 1.5s linear 1 forwards`,
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
            display: showRose,
            animation: `${roseAnim2} 1.5s linear 1 forwards`,
          }}
          alt=""
          className="rosePic"
        />
        <div
          style={{
            display: open,
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            padding: " 0px 160px",
            gap: "60px",
          }}
          id="innerDiv"
          rel={popHeading}
        >
          <h1
            style={{
              animation: `${popAnim} 1.7s linear 1 forwards`,
            }}
          >
            <span id="whiteH"> I</span> <span id="pinkH"> LOVE YOU</span>{" "}
            <span id="blueH"> MERI PYARI YASHI !</span>{" "}
            <span>
              <img
                src={hrtImg}
                style={{
                  height: "50px",
                  position: "relative",
                  top: "13px",
                }}
                id="hrtImg"
                alt=""
              />
            </span>
          </h1>
          <p
            style={{
              animation: `showPara 1.2s linear 1 forwards`,
            }}
          >
            * You're the most important person in my life since I've fallen in
            love with YOU <img src="" alt="" />
          </p>
          <p
            style={{
              animation: `showPara 1.2s linear 1 forwards`,
            }}
          >
            * You're everything I've ever wanted...No wait.. You're way more
            than I have ever wanted <img src="" alt="" />
          </p>
          <a
            id="clickBtn"
            style={{ display: open }}
            onClick={(e) => {
              setTareef("block");
              e.target.style.animation = "vanishBtn 1.2s linear 1 forwards";
            }}
          >
            <NavLink id="navLink" to="/tareef" target="_blank">
              Click here for more Tareef !
            </NavLink>
          </a>
        </div>
      </section>
    </>
  );
}

export default MainSect;
