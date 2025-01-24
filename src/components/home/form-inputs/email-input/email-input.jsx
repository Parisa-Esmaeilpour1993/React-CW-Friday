import React from "react";
import "./email-input.css";

export default function EmailInput() {
  return (
    <div>
      <div className="emailInputContainer">
        <label className="emailLabel" htmlFor="email">
          E-mail:
        </label>
        <input className="emailInput" type="email" />
      </div>
    </div>
  );
}
