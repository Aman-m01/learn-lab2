import React, { useState, useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Jobs = () => {
  const [loading, setLoading] = useState(true);
  let usersData = useLoaderData();

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <div
          style={{
            width: "40px",
            height: "40px",
            border: "4px solid #ccc",
            borderTop: "4px solid #333",
            borderRadius: "50%",
            animation: "spin 1s linear infinite",
          }}
        ></div>
        <style>{`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    );
  }

  if (!usersData || !usersData.length) {
    return (
      <p style={{ textAlign: "center", fontSize: "16px" }}>
        No users available...
      </p>
    );
  }

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "0 auto",
        padding: "16px",
        overflowY: "auto",
        maxHeight: "400px",
        scrollbarWidth: "thin",
        scrollbarColor: "#888 #f1f1f1",
      }}
    >
      {usersData.map((user) => (
        <Link
          key={user.id}
          to={`/jobs/${user.id}`}
          style={{
            display: "block",
            padding: "8px",
            textDecoration: "none",
            color: "black",
            border: "1px solid black",
            margin: "2px",
            borderRadius: "7px",
          }}
        >
          <h4 style={{ margin: "4px 0" }}>{user.name}</h4>
          <h4 style={{ margin: "4px 0", color: "gray", fontSize: "14px" }}>
            {user.email}
          </h4>
        </Link>
      ))}
    </div>
  );
};

export default Jobs;

export const jobsLoader = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");

  if (!res.ok) {
    throw new Error("Failed to fetch users");
  }

  return res.json();
};
