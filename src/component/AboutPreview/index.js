
import './index.css';
const AboutPreview = () => {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="row align-items-center">

          <div className="col-md-6">
            <h2 className="fw-bold text-primary mb-3">
              About Navnidhi Special School
            </h2>

            <p className="text-muted">
              Navnidhi Special School provides specialized education and 
              therapy services for children with special needs. We focus 
              on individualized learning plans that help every child grow 
              with confidence and independence.
            </p>

            <a href="/about" className="btn btn-primary mt-3">
              Read More
            </a>
          </div>

          <div className="col-md-6">
            <img
              src="/image/school.jpg"
              alt="Navnidhi Special School"
              className="img-fluid rounded shadow"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutPreview;