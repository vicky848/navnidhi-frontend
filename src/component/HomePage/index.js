import AboutPreview from '../AboutPreview';
import FAQ from '../Facilitiessection';
import Gallery from '../Gallery';
// import Service from '../Service';
import WhatsappButton from '../WhatsappButton';
import ChatBot from '../Chatbot';
import './index.css'
import { Link } from "react-router-dom";
import DaycareCard from '../DaycareCard';
// import SummerCamp from '../SummerCamp';
import Whychooseus from '../Whychooseus';


 const HomePage = () => {
  return (
    <div className='home-page-container'>
       <section className="hero-section text-white d-flex align-items-center">
  <div className="container text-center">
    <h1 className="fw-bold text-light display-5">
      Navnidhi Special School
    </h1>
    <p className="lead">
      Empowering Special Children with Love, Care & Education
    </p>
    <div className="mt-3">
      <Link to="/admission" className="btn btn-success me-2">
        Apply for Admission
      </Link>
      <Link to="/contact" className="btn btn-outline-success">
        Contact Us
      </Link>
    </div>
  </div>
</section>
  
  <AboutPreview/>

 <div className="container py-5">
          <div className="container text-center mt-5">
  <h2 className="fw-bold">Our Key Facilities</h2>
  <p className="text-muted text-center">
    Providing a safe, supportive and nurturing environment for every child.
  </p>
</div>
  <div className="row g-4">
 
      <div className="col-md-3">
        <div className="card h-100 shadow-sm text-center p-3">
  
          
          <h5 className='fw-bold'>Special Education</h5>
          <p className="text-muted small">
            Individualized Education Plans (IEP) designed to meet each child’s unique learning needs with structured classroom support and inclusive teaching methods.

          </p>
        </div>
        </div>
        <div className='col-md-3'>
          <div className="card h-100 shadow-sm text-center p-3">
          
          <h5 className='fw-bold'>Speech Therapy</h5>
          <p className="text-muted small">
            Professional speech therapy sessions to improve communication skills, language development, articulation, and confidence in daily interactions.

          </p>
        </div>

        </div>
       <div className=' col-md-3'>
         <div className="card h-100 shadow-sm text-center p-3">
          
          <h5 className='fw-bold'>Behaviour Modification</h5>
          <p className="text-muted small">
           Evidence-based behaviour therapy programs focused on improving social skills, emotional regulation, and positive behavioural development.

          </p>
        </div>


       </div>
     <div className='col-md-3'>
         <div className="card h-100 shadow-sm text-center p-3">
          
          <h5 className='fw-bold'>Occupational Therapy</h5>
          <p className="text-muted small">
            Therapeutic activities to enhance fine motor skills, sensory integration, daily living skills, and independent functioning.

          </p>
        </div>

     </div>
      <div className='col-md-3'>
         <div className="card h-100 shadow-sm text-center p-3">
          
          <h5 className='fw-bold'>Physiotherapy</h5>
          <p className="text-muted small">
            Specialized physiotherapy support to improve mobility, posture, muscle strength, and overall physical development.

          </p>
        </div>

     </div>
      <div className='col-md-3'>
         <div className="card h-100 shadow-sm text-center p-3">
          
          <h5 className='fw-bold'>Vocational Training</h5>
          <p className="text-muted small">
            Skill-based training programs that prepare students for independent living and future employment opportunities.

          </p>
        </div>

     </div>
        <div className='col-md-3'>
         <div className="card h-100 shadow-sm text-center p-3">
          
          <h5 className='fw-bold'>Self reliant Special student</h5>
          <p className="text-muted small">
            Programs designed to build self-confidence, life skills, personal hygiene, and decision-making abilities for independent living.

          </p>
        </div>
        

     </div>
         <div className='col-md-3'>
         <div className="card h-100 shadow-sm text-center p-3">
          
          <h5 className='fw-bold'>Day Care Centre</h5>
          <p className="text-muted small">
            Safe and nurturing day care facility with structured activities, therapy support, and continuous supervision by trained professionals.

          </p>
        </div>
        

     </div>
      <div className='col-md-3'>
         <div className="card h-100 shadow-sm text-center p-3">
          
          <h5 className='fw-bold'>Hostel Facility</h5>
          <p className="text-muted small">
        Comfortable and secure residential facilities with round-the-clock care, nutritious meals, and structured daily routines.


          </p>
        </div>
        

     </div>
      <div className='col-md-3'>
         <div className="card h-100 shadow-sm text-center p-3">
          
          <h5 className='fw-bold'>Therapy Centre

</h5>
          <p className="text-muted small">
          Comprehensive therapy services including speech, occupational, behavioural, and physiotherapy under one integrated support system.

          </p>
        </div>
        

     </div>
      
      </div>
  
  
</div>
 
<Gallery/>
    <section className="bg-primary text-white py-4">
  <div className="container">
    <div className="row text-center">
      <div className="col">150+ Students</div>
      <div className="col">20+ Teachers</div>
      <div className="col">4+ Years Experience</div>
    </div>
  </div>
</section>
<Whychooseus/>  

   {/* <Service/> */}
     <FAQ/>
      <div className="text-center mt-4 mb-4">
  <p className="fw-bold">Still have questions?</p>
  <a href="/contact" className="btn btn-primary">
    Contact Us
  </a>
</div>

<DaycareCard/>
{/* <SummerCamp/> */}
 <WhatsappButton/> 
<ChatBot/>
    </div>
  )
}

export default HomePage