import React, { useState } from "react";
import "./styles.css";
function Slider(props) {
  const [sliderValue, setSliderValue] = useState("3");
  let width1 = ((sliderValue - 1) * 25).toString() + "%";
  let width2 = (0.62 * (sliderValue - 1)).toString() + "rem";

  let styleSheet = {
    width: `calc(${width1} - ${width2})`,
  };

  function handleInput(event) {
    const { value } = event.target;
    setSliderValue(value);
    props.changePrice(value);
  }
  return (
    <div className="sliderContainer">
      <input
        onInput={handleInput}
        className="slider"
        value={sliderValue}
        type="range"
        min="1"
        max="5"
      />
      <div style={styleSheet} className="slider-track"></div>
    </div>
  );
}

export default Slider;
