import { useState } from "react";
import "./index.css";

const faqData = [
  {
    question: "What age group do you admit?",
    answer: "We provide special education services for children aged 3 to 24 years."
  },
  {
    question: "Which disabilities do you support?",
    answer: "We support Autism, Intellectual Disability, Learning Disability, Hearing Impairment, Physical Disability and Multiple Disabilities."
  },
  {
    question: "Do you provide therapy services?",
    answer: "Yes, we provide Speech Therapy, Occupational Therapy, Behaviour Therapy and Physiotherapy."
  },
  {
    question: "What is the admission process?",
    answer: "Admission includes parent counselling, child assessment and preparation of an Individualized Education Plan (IEP)."
  },
  {
    question: "What are the school timings?",
    answer: "Monday to Friday, 8:30 AM to 2:00 PM."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="container py-5">
      <h2 className="text-center fw-bold text-primary mb-4">
        Frequently Asked Questions
      </h2>

      <div className="faq-wrapper">
        {faqData.map((item, index) => (
          <div
            className={`faq-card ${activeIndex === index ? "active" : ""}`}
            key={index}
          >
            <div
              className="faq-question"
              onClick={() => toggle(index)}
            >
              {item.question}
              <span className="icon">
                {activeIndex === index ? "−" : "+"}
              </span>
            </div>

            <div className="faq-answer">
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;