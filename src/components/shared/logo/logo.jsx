import React from "react";
import imgLogo from "../../../assets/images/logo.jpg";

export default function Logo() {
  return (
    <div className="header-logo">
      <img src={imgLogo} alt="logo" className="header-icon" />
    </div>
  );
}
