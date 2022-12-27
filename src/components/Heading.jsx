import React from "react";
import "./styles.css";
function Heading() {
  return (
    <header className="header">
      <h1 className="header-title">Simple, traffic-based pricing</h1>
      <span className="header-description">Sign-up for our 30-day trial.</span>
      <span className="header-description">No credit card required.</span>
    </header>
  );
}

export default Heading;
