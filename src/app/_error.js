import React from "react";

export default function _Error() {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>Error {statusCode}</h1>
      <p>
        {statusCode
          ? `A server error has occurred - Error code: ${statusCode}`
          : "An unexpected error has occurred"}
      </p>
    </div>
  );
}
