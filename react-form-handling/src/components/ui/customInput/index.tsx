import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import "../customInput/style.css";
import { useState } from "react";

type InputPropType = {
  type: string;
  placeholder?: string;
  value?: string;
  className?: string;
  autofocus?: boolean;
  name: string;
  checked?: boolean;
  handleChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
};

const CustomInput = ({
  type,
  placeholder,
  value,
  className,
  name,
  checked,
  handleChange,
}: InputPropType) => {

  const [isOpen, setIsopen] = useState(false)

  const inputType =  type === "password" ? (isOpen === true?"text":"password"):type  
  
 

  return (
    <div className="input-field-wrapper">
      {(type === "text" ||
        type === "email" ||
        type === "password" ||
        type === "radio" ||
        type === "checkbox") && (
        <input
          type={inputType}
          placeholder={placeholder}
          value={value}
          className={className}
          name={name}
          {...(type === "checkbox" || type === "radio" ? { checked } : {})}
          onChange={handleChange}
        />
      )}
      {type === "password" && (
        <button
          className="eye-icon-wrapper"
          type="button"
          onClick={() => {
            setIsopen((prev) => !prev);
          }}
        >
          {isOpen === true ? <FaRegEye /> : <FaRegEyeSlash />}
        </button>
      )}
     

      {type === "select" && (
        <select
          name={name}
          className={className}
          value={value}
          onChange={handleChange}
        >
          <option value="">------ Select Your Education -----</option>
          <option value="see"> SEE</option>
          <option value="+2"> +2</option>
          <option value="Bachelor"> Bachelor</option>
        </select>
      )}
    </div>
  );
};

export default CustomInput;
