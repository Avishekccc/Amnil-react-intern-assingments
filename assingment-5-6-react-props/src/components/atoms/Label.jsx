import React from 'react'

const Label = ({label}) => {
  return (
    <div>
      <label
        style={{
          display: "block",
          marginBottom: "8px",
          color: "#555",
          fontSize: "14px",
          fontWeight: "500",
              }}
              htmlFor={label}
      >
        {label}
      </label>
    </div>
  );
}

export default Label