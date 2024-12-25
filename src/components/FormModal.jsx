import React, { useState } from "react";

import "./Modal.css";

export const Modal = ({ closeModal, onSubmit, defaultValue }) => {
  const [formState, setFormState] = useState(
    defaultValue || {
      full_name: "",
      date_of_birth: "",
      department: "",
      position: "",
      salary: 0
    }
  );
  const [errors, setErrors] = useState("");

  const validateForm = () => {
    if (formState.page && formState.description && formState.status) {
      setErrors("");
      return true;
    } else {
      let errorFields = [];
      for (const [key, value] of Object.entries(formState)) {
        if (!value) {
          errorFields.push(key);
        }
      }
      setErrors(errorFields.join(", "));
      return false;
    }
  };

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
    console.log(e.target.name)
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    onSubmit(formState);

    closeModal();
  };

  var formattedDate = "" 
  if (formState.date_of_birth != "") {
    formattedDate = new Date(formState.date_of_birth).toISOString().split('T')[0];
  }

  return (
    <div
      className="modal-container"
      onClick={(e) => {
        if (e.target.className === "modal-container") closeModal();
      }}
    >
      <div className="modal">
        <form>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input name="name" onChange={handleChange} value={formState.full_name} />
          </div>
          <div className="form-group">
            <label htmlFor="date-of-birth">Birth Date</label>
            <input name="date_of_birth" type="date" value={formattedDate} onChange={handleChange}/>
          </div>
          <div className="form-group">
            <label htmlFor="status">Department</label>
            <select
              name="department"
              onChange={handleChange}
              value={formState.department}
            >
              <option value="Sales">Sales</option>
              <option value="Marketing">Marketing</option>
              <option value="Engineering">Engineering</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="status">Position</label>
            <select
              name="position"
              onChange={handleChange}
              value={formState.position}
            >
              <option value="Marketing Platform">Marketing Platform</option>
              <option value="Online Sales Staff">Online Sales Staff</option>
              <option value="Software Engineer">Software Engineer</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="salary">Salary</label>
            <input name="salary" value={formState.salary} placeholder={formState.salary} onChange={handleChange}/>
          </div>
          {errors && <div className="error">{`Please include: ${errors}`}</div>}
          <button type="submit" className="btn" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};