import React from "react";

function FooterOptions() {
  return (
    <div>
      <div className="right-side-footer">
        <div className="footer-options">
          <div className="footer-options-header">About us</div>
          <div className="inside-footer-options">
            <span>Mission</span>
            <span>Team</span>
            <span>Newsletter</span>
          </div>
        </div>

        <div className="footer-options">
          <div className="footer-options-header">Support</div>
          <div className="inside-footer-options">
            <span>Contact</span>
            <span>Privacy and Policy</span>
            <span>FAQ's</span>
          </div>
        </div>

        <div className="footer-options">
          <div className="footer-options-header">Social</div>
          <div className="inside-footer-options">
            <img
              className="social-imgs"
              src="https://www.svgrepo.com/show/475658/instagram-color.svg"
              alt="Instagram"
            />
            <img
              className="social-imgs"
              src="https://www.svgrepo.com/show/448234/linkedin.svg"
              alt="LinkedIn"
            />
            <img
              className="social-imgs"
              src="https://www.svgrepo.com/show/475700/youtube-color.svg"
              alt="YouTube"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterOptions;
