import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";
import "./Services.css";

function Services() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState("");
  const formRef = useRef(null);

  const openModal = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setStatus("");
    setSelectedService("");
    if (formRef.current) formRef.current.reset();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setStatus("Sending...");

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setStatus("✅ Request sent! We’ll reply within 24 hours.");
        setSending(false);
        setTimeout(closeModal, 1200);
      })
      .catch((err) => {
        console.error("EmailJS error:", err);
        setStatus("❌ Something went wrong. Please try again.");
        setSending(false);
      });
  };

  // ✅ Dynamic modal content based on selectedService
  const renderFormFields = () => {
    switch (selectedService) {
      case "Web & App Development":
        return (
          <>
            <label htmlFor="message">Your Vision</label>
            <textarea
              id="message"
              name="message"
              placeholder="Describe your app/website idea..."
              required
            />
          </>
        );
      case "Automation & Smart Systems":
        return (
          <>
            <label htmlFor="message">Workflow to Automate</label>
            <textarea
              id="message"
              name="message"
              placeholder="Which process do you want to automate?"
              required
            />
          </>
        );
      case "UI/UX Design & Prototyping":
        return (
          <>
            <label htmlFor="message">Design Preferences</label>
            <textarea
              id="message"
              name="message"
              placeholder="Describe your design style, colors, or goals..."
              required
            />
          </>
        );
      case "Emerging Tech Solutions":
        return (
          <>
            <label htmlFor="message">Tech Goals</label>
            <textarea
              id="message"
              name="message"
              placeholder="Tell us how you want to use AI, ML, or cloud..."
              required
            />
          </>
        );
      case "Branding & Digital Identity":
        return (
          <>
            <label htmlFor="message">Brand Story</label>
            <textarea
              id="message"
              name="message"
              placeholder="Tell us about your brand and what you want to achieve..."
              required
            />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <section id="services">
      <div className="services">
        <h1 className="services-h1">
          Our <span>Services</span>
        </h1>
        <p className="services-p">
          At MK <span>Tech</span> we don't just offer services — we engineer
          digital experiences that move people, solve problems and prepare your
          business for the future.
        </p>

        <div className="services-card">
          {/* Web & App Development */}
          <div className="card">
            <h2>Web & App Development</h2>
            <p>
              We don't build websites — we build digital engines for growth. <br />
              From sleek, responsive websites to powerful applications, we create
              platforms that are fast, secure and scalable.
            </p>
            <div className="cta">
              <p>Starts at $500</p>
              <button onClick={() => openModal("Web & App Development")}>
                Launch a Project
              </button>
            </div>
          </div>

          {/* Automation & Smart Systems */}
          <div className="card">
            <h2>Automation & Smart Systems</h2>
            <p>
              Let the tech work while you focus on what matters most. <br />
              We design intelligent systems that automate repetitive tasks,
              streamline workflows, and save time.
            </p>
            <div className="cta">
              <p>Custom Pricing</p>
              <button onClick={() => openModal("Automation & Smart Systems")}>
                Let's Automate
              </button>
            </div>
          </div>

          {/* UI/UX */}
          <div className="card">
            <h2>UI/UX Design & Prototyping</h2>
            <p>
              Design isn’t decoration — it’s communication. <br />
              We create clean, futuristic, and functional interfaces that guide
              users naturally.
            </p>
            <div className="cta">
              <p>Starts at $300</p>
              <button onClick={() => openModal("UI/UX Design & Prototyping")}>
                View Design Work
              </button>
            </div>
          </div>

          {/* Emerging Tech */}
          <div className="card">
            <h2>Emerging Tech Solutions</h2>
            <p>
              The future is already here — let's put it in your hands. <br />
              We help businesses unlock the power of AI, machine learning and
              cloud solutions to stay ahead.
            </p>
            <div className="cta">
              <p>Custom Pricing</p>
              <button onClick={() => openModal("Emerging Tech Solutions")}>
                Explore Tech
              </button>
            </div>
          </div>

          {/* Branding */}
          <div className="card">
            <h2>Branding & Digital Identity</h2>
            <p>
              Your brand isn't a logo — it's a story that people remember. <br />
              We craft unique digital identities that connect with your audience
              on a human level.
            </p>
            <div className="cta">
              <p>Starts at $250</p>
              <button onClick={() => openModal("Branding & Digital Identity")}>
                Build My Brand
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close" onClick={closeModal} aria-label="Close">
              ×
            </button>

            <h2>{selectedService}</h2>
            <p className="modal-sub">
              {selectedService === "Web & App Development" &&
                "Tell us about your idea and we’ll transform it into a digital experience that works."}
              {selectedService === "Automation & Smart Systems" &&
                "Describe what processes you’d like us to automate."}
              {selectedService === "UI/UX Design & Prototyping" &&
                "Share your design goals and style preferences."}
              {selectedService === "Emerging Tech Solutions" &&
                "Tell us how you’d like to use AI, ML, or cloud."}
              {selectedService === "Branding & Digital Identity" &&
                "Tell us your brand story and vision."}
            </p>

            <form ref={formRef} onSubmit={handleSubmit}>
              {/* hidden service field */}
              <input
                type="hidden"
                name="service_type"
                value={selectedService}
              />

              <label htmlFor="user_name">Full Name</label>
              <input
                id="user_name"
                type="text"
                name="user_name"
                placeholder="Enter your name"
                required
              />

              <label htmlFor="user_email">Email</label>
              <input
                id="user_email"
                type="email"
                name="user_email"
                placeholder="Enter your email"
                required
              />

              {renderFormFields()}

              <button type="submit" disabled={sending}>
                {sending ? "Sending..." : "Submit Request"}
              </button>
            </form>

            {status && <p className="status">{status}</p>}
          </div>
        </div>
      )}
    </section>
  );
}

export default Services;
