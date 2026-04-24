import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("https://navnidhi-backend-1.onrender.com/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
      });

      const data = await res.json();

      if (res.ok && data.token) {
        //  Save token
        localStorage.setItem("token", data.token);

        //  Redirect
        navigate("/admin/dashboard");
      } else {
        setError(data.message || "Invalid credentials");
      }

    } catch (err) {
      console.error(err);
      setError("Server error. Try again.");
    }
  };

  return (
    <div className="admin-form py-5">
      <h1 className="admin-heading text-center mb-4">Admin Login</h1>

      <form onSubmit={handleSubmit} className="w-50 mx-auto">

        {/* Error Message */}
        {error && (
          <p style={{ color: "red", textAlign: "center" }}>{error}</p>
        )}

        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Login
        </button>

      </form>
    </div>
  );
};

export default AdminLogin;