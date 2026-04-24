import React from 'react'
import { FaWhatsapp } from "react-icons/fa";
import "./index.css";

export const WhatsappButton = () => {
  return (
    <div className='whats-app-button'>
        <a href="https://wa.me/918294647101" target="_blank" rel="noopener noreferrer">
        
        <FaWhatsapp size={40}  color="#25D366" />
           
        </a>



    </div>
  )
}
export default WhatsappButton;  