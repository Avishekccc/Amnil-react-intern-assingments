
import PropTypes from "prop-types";



const Input = ({ inputType, placeHolder, onChange, value }) => {
  return (
    <input
      type={inputType}
      placeholder={placeHolder}
      onChange={onChange}
      value={value}
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

Input.propTypes = {
  inputType: PropTypes.string.isRequired,
  placeHolder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
};

export default Input;
