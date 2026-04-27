import { MdAdminPanelSettings } from "react-icons/md";
import { Link } from "react-router-dom";
import "./index.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-danger shadow-sm">
      <div className="container-fluid"> 
      
        <img src="/image/nav-logo.png" alt="Navnidhi Logo" className="logo me-2" />

      
        
        <Link className="navbar-brand fw-bold text-warning" to="/">
          Navnidhi Special School
        </Link>
         
           <div className="nios-badge">
            <img src="image/NIOS-Logo.png" alt = "logo" className="logo"/>
    <p>NIOS  
      OBE Study Centre</p>
  
</div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav ms-auto gap-2">

            <li className="nav-item">
              <Link className="nav-link text-light" to="/">Home</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-light" to="/about">About</Link>
            </li>
            
            <li className="nav-item">
              <Link className="nav-link text-light" to="/service">Service</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-light" to="/admission">Admissions</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-light" to="/gallery">Gallery</Link>
            </li>
            <li className="nav-item">
             <Link className="nav-link text-light" to="/career">
              Career
                </Link>
               </li>
            <li className="nav-item">
              <Link className="nav-link text-light  " to="/contact">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/admin">
                <MdAdminPanelSettings className='admin-logo'/>
              </Link>
            </li>


          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
