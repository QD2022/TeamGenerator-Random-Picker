import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <>
      <p>
        404 <br />
        Not Found
      </p>
      <Link to="/">Go back to RandomPicker</Link>
    </>
  );
}

export default NotFound;
