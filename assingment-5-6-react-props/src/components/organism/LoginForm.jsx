import React from "react";
import InputField from "../molecules/InputField";
import Buttons from "../atoms/buttons";

const LoginForm = () => {
  return (
    <div
      style={{
        backgroundColor: "white",
        padding: "40px",
        borderRadius: "8px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        width: "100%",
        maxWidth: "400px",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          marginBottom: "30px",
          color: "#333",
          fontSize: "24px",
          fontWeight: "600",
        }}
      >
        Sign In
      </h2>
      <form style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <InputField
          lable={"Email"}
          inputType={"email"}
          placeHolder={"Enter Your Email"}
        ></InputField>
        <InputField
          lable={"Password"}
          inputType={"password"}
          placeHolder={"Enter Your Password"}
        ></InputField>
        <Buttons buttonType={"submit"} buttonName={"Sing In"}></Buttons>
      </form>
    </div>
  );
};

export default LoginForm;
