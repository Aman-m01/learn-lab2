import React from "react";
import { useNavigate } from "react-router-dom";
import { buttonStyle } from "../pages/Contact";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1>404 | Page not found</h1>;
      <button style={buttonStyle} onClick={() => navigate("/")}>
        Go to homepage
      </button>
    </>
  );
};

export default NotFound;
