import { useState } from "react";
import "./index.css";

const Admission = () => {
  const [formData, setFormData] = useState({
    childName: "",
    age: "",
    gender: "",
    disability: "",
    parentName: "",
    mobile: "",
    address: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (
      !formData.childName ||
      !formData.age ||
      !formData.gender ||
      !formData.disability ||
      !formData.parentName ||
      !formData.mobile
    ) {
      setError("Please fill all required fields");
      return;
    }

    if (formData.mobile.length !== 10) {
      setError("Mobile number must be 10 digits");
      return;
    }

    setError("");
    setSuccess("");

    try {
      const res = await fetch("https://navnidhi-backend-1.onrender.com/admissions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          child_name: formData.childName,
          age: formData.age,
          gender: formData.gender,
          disability_type: formData.disability,
          parent_name: formData.parentName,
          mobile_number: formData.mobile,
          address: formData.address
        })
      });

      const data = await res.text();

      if (res.ok) {
        setSuccess("🎉 Admission submitted successfully!");

        // reset form
        setFormData({
          childName: "",
          age: "",
          gender: "",
          disability: "",
          parentName: "",
          mobile: "",
          address: "",
        });
      } else {
        setError(data || "Something went wrong");
      }

    } catch (err) {
      console.error(err);
      setError("Server error. Try again.");
    }
  };

  return (
    <div className="container py-5">
      <h2 className="text-center fw-bold text-primary mb-4">
        Admission Enquiry Form
      </h2>

      <div className="row justify-content-center">
        <div className="col-md-8">
          <form className="card shadow-sm p-4" onSubmit={handleSubmit}>
            
            {error && <div className="alert alert-danger">{error}</div>}
            {success && <div className="alert alert-success">{success}</div>}

            <div className="mb-3">
              <label className="form-label">Child Name *</label>
              <input
                type="text"
                className="form-control"
                name="childName"
                value={formData.childName}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Age *</label>
              <input
                type="number"
                className="form-control"
                name="age"
                value={formData.age}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Gender *</label>
              <select
                className="form-select"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>

            <div className="mb-3">
              <label className="form-label">Type of Disability *</label>
              <select
                className="form-select"
                name="disability"
                value={formData.disability}
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option>Autism Spectrum Disorder (A.S.D)</option>
                <option>A.D.H.D</option>
                <option>Learning Disability</option>
                <option>Intellectual Disability</option>
                <option>Speech Difficulty</option>
                <option>Down Syndrome</option>
                <option>Multiple Disabilities</option>
                <option>Slow Learner</option>
                <option>Cerebral Palsy</option>
                <option>Hearing Impairment</option>
                <option>Other</option>
              </select>
            </div>

            <div className="mb-3">
              <label className="form-label">Parent / Guardian Name *</label>
              <input
                type="text"
                className="form-control"
                name="parentName"
                value={formData.parentName}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Mobile Number *</label>
              <input
                type="tel"
                className="form-control"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Address</label>
              <textarea
                className="form-control"
                rows="3"
                name="address"
                value={formData.address}
                onChange={handleChange}
              ></textarea>
            </div>

            <button className="btn btn-success w-100">
              Submit Enquiry
            </button>

          </form>
        </div>
      </div>
    </div>
  );
};

export default Admission;