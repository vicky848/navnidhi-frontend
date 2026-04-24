import React from 'react'
import './index.css'
import { FaFacebookSquare,  FaLinkedin,  FaTwitter ,FaYoutube} from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
 

const SocialMediaLink = () => {
  return (
    <div className='social-media-container'>
      <h3 className='social-media-heading'>Social Media</h3>
      <ul className='social-media-item-container'>
        <li>
        <a href='https://www.facebook.com/profile.php?id=61571021061027' target='_blank' rel="noreferrer">
          <FaFacebookSquare className='facebook-icon' />
        </a>
        </li>
        <li>
          <a href='https://www.instagram.com/navnidhifoundation2907/?hl=en' target='_blank' rel="noreferrer">
          <FaInstagram className='insta-icon' />
          </a>
        </li>
       
        <li>
          <a href='https://www.linkedin.com/in/navnidhi-foundation?fbclid=IwY2xjawQaOG1leHRuA2FlbQIxMABicmlkETEzRlpBVjE0a0lvY25DelJQc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHv-FDecO0t7axo2UvnWq5CTcLqQ3oGINvAoA4pscAiF9Zscgp-5clNWW782H_aem_Mee-SF8Ki4OPYdlkWVmT7A' target='_blank'  rel="noreferrer">
          <FaLinkedin className='linkdin-icon' />
          </a>
        </li>
        <li>
          <a href='/' target='_blank'  rel="noreferrer">
          <FaTwitter className='twitter-icon' />
          </a>
        </li>
         <li>
          <a href='https://www.youtube.com/@navnidhifoundation2907' target='_blank'  rel="noreferrer">
          <FaYoutube className='youtube-icon' />
          </a>
        </li>
      </ul>
        
    </div>
  )
  }

export default SocialMediaLink