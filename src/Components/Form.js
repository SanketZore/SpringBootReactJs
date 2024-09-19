import React, { useState } from "react";
import axios from "axios";

function Form() {
  const initialFormState = {
    name: "",
    email: "",
    password: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    isRobot: false,
  };

  // DataBaseName : SpringBootReactJsDB
// Username : admin
// Password : SanketZore@11

  const [formData, setFormData] = useState(initialFormState);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log("Clicked");

    axios.post("http://localhost:8080/data/create", formData)
      .then((response) => {
        console.log("Success:", response.data);
        // Reset the form after successful submission
        setFormData(initialFormState);
      })
      .catch((error) => {
        console.error("Error:", error);
        // Optionally, you can reset the form even in case of error
        setFormData(initialFormState);
      });
  };

  return (
    <div className="container mt-5">
      <form className="row g-3" onSubmit={handleSubmit}>
        <div className="col-md-6">
          <label htmlFor="inputName4" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            value={formData.name}
            onChange={handleChange}
            name="name"
            id="inputName4"
          />
        </div>

        <div className="col-md-6">
          <label htmlFor="inputEmail4" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={formData.email}
            onChange={handleChange}
            id="inputEmail4"
          />
        </div>

        <div className="col-md-6">
          <label htmlFor="inputPassword4" className="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="form-control"
            id="inputPassword4"
          />
        </div>

        <div className="col-12">
          <label htmlFor="inputAddress" className="form-label">
            Address
          </label>
          <input
            type="text"
            className="form-control"
            name="address"
            value={formData.address}
            onChange={handleChange}
            id="inputAddress"
            placeholder="1234 Main St"
          />
        </div>

        <div className="col-md-6">
          <label htmlFor="inputCity" className="form-label">
            City
          </label>
          <input
            type="text"
            className="form-control"
            value={formData.city}
            onChange={handleChange}
            name="city"
            id="inputCity"
          />
        </div>

        <div className="col-md-4">
          <label htmlFor="inputState" className="form-label">
            State
          </label>
          <select
            id="inputState"
            name="state"
            value={formData.state}
            onChange={handleChange}
            className="form-select"
          >
            <option value="">Choose...</option>
            <option value="Maharashtra">Maharashtra</option>
            <option value="Nashik">Nashik</option>
            <option value="Satara">Satara</option>
          </select>
        </div>

        <div className="col-md-2">
          <label htmlFor="inputZip" className="form-label">
            Zip
          </label>
          <input
            type="text"
            className="form-control"
            value={formData.zip}
            onChange={handleChange}
            name="zip"
            id="inputZip"
          />
        </div>

        <div className="col-12">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              name="isRobot"
              checked={formData.isRobot}
              onChange={handleChange}
              id="gridCheck"
            />
            <label className="form-check-label" htmlFor="gridCheck">
              I am not a Robot
            </label>
          </div>
        </div>

        <div className="col-12">
          <button type="submit" className="btn btn-primary mb-3">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
