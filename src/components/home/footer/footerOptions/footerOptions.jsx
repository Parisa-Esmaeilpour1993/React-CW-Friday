import React from "react";
import AboutUs from "../aboutUs/aboutUs";
import Support from "../support/support";
import Social from "../social/social";

function FooterOptions() {
  return (
    <div>
      <div className="right-side-footer">
        <AboutUs />
        <Support />
        <Social />
      </div>
    </div>
  );
}

export default FooterOptions;
