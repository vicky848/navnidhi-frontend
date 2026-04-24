import "./index.css";

const About = () => {
  return (
    <div className="container py-5">
      <h2 className="text-center fw-bold text-primary mb-4">
        About Navnidhi Special School
      </h2>

      <p className="text-muted text-center mb-5">
        Empowering children with special needs through education, care and compassion.
      </p>

      <div className="row g-4">
        <div className="col-md-6">
          <h4 className="fw-bold">Who We Are</h4>
          <p>
            Navnidhi Special School is a dedicated educational institution
            committed to supporting children with special needs. We provide
            a safe, inclusive and nurturing environment where every child is
            encouraged to grow academically, socially and emotionally.
          </p>

          <p>
            Our school focuses on individualized education plans that respect
            each child’s unique abilities, pace of learning and potential.
          </p>
        </div>

        <div className="col-md-6">
          <h4 className="fw-bold">Our Vision</h4>
          <p>
            To create an inclusive society where children with special needs
            are empowered with education, life skills and confidence to live
            with dignity and independence.
          </p>

          <h4 className="fw-bold mt-4">Our Mission</h4>
          <ul>
            <li>Provide quality special education and therapy services</li>
            <li>Support holistic development of every child</li>
            <li>Encourage parental involvement and guidance</li>
            <li>Create awareness and acceptance in society</li>
          </ul>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col">
          <div className="card shadow-sm p-4 bg-light">
            <h4 className="fw-bold text-center mb-3">
              Why Choose Navnidhi Special School?
            </h4>
            <div className="row text-center">
              <div className="col-md-4">
                <p>✔ Trained Special Educators</p>
              </div>
              <div className="col-md-4">
                <p>✔ Individual Attention</p>
              </div>
              <div className="col-md-4">
                <p>✔ Safe & Friendly Environment</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default About;
