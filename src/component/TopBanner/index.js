import { IoLogoWhatsapp } from "react-icons/io";
import "./index.css";


const TopBanner = () => {
  return (
    <div className="banner-container">
      <div className="banner-text">
        🎓 Admissions Open for Special Children &nbsp;&nbsp;|&nbsp;&nbsp;
        🏠 Safe & Caring Hostel Facility Available &nbsp;&nbsp;|&nbsp;&nbsp;
        🧸 Day Care Services Available &nbsp;&nbsp;|&nbsp;&nbsp;
        🌞 Summer Camp 2026 Enrollments Open &nbsp;&nbsp;|&nbsp;&nbsp;
        📞 Call Now: 8294647101 &nbsp;&nbsp;|&nbsp;&nbsp;
      <i>  <IoLogoWhatsapp className="whatsapp-icon" /> WhatsApp for Instant Enquiry</i>
      </div>
    </div>
  );
};

export default TopBanner;