import { React, useState } from "react";
import Logo from "./assets/logo.svg";
import Dashboard from "./assets/illustration-dashboard.png";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import "./app.scss";

const App = () => {
  const [emailInput, setEmailInput] = useState("");
  // Handle Change
  const handleChange = (e) => {
    setEmailInput(e.target.value);
  };
  // Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    let emailChecker =
      "" ||
      emailInput.match(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      );
    if (emailChecker) {
      document.getElementById("errorpara").style.display = "none";
      document.getElementById("inputval").classList.remove("error");
      console.log(emailInput);
    } else {
      document.getElementById("errorpara").style.display = "block";
      document.getElementById("inputval").classList.add("error");
    }
  };
  return (
    // Main
    <main>
      {/* Header */}
      <header>
        <img src={Logo} alt="logo" />
        <h1>
          We are launching <span> soon!</span>
        </h1>
        <h2>Subscribe and get notified</h2>
      </header>
      {/* Form */}
      <form onSubmit={handleSubmit}>
        <div>
          <input
            placeholder="Your email Address"
            id="inputval"
            onChange={handleChange}
          />
          <p id="errorpara" style={{ display: "none" }}>
            Please provide valid email address
          </p>
        </div>
        <button type="submit">Notify Me</button>
      </form>
      {/* Main Image */}
      <img src={Dashboard} alt="Dashboard" />
      {/* Social Handles */}
      <div>
        <FaFacebookF />
        <FaTwitter />
        <FaInstagram />
      </div>
      {/* Copyright */}
      <p>&copy; Copyright Ping. All rights reserved.</p>
    </main>
  );
};

export default App;