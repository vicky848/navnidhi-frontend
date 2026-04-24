import React from 'react'
import { Link } from "react-router-dom";
import SocialMediaLink from '../SocialMediaLink'
import './index.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Top Section */}
        <div className="footer-grid">

          {/* About */}
          <div className="footer-col">
            <h4>Navnidhi Special School</h4>
            <p>
              Empowering children with special needs through quality education,
              care, and support for a brighter future.
            </p>
          </div>

          {/* Links */}
          <div className="footer-col">
            <h5>Quick Links</h5>
            <ul>
              <li><Link to="#">Privacy Policy</Link></li>
              <li><Link to="#">Terms & Conditions</Link></li>
              <li><Link to="#">Refund Policy</Link></li>
              <li><Link to="#">Sitemap</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-col">
            <h5>Contact</h5>
            <p>📍M-471 , Guru Harkishan Nagar , Paschim Vihar, New Delhi - 110087</p>
            <p>📞 011-46562443 ,+91 8294647101</p>
            <p>📧 info@navnidhispecialschool.in</p>
          </div>

          {/* Social */}
          <div className="footer-col">
            {/* <h5 className="footer-heading">Follow Us</h5> */}
            <SocialMediaLink />
          </div>

        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Navnidhi Special School. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  )
}

export default Footer