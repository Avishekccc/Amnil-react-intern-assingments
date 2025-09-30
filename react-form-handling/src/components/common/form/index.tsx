import CustomInput from "../../ui/customInput";
import CustomWrapper from "../wrapper";
import "../form/style.css";
import CustomButton from "../../ui/customButton";
import { useForm } from "../../../hooks/useForm";

export type FormDataType = {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    education: "select Your Education" | "see" | "+2" | "bachelor";
    gender: "male" | "female" | "others";
    policy: boolean;
}

const Form = () => {
  const { handleChange, data, handleSubmit, error } =
    useForm<FormDataType>({
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      education: "select Your Education",
      gender: "male",
      policy: false,
    });


  // const checkValidation = () => {
    
  // }

 

  return (
    <div>
      <h1 className="heading-text">Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <CustomWrapper className="input-wrapper">
          <div>
            <label htmlFor="firstname">First Name</label>
            <CustomInput
              type="text"
              name="firstname"
              placeholder="Enter Your First Name"
              value={data.firstname}
              handleChange={handleChange}
              className="text-field"
            />
            {error.firstname && <span className="error-text">{error.firstname}</span>}
          </div>
          <div>
            <label htmlFor="">Last Name</label>
            <CustomInput
              type="text"
              name="lastname"
              placeholder="Enter Your Last Name"
              value={data.lastname}
              handleChange={handleChange}
              className="text-field"
            />
            {error.lastname && <span className="error-text">{error.lastname}</span>}
          </div>
        </CustomWrapper>
        <CustomWrapper className="input-wrapper">
          <div>
            <label htmlFor="email">Email</label>
            <CustomInput
              type="text"
              handleChange={handleChange}
              name="email"
              placeholder="Enter Your Emial"
              value={data.email}
              className="text-field"
            />
            {error.email && <span className="error-text">{error.email}</span>}
          </div>
          <div>
            <label htmlFor="Password">Password</label>
            <CustomInput
              type="password"
              name="password"
              placeholder="Enter Your Password"
              handleChange={handleChange}
              value={data.password}
              className="text-field"
            />
            {error.password && <span className="error-text">{error.password}</span>}
          </div>
        </CustomWrapper>
        <CustomWrapper className="input-wrapper">
          <div className="first-field">
            <label htmlFor="education">Select Your Education</label>
            <CustomInput
              type="select"
              name="education"
              handleChange={handleChange}
              value={data.education}
              className="select-field"
            />
            {error.education && <span className="error-text">{error.education}</span>}
          </div>

          <div className="second-field">
            <span>Gender</span>

            <div className="flex-wrapper">
              <CustomInput
                type="radio"
                name="gender"
                handleChange={handleChange}
                value="male"
                checked={data.gender === "male"}
                className="radio-field"
              />
              <label htmlFor="male">Male</label>

              <CustomInput
                type="radio"
                name="gender"
                value="female"
                checked={data.gender === "female"}
                handleChange={handleChange}
                className="radio-field"
              />
              <label htmlFor="female">Female</label>

              <CustomInput
                type="radio"
                name="gender"
                value="others"
                checked={data.gender === "others"}
                handleChange={handleChange}
                className="radio-field"
              />
              <label htmlFor="others">Others</label>
            </div>
          </div>
        </CustomWrapper>
        {/* <CustomWrapper className="input-wrapper"> */}
        <div className="flex-wrapper">
          <CustomInput
            type="checkbox"
            name="policy"
            checked={data.policy}
            handleChange={handleChange}
            className="radio-field"
          />
          <label htmlFor="policy" style={{ fontStyle: "italic" }}>
            I agree to the Terms & Conditions
          </label>
        </div>
        {error.policy && <span className="error-text">{error.policy}</span>}

        {/* </CustomWrapper> */}

        <CustomButton type="submit" variant="primary" btnText="Submit" />
      </form>
    </div>
  );
};

export default Form;
