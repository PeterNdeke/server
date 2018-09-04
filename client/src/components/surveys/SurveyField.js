//contans logic to render a single text and label input
import React from "react";

export default ({ input, label }) => {
  return (
    <div>
      <label>{label}</label>
      <input {...input} />
    </div>
  );
};
