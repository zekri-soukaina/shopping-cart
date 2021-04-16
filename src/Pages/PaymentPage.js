import React from "react";
import { faCogs } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function PaymentPage() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        flexFlow: "wrap",
        boxShadow: "2px 8px 20px #ddd",
        padding: "20px",
        margin: "20px",
        borderRadius: "10px",
      }}>
      <h2 style={{ textAlign: "center" }}>payment page</h2>

      <div>
        {" "}
        <h1>
          {/* <FontAwesomeIcon icon={faCode} /> */}
          ... <FontAwesomeIcon icon={faCogs} />
        </h1>
      </div>
    </div>
  );
}
