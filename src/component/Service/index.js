import "./index.css";

const servicesData = [
  {
    title: "Special Education (IEP)",
    desc: "Individualized Education Plans designed according to each child’s learning abilities, strengths and pace."
  },
  {
    title: "Speech Therapy",
    desc: "Professional therapy sessions to improve communication, language development and confidence."
  },
  {
    title: "Occupational Therapy",
    desc: "Programs to enhance motor skills, sensory integration and daily living activities."
  },
  {
    title: "Physiotherapy",
    desc: "Support for posture correction, mobility improvement and physical development."
  },
  {
    title: "Behaviour Therapy",
    desc: "Evidence-based behavioural intervention to improve emotional regulation and social skills."
  },
  {
    title: "Vocational Training",
    desc: "Skill-based training programs to prepare students for independent living and employment."
  },
  {
    title: "Life Skill Development",
    desc: "Training in personal hygiene, communication, decision making and self-reliance."
  },
  {
    title: "Day Care & Hostel Facility",
    desc: "Safe and secure residential and day-care services with trained supervision."
  },
  {
    title: "Parent Counseling",
    desc: "Guidance sessions to help parents understand and support their child’s development."
  },
  {
    title: "Holistic Development",
    desc: "Focuses on nurturing the whole child-physical, emotional, socially, cognitively and creatively through customized interventions."
  },
   {
    title: "Dance & Music",
   desc: "Creative expression through dance and music therapy to enhance emotional well-being and social interaction."
  },
  {
    title: "Sports & Physical Activities",
    desc: "Encouraging physical fitness and motor skill development through various sports and physical activities."
  },
  {
    title: "Recreation Activities",
    desc: "Fun and engaging recreational programs to promote social interaction and overall well-being."
  },
  {
    title: "Yoga And Exercise",
    desc: "Promoting physical and mental well-being through yoga and exercise programs."
  }
];

const Service = () => {
  return (
    <div className="container py-5">

      <h1 className="text-center fw-bold text-primary mb-3">
        Our Services
      </h1>

      <p className="text-center text-muted mb-5">
        Comprehensive education and therapy services designed to empower every child.
      </p>

      <div className="row g-4">
        {servicesData.map((service, index) => (
          <div className="col-md-4" key={index}>
            <div className="card h-100 shadow-sm border-0 p-4 text-center">
              <h5 className="fw-bold text-primary">{service.title}</h5>
              <p className="text-muted small mt-2">{service.desc}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Service;