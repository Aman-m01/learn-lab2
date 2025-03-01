import React from "react";
import { useNavigate, useRouteError } from "react-router-dom";
import { buttonStyle } from "../pages/Contact";
import newimg from "../assets/newimg.png";

const Error = () => {
  const error = useRouteError();
  const navigate = useNavigate();
  return (
    <div
      style={{
        border: "1px solid black",
        borderRadius: "7px",
        margin: "3px",
        padding: "20px 70px",
      }}
    >
      <h3>An error occured</h3>
      <img
        src={newimg}
        alt="Error"
        style={{
          maxWidth: "200px",
          width: "80%",
          height: "auto",
          margin: "10px 0",
        }}
      />
      <img
        src={newimg}
        alt="Error"
        style={{
          maxWidth: "200px",
          width: "80%",
          height: "auto",
          margin: "10px 0",
        }}
      />

      <p style={{ color: "red" }}>{error.message}</p>
      <button
        style={buttonStyle}
        onClick={() => {
          navigate("/");
        }}
      >
        Go to homepage
      </button>
    </div>
  );
};

export default Error;
