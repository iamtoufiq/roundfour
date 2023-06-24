import React from "react";

const Tag = ({ curTag }) => {
  return (
    <div
      style={{
        display: "inline-block",
        backgroundColor: "whitesmoke",
        marginLeft: "3px",
        color: "blue",
        fontWeight: "bold",
        cursor: "pointer",
      }}
    >
      #{curTag}
    </div>
  );
};

export default Tag;
