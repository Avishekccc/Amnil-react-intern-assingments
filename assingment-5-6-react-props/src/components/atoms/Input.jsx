import React from 'react'

const Input = ({inputType, placeHolder}) => {
  return (
    <input
      type={inputType}
      placeholder={placeHolder}
      style={{
        width: "100%",
        padding: "12px",
        border: "1px solid #ddd",
        borderRadius: "4px",
        fontSize: "16px",
        outline: "none",
        transition: "border-color 0.3s ease",
          boxSizing: "border-box",
        
      }}
      onFocus={(e) => (e.target.style.borderColor = "#007bff")}
      onBlur={(e) => (e.target.style.borderColor = "#ddd")}
    />
  );
};

export default Input