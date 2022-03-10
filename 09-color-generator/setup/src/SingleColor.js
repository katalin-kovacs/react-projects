import React, { useState, useEffect } from "react";
import rgbToHex from "./utils";

const SingleColor = ({ rgb, weight, index }) => {
  const [alert, setAlert] = useState(false);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setAlert(false);
    }, 3000);
    return () => clearTimeout(timeOut);
  }, [alert]);

  return (
    <article
      className={`color ${index > 10 && "color-light"}`}
      style={{ backgroundColor: `rgb(${rgb.join(", ")})` }}
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(rgbToHex(...rgb));
      }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{rgbToHex(...rgb)}</p>
      {alert && (
        <p className={`alert ${index > 10 && "color-light"}`}>
          copied to clipboard
        </p>
      )}
    </article>
  );
};

export default SingleColor;
