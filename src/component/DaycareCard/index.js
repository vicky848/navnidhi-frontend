import { useState } from "react";
import "./index.css";

const DaycareCard = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Button hide when open */}
      {!isOpen && (
        <button className="toggle-btn" onClick={() => setIsOpen(true)}>
          ☰ Daycare Info
        </button>
      )}

      {/* Overlay */}
      {isOpen && (
        <div className="overlay" onClick={() => setIsOpen(false)}></div>
      )}

      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        
        {/* 🔥 CLOSE BUTTON */}
        <button className="close-btn" onClick={() => setIsOpen(false)}>
          ✖
        </button>

        <h2>🌈 Daycare Details</h2>

        <div className="card">
          <p><strong>⏰ Timing:</strong> 9:00 AM - 6:00 PM</p>
          <p><strong>👶 Individual Session:</strong> 1:30 PM - 6:00 PM</p>
          <p><strong>📅 Working Days:</strong> Mon - Sat</p>
          <p><strong>🕒 Duration Session:</strong> 45 min - 1 Hour</p>
          <p><strong>🧸 Care Type:</strong> Personalized Attention</p>
        </div>

        
      </div>
    </>
  );
};

export default DaycareCard;