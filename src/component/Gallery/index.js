import "./index.css";

const galleryImages = [
  {
    title: "Classroom Activities",
    img: "/image/class-room-activities.jpg",
  },
  {
    title: "Therapy Session",
    img: "/image/therapy-1.jpeg",
  },
  {
    title: "Art & Craft",
    img: "/image/art.jpg",
  },
  {
    title: "Annual Day Celebration",
    img: "/image/annual.jpg",
  },
  {
    title: "Sports Activities",
    img: "/image/sports.jpg",
  },
  {
    title: "Skill Development",
    img: "/image/n13.jpeg",
  },
  //  { img: "/image/class-room-activities.jpg" },
  // { img: "/image/therapy.jpg" },
  // { img: "/image/art.jpg" },
  // { img: "/image/annual.jpg" },
  // { img: "/image/sports.jpg" },
  // { img: "/image/n13.jpeg" },
  //  { img: "/image/class-room-activities.jpg" },
  // { img: "/image/therapy.jpg" },
  // { img: "/image/art.jpg" },
  // { img: "/image/annual.jpg" },
  // { img: "/image/sports.jpg" },
  // { img: "/image/n13.jpeg" },
  //  { img: "/image/class-room-activities.jpg" },
  // { img: "/image/therapy.jpg" },
  // { img: "/image/art.jpg" },
  // { img: "/image/annual.jpg" },
  // { img: "/image/sports.jpg" },
  // { img: "/image/n13.jpeg" },
];

const Gallery = () => {
  return (
    <div className="container py-5">
      <h2 className="text-center fw-bold text-primary mb-4">
        Our Gallery
      </h2>

      <p className="text-center text-muted mb-5">
        Moments of learning, care and joyful experiences at Navnidhi Special School
      </p>

      <div className="row g-4">
        {galleryImages.map((item, index) => (
          <div className="col-md-4 col-sm-6" key={index}>
            <div className="gallery-card shadow-sm">
              <img src={item.img} alt={item.title} />
              <div className="gallery-overlay">
                <p>{item.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
