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
          <h1 style={{ color: "red", fontSize: 120, fontWeight: 800 }}>
            You Lost
          </h1>
          <Link style={{ textDecoration: "none" }} to="/">
            <div
              style={{
                backgroundColor: "rgba(0,0,0,0.5)",
                color: "rgba(255,255,255,0.6)",
                padding: "20px 30px",
                borderRadius: 10,
                fontWeight: 500,
                marginTop: 20,
              }}>
              Return to main page
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
