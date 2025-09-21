import React from 'react'

const Buttons = ({buttonType,buttonName}) => {
  return (
    <div>
      <button
        type={buttonType}
        style={{
          width: "100%",
          padding: "12px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "4px",
          fontSize: "16px",
          fontWeight: "600",
          cursor: "pointer",
          transition: "background-color 0.3s ease",
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#007bff")}
      >
        {buttonName}
      </button>
    </div>
  );
}

export default Buttons