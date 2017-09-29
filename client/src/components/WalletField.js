///Wallet Field contains logic to render a single label and text input

import React from "react";

export default ({ input, label, meta: { error, touched } }) => {
  return (
    <div>
      <p><label>{label}</label></p>
      <input {...input} />
      <p className="errorMessage">{touched && error}</p>
    </div>
  );
};
