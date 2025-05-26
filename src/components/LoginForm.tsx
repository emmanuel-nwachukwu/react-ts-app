import React, { useState } from "react";

const LoginForm = () => {
  const [formData, setFormData] = useState<{
    username: string;
    password: string;
  }>({
    username: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Clicked");
    if (formData.username && formData.password) {
      console.log(formData);
    } else {
      return alert("please fill in all the fields");
    }
  };
  //   without FORM onSubmit
  //   const handleSubmit2 = (e: React.MouseEvent<HTMLInputElement>) => {
  //     e.preventDefault();
  //     console.log("Clicked");
  //     console.log(formData);
  //   };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-container">
        <div className="input-container">
          <label htmlFor="username">username:</label>
          <input
            type="text"
            name="username"
            placeholder="username"
            className="input-form"
            onChange={handleChange}
          />
        </div>
        <div className="input-container">
          <label htmlFor="password">password:</label>
          <input
            type="password"
            name="password"
            placeholder="password"
            className="input-form"
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          value="Submit"
          className="submitBtn"
          // with form onSubmit
        >
          Submit
        </button>
        {/* <input
          type="submit"
          value="Submit"
          className="submitBtn"
          onClick={handleSubmit2}
          // without form onSubmit
        /> */}
      </div>
    </form>
  );
};

export default LoginForm;
