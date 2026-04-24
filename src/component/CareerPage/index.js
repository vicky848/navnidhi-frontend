import { useState } from "react";
import "./index.css";

const CareerPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    position: "",
    resume: null,
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    if (e.target.name === "resume") {
      setFormData({ ...formData, resume: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.mobile) {
      setMessage("Please fill all required fields");
      return;
    }

    // ✅ Frontend only success
    setMessage("✅ Application submitted successfully!");

    setFormData({
      name: "",
      email: "",
      mobile: "",
      position: "",
      resume: null,
    });
  };

  return (
    <div className="container py-5">
      <h2 className="text-center fw-bold text-primary mb-4">
        Careers
      </h2>

      <p className="text-center text-muted mb-5">
        Join our team and make a difference!
      </p>

      {/* Job Cards */}
      <div className="row mb-5">
        <div className="col-md-4">
          <div className="card p-3 shadow-sm">
            <h5>Special Educator</h5>
            <p>Experience in special child education.</p>
            <p className="text-success fw-bold">Fresher can also apply</p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card p-3 shadow-sm">
            <h5>Therapist</h5>
            <p>Speech / Occupational therapy experience.</p>
            <p className="text-success fw-bold">Fresher can also apply</p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card p-3 shadow-sm">
            <h5>Helper / Assistant</h5>
            <p>Support staff for daily activities.</p>
            <p className="text-success fw-bold">Fresher can also apply</p>
          </div>
        </div>
      </div>

      {/* Apply Form */}
      <form className="card p-4 shadow-sm" onSubmit={handleSubmit}>

        {message && <p className="text-center text-success">{message}</p>}

        <div className="mb-3">
          <label>Name *</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label>Email *</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label>Mobile *</label>
          <input
            type="tel"
            className="form-control"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label>Position</label>
          <select
            className="form-select"
            name="position"
            value={formData.position}
            onChange={handleChange}
          >
            <option value="">Select</option>
            <option>Special Educator</option>
            <option>Therapist</option>
            <option>Assistant</option>
          </select>
        </div>

        <div className="mb-3">
          <label>Upload Resume</label>
          <input
            type="file"
            className="form-control"
            name="resume"
            onChange={handleChange}
          />
        </div>

        <button className="btn btn-success w-100">
          Apply Now
        </button>

      </form>
    </div>
  );
};

export default CareerPage;