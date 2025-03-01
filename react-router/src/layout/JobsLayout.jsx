import React from "react";
import { Outlet } from "react-router-dom";

const JobsLayout = () => {
  return (
    <div>
      <h1>Job Openings (currently closed)</h1>
      <p>List of Selected users in our company</p>
      <Outlet />
    </div>
  );
};

export default JobsLayout;
