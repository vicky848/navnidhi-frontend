import { useState } from "react";
import "./index.css";

const Contact = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.mobile) {
      setError("Please fill required fields");
      return;
    }

    if (formData.mobile.length !== 10) {
      setError("Mobile number must be 10 digits");
      return;
    }

    setError("");

    try {
      const res = await fetch("https://navnidhi-backend-1.onrender.com/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          mobile_number: formData.mobile,
          message: formData.message
        })
      });

      const data = await res.text();

      if (res.ok) {
        setShowPopup(true);

        // reset form
        setFormData({
          name: "",
          mobile: "",
          message: "",
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
        Contact Us
      </h2>

      <p className="text-center text-muted mb-5">
        We are here to help. Feel free to reach out for any enquiry.
      </p>

      <div className="row g-4">

        {/* Contact Details */}
        <div className="col-md-5">
          <div className="card shadow-sm p-4 h-100">
            <h5 className="fw-bold mb-3">Navnidhi Special School</h5>
            <p>📍 Address: Paschim Vihar, Delhi</p>
            <p>📞 Phone: 011-46562443 , 08294647101 , 7703939509</p>
            <p>📧 Email: info@navnidhispecialschool.org</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="col-md-7">
          <form className="card shadow-sm p-4" onSubmit={handleSubmit}>
            <h5 className="fw-bold mb-3">Send Us a Message</h5>

            {error && (
              <div className="alert alert-danger">{error}</div>
            )}

            <div className="mb-3">
              <label className="form-label">Name *</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={formData.name}
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
              <label className="form-label">Message</label>
              <textarea
                className="form-control"
                rows="3"
                name="message"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>

            <button className="btn btn-primary w-100">
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* ✅ Popup */}
      {showPopup && (
        <div className="modal fade show d-block">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content text-center p-4">
              <h5 className="fw-bold text-success mb-3">
                🎉 Thank You!
              </h5>
              <p>We will contact you soon.</p>

              <button
                className="btn btn-primary mt-3"
                onClick={() => setShowPopup(false)}
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Map */}
      <div className="mt-5">
        <iframe
          title="school-location"
          src="https://www.google.com/maps?q=Delhi&output=embed"
          width="100%"
          height="350"
          style={{ border: 0 }}
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;