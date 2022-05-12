import React from "react";
import { Navbar, Container, Nav, Button, Card } from "react-bootstrap";
import { useHistory, Link } from "react-router-dom";
import "./LandingPage.css";
export default function Home({ hasStarted }) {
  const history = useHistory();

  const handleClick = () => {
    // history.push("/begin");
    history.pushState(null, document.title, "/begin");
  };

  return (
    <>
      <div className="mainHeader">
        <div
          style={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <h1 style={{ color: "white", fontWeight: 800 }}>The Rooms</h1>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="locker-room">
              <div
                style={{
                  backgroundColor: "white",
                  padding: 70,
                  fontSize: 25,
                  fontWeight: 500,
                  marginTop: 10,
                  marginRight: 10,
                }}>
                The Locker Room
              </div>
            </Link>
            <div
              style={{
                backgroundColor: "white",
                padding: 70,
                fontSize: 25,
                fontWeight: 500,
                marginTop: 10,
                marginRight: 10,
                color: "transparent",
                textShadow: "0 0 5px rgba(0,0,0,0.09)",
              }}>
              The Locker Room
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div
              style={{
                backgroundColor: "white",
                padding: 70,
                fontSize: 25,
                fontWeight: 500,
                marginTop: 10,
                marginRight: 10,
                color: "transparent",
                textShadow: "0 0 5px rgba(0,0,0,0.09)",
              }}>
              The Locker Room
            </div>
            <div
              style={{
                backgroundColor: "white",
                padding: 70,
                fontSize: 25,
                fontWeight: 500,
                marginTop: 10,
                marginRight: 10,
                color: "transparent",
                textShadow: "0 0 5px rgba(0,0,0,0.09)",
              }}>
              The Locker Room
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
