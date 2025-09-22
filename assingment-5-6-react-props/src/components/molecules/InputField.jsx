import React from "react";
import PropTypes from "prop-types";
import Input from "../atoms/input";
import Label from "../atoms/Label";



const InputField = ({ label, inputType, placeHolder, value, onChange }) => {
  return (
    <>
      <div>
        <Label label={label}></Label>
        <Input
          inputType={inputType}
          placeHolder={placeHolder}
          value={value}
          onChange={onChange}
        ></Input>
      </div>
    </>
  );
};

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  inputType: PropTypes.string.isRequired,
  placeHolder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default InputField;
