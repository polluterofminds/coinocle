import React from "react";

export const renderSelect = field => (
  <div>
    <select {...field.input}/>
    {field.touched && field.error && <div className="error">{field.error}</div>}
  </div>
);
