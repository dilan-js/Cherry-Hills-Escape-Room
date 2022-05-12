import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "./LandingPage.css";
export default function LandingPage() {
  const history = useHistory();
  const directions = [
    {
      number: 1,
      text: "Please do this.",
    },
    {
      number: 2,
      text: "Please do this.",
    },
    {
      number: 3,
      text: "Please do this.",
    },
  ];

  const handleClick = (e) => {
    history.push("/begin");
  };

  return (
    <>
      <div className="mainHeader">
        <Navbar bg="transparent" variant="dark">
          <Container fluid>
            <div
              style={{
                backgroundColor: "rgba(255, 0, 0, 0.6)",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                padding: "3px 30px",
              }}>
              <Navbar.Brand style={{ margin: "0px" }} href="/">
                Escaping Cherry Hills
              </Navbar.Brand>
            </div>
            <Nav className="me-auto">
              {/* <Nav.Link href="#home">Home</Nav.Link> */}
              <Nav.Link href="#get_started">Get Started</Nav.Link>
              {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
            </Nav>
          </Container>
        </Navbar>
        <div
          style={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <h1 style={{ color: "white", fontWeight: 800 }}>
            {" "}
            Welcome to Escaping Cherry Hills.
          </h1>
          <div
            id="get_started"
            style={{
              backgroundColor: "rgba(0,0,0, 0.4)",
              width: 600,
              paddingTop: 10,
              paddingBottom: 10,
              borderRadius: 10,
            }}>
            <div style={{ fontSize: 22, color: "#f8f8f8", fontWeight: 500 }}>
              Before you begin, please read the following instructions:
            </div>
            {directions.map((direction) => (
              <div style={{ fontSize: 20, color: "#f8f8f8" }}>
                {`${direction.number}. ${direction.text}`}
              </div>
            ))}
          </div>
          <div style={{ marginTop: 10 }}>
            <Button
              style={{ fontSize: 25, width: 200 }}
              variant="success"
              onClick={handleClick}>
              Get Started
            </Button>{" "}
          </div>
        </div>
      </div>
    </>
  );
}
