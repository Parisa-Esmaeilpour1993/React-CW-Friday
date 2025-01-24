import React from "react";
import "./footer.css";
import FooterLogo from "./footerLogo/footerLogo";
import FooterOptions from "./footerOptions/footerOptions";

function Footer() {
  return (
    <div className="footer-container">
      <FooterLogo />
      <FooterOptions />
    </div>
  );
}

export default Footer;
