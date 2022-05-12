import React, { useEffect } from "react";
import { Navbar, Container, Nav, Button, Card } from "react-bootstrap";
import { useHistory, Link } from "react-router-dom";
import "./LandingPage.css";

import { useTimer } from "react-timer-hook";

export default function Home({ lockerRoomStart }) {
  const history = useHistory();

  const handleClick = () => {
    // history.push("/begin");
    history.pushState(null, document.title, "/begin");
  };

  const handleReturn = () => {
    console.log("HEEEEY");
  };

  function MyTimer({ expiryTimestamp }) {
    const {
      seconds,
      minutes,
      hours,
      days,
      isRunning,
      start,
      pause,
      resume,
      restart,
    } = useTimer({
      expiryTimestamp,
      onExpire: () => history.push("/lost"),
    });

    return (
      <div style={{ textAlign: "left", paddingLeft: 10 }}>
        <div style={{ fontSize: "40px", color: "red", fontWeight: 600 }}>
          <span>{minutes == 0 ? `00` : minutes}</span>:
          <span>{seconds == 0 ? `00` : seconds}</span>
        </div>
      </div>
    );
  }

  const time = new Date();
  time.setSeconds(time.getSeconds() + 300); // 10 minutes timer

  return (
    <>
      <div className="mainHeader">
        <MyTimer expiryTimestamp={time} />

        <div
          style={{
            height: "100%",
            display: "flex",
            flexDirection: "column",

            alignItems: "center",
          }}>
          <h1 style={{ color: "white", fontWeight: 800 }}>The Locker Room</h1>
          <div style={{ display: "flex", flexDirection: "row" }}></div>
        </div>
      </div>
    </>
  );
}
