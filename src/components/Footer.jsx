import React from "react";
// import footerImg from "./img/logo (1).png";

export default function Footer() {
  return (
    <div id="Footer"
      className="footer d__flex align__items__center justify__content__space__between pz-10"
      style={{ padding: "10px 20px", zIndex: "100", backgroundColor: "#191919", textAlign:"center"}}
    >
      <span
        className="copyright"
        style={{ color: "#c6c9d8", fontSize: "14px", opacity: "0.75", textAlign:"center" }}
      >
        Copyright © 2022 Designed and Built by Abhishekh Dubey.
        
      </span>
    </div>
  );
}
