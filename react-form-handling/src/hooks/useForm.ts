import { useState } from "react";

type FormElement = HTMLInputElement | HTMLSelectElement;

type BaseFormValues = {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  education: string;
  policy: boolean;
};

export function useForm<T extends BaseFormValues>(initialValues: T) {
  const [data, setData] = useState<T>(initialValues);
  const [error, setError] = useState<{ [key: string]: string }>({});

  const checValidation = () => {
    const newErrors: { [key: string]: string } = {};

    if (!data.firstname) {
      newErrors.firstname = "Firatname is Required";
    } else if (data.firstname.length < 2) {
      newErrors.firstname = "Firstname must be at least 2 characters.";
    }

    if (!data.lastname) {
      newErrors.lastname = "Lastname is required.";
    }

    if (!data.email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      newErrors.email = "Email is invalid.";
    }

    if (!data.password) {
      newErrors.password = "Password is required.";
    } else if (data.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
    }

    if (data.education === "select Your Education") {
      newErrors.education = "Please select your education."
    }

    if (!data.policy) {
      newErrors.policy = "You must agree to the terms.";
    }
    return newErrors;
  };

  const handleChange = (e: React.ChangeEvent<FormElement>) => {
    const { name, value, type } = e.target;

    setData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validation = checValidation();
    // console.log(validation)

    setError(validation);
    if (Object.keys(validation).length > 0) {
      return;
    }
    setData(initialValues);
    setError({});

    // alert("Form Submitted Successfully!");
    console.log(data);
  };

  return {
    handleChange,
    data,
    handleSubmit,
    error,
  };
}
