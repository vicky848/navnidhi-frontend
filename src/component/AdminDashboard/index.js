import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";

const AdminDashboard = () => {
  const [admissions, setAdmissions] = useState([]);
  const [contacts, setContacts] = useState([]);
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  const API = "https://navnidhi-backend-1.onrender.com";

  useEffect(() => {
    if (!token) {
      navigate("/");
    } else {
      fetchAdmissions();
      fetchContacts();
    } //  eslint-disable-next-line   
  }, [token]);

  // 📥 Admissions
  const fetchAdmissions = async () => {
    try {
      const res = await fetch(`${API}/admissions`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      setAdmissions(data);
    } catch (err) {
      console.error(err);
    }
  };

  // 📥 Contacts
  const fetchContacts = async () => {
    try {
      const res = await fetch(`${API}/contacts`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      setContacts(data);
    } catch (err) {
      console.error(err);
    }
  };

  // 🗑️ Delete Admission
  const deleteAdmission = async (id) => {
    if (!window.confirm("Delete this admission?")) return;

    await fetch(`${API}/admissions/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    });

    fetchAdmissions();
  };

  // 🗑️ Delete Contact
  const deleteContact = async (id) => {
    if (!window.confirm("Delete this contact?")) return;

    await fetch(`${API}/contacts/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    });

    fetchContacts();
  };

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="dashboard-container">
       <button className="btn btn-danger logout-btn" onClick={logout}>
        Logout
      </button>

      <h1 className="dashboard-title">Admin Dashboard</h1>

     

      {/* 🧒 Admissions */}
      <h3>Admissions</h3>

      <div className="table-responsive-custom">
        <table className="table table-bordered table-hover">
          <thead className="table-dark">
            <tr>
              <th>Child</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Disability</th>
              <th>Parent</th>
              <th>Mobile</th>
              <th>Address</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {admissions.length === 0 ? (
              <tr>
                <td colSpan="8">No Admissions Found</td>
              </tr>
            ) : (
              admissions.map((item) => (
                <tr key={item.id}>
                  <td>{item.child_name}</td>
                  <td>{item.age}</td>
                  <td>{item.gender}</td>
                  <td>{item.disability_type}</td>
                  <td>{item.parent_name}</td>
                  <td>{item.mobile_number}</td>
                  <td>{item.address}</td>
                  <td>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => deleteAdmission(item.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* 📩 Contacts */}
      <h3 className="mt-5">Contacts</h3>

      <div className="table-responsive-custom">
        <table className="table table-bordered table-hover">
          <thead className="table-dark">
            <tr>
              <th>Name</th>
              <th>Mobile</th>
              <th>Message</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {contacts.length === 0 ? (
              <tr>
                <td colSpan="4">No Contacts Found</td>
              </tr>
            ) : (
              contacts.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.mobile_number}</td>
                  <td>{item.message}</td>
                  <td>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => deleteContact(item.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default AdminDashboard;