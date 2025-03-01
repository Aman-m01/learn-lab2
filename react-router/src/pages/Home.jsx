import React from "react";
import Homeimg from "../assets/Homeimg.png";

const Home = () => {
  return (
    <div>
      <img
        src={Homeimg}
        alt="Error"
        style={{
          alignContent: "center",
          maxWidth: "200px",
          width: "80%",
          height: "auto",
          margin: "10px 0",
        }}
      />

      <h1 className="new">Home Page</h1>
    </div>
  );
};

export default Home;
