import React from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();

  // button style

  return (
    <>
      <h1 className="new"> Contact page</h1>
      <div className="contact-buttons">
        <button style={buttonStyle} onClick={() => navigate("info")}>
          Contact Info
        </button>
        <button style={buttonStyle} onClick={() => navigate("form")}>
          Contact Form
        </button>
      </div>
    </>
  );
};

export default Contact;
export const buttonStyle = {
  padding: "10px",
  margin: "10px",
  backgroundColor: "#000",
  color: "white",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
};
