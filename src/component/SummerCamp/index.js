import { useState } from "react";
import "./index.css";

const SummerCamp = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Button */}
      {!isOpen && (
        <button
          className="summer-btn"
          onClick={() => setIsOpen(true)}
        >
          ☀️ Summer Camp Info
        </button>
      )}

      {/* Overlay */}
      {isOpen && (
        <div
          className="summer-overlay"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <div className={`summer-sidebar ${isOpen ? "open" : ""}`}>

        {/* Close Button */}
        <button
          className="summer-close-btn"
          onClick={() => setIsOpen(false)}
        >
          ✖
        </button>

        <h2>🌞 Summer Camp Details</h2>

        <div className="summer-card">
          <p><strong>⏰ Timing:</strong> 10:00 AM - 4:00 PM</p>
          <p><strong>📅 Duration:</strong> 2 Weeks</p>
          <p><strong>🎯 Activities:</strong> Art, Music, Sports</p>
          <p><strong>👶 Age Group:</strong> 5 - 15 years</p>
          <p><strong>💰 Fee:</strong> ₹2000</p>
          <p className="highlight">Fresher kids welcome 😊</p>
        </div>

      </div>
    </>
  );
};

export default SummerCamp;