import React from 'react'

const Label = ({lable}) => {
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
              htmlFor={lable}
      >
        {lable}
      </label>
    </div>
  );
}

export default Label