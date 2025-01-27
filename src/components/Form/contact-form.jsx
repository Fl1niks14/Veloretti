import React, { useState } from "react";
import "./ContactForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    companySize: "",
    bikes: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
			...prevData, [name]: value,
		 }));};

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Форма:", formData);
    alert("Форма успешно введена!");
  };

  return (
    <div className="contact-form-container">
      <h1>Get in touch</h1>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          placeholder="First name"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last name"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email address"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone number"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="company"
          placeholder="Company name"
          value={formData.company}
          onChange={handleChange}
        />
        <select
          name="companySize"
          value={formData.companySize}
          onChange={handleChange}
          required
        >
          <option value="">Company Size</option>
          <option value="1-10">1-10</option>
          <option value="11-50">11-50</option>
          <option value="51-200">51-200</option>
          <option value="201+">201+</option>
        </select>
        <input
          type="number"
          name="bikes"
          placeholder="Number of bikes"
          value={formData.bikes}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="How can we help"
          value={formData.message}
          onChange={handleChange}
          rows="5"
        />
        <button type="submit" className="submit-button">
          Send the request
        </button>
      </form>
    </div>
  );
};

export default ContactForm;