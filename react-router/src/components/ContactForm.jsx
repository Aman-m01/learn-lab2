import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  const formStyle = {
    padding: "16px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    width: "300px",
    margin: "20px auto",
    fontFamily: "Arial, sans-serif",
  };

  const inputStyle = {
    width: "100%",
    padding: "8px",
    marginBottom: "10px",
    border: "1px solid #ccc",
    borderRadius: "4px",
  };

  const buttonStyle = {
    width: "100%",
    padding: "10px",
    backgroundColor: "#007BFF",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <div>
        <label style={{ fontSize: "14px", fontWeight: "bold" }}>Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          style={inputStyle}
          required
        />
      </div>
      <div>
        <label style={{ fontSize: "14px", fontWeight: "bold" }}>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          style={inputStyle}
          required
        />
      </div>
      <div>
        <label style={{ fontSize: "14px", fontWeight: "bold" }}>Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          style={{ ...inputStyle, height: "80px" }}
          required
        ></textarea>
      </div>
      <button type="submit" style={buttonStyle}>
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
