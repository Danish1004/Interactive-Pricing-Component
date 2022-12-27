import React from "react";
import "./styles.css";
import { ReactComponent as CheckSVG } from "./images/icon-check.svg";
function PricingBenefits() {
  return (
    <div className="pricingBenefits">
      <div className="pricingBenefits-benefits">
        <div className="benefits-item">
          <CheckSVG />
          <span className="benefits-item">Unlimited websites</span>
        </div>
        <div className="benefits-item">
          <CheckSVG />
          <span className="benefits-item">100% data ownership</span>
        </div>
        <div className="benefits-item">
          <CheckSVG />
          <span className="benefits-item">Email reports</span>
        </div>
      </div>

      <div className="pricingBenefits-trial">
        <button className="trial-button">Start my trial</button>
      </div>
    </div>
  );
}

export default PricingBenefits;
