import React from "react";
import ContentLoader from "react-content-loader";

export default function Loader() {
  return (
    <div style={{ display: "table" }}>
      {Array(6)
        .fill(null)
        .map((i, k) => (
          <ContentLoader
            width="33.3333%"
            key={k}
            height="300px"
            style={{ float: "left", padding: "10px", boxSizing: "border-box" }}
          >
            <rect x="0" y="0" rx="5" ry="5" width="100%" height="200px" />
            <rect x="0" y="210px" rx="3" ry="3" width="100%" height="10" />
            <rect x="0" y="230px" rx="3" ry="3" width="80%" height="10" />
            <rect x="0" y="250px" rx="3" ry="3" width="100%" height="10" />
          </ContentLoader>
        ))}
    </div>
  );
}
