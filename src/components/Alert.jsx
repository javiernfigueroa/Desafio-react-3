import React from "react";

function Alert({ message, type }) {
  return (
    <div className={`alert alert-${type} mt-3`} role="alert">
      {message}
    </div>
  );
}

export default Alert;
