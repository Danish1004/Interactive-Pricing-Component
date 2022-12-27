import React, { useState, useEffect } from "react";
import "./styles.css";
function ToggleBilling(props) {
  const [value, setValue] = useState("-25%");
  const mediaQueryList = window.matchMedia("(max-width: 500px)");

  function handleOrientationChange() {
    if (!mediaQueryList.matches) {
      console.log("finally");
      console.log("Hello");
      setValue("25% discount");
    } else {
      setValue("-25%");
    }
  }
  mediaQueryList.addEventListener("change", handleOrientationChange);

  useEffect(function () {
    handleOrientationChange();
  }, []);

  function handleClick() {
    if (props.billing === "monthly") {
      props.setBilling("yearly");
    } else {
      props.setBilling("monthly");
    }
  }
  return (
    <div className="toggleBilling">
      <p className="toggleBilling-item billing">Monthly Billing</p>
      <div className="toggleBilling-item toggle" onClick={handleClick}>
        <div
          style={{ left: props.billing === "monthly" ? "0.25rem" : "1.875rem" }}
          className="toggle-circle"
        ></div>
      </div>
      <p className="toggleBilling-item billing">Yearly Billing</p>
      <p className="toggleBilling-item discount">{value}</p>
    </div>
  );
}

export default ToggleBilling;
