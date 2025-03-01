import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const SelectedUserDetails = () => {
  const userDetails = useLoaderData();
  return (
    <div
      style={{
        marginTop: "5px",
        border: "1px solid black",
        padding: "20px 80px",
        borderRadius: "10px",
      }}
    >
      <p>
        <b>UserId: </b> {userDetails.id} <br />
        <b>Name: </b> {userDetails.name} <br />
        <b>Email: </b> {userDetails.email} <br />
        <b>Address: </b> {userDetails.address["city"]}
      </p>
    </div>
  );
};

export default SelectedUserDetails;

export const userDetailsLoader = async ({ params }) => {
  const { id } = params;

  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  if (!res.ok) {
    throw Error("Could not find the user details");
  }
  return res.json();
};
