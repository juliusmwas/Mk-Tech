import { useRef } from "react";
import emailjs from "@emailjs/browser";

function ContactUs() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,       // Service ID
        import.meta.env.VITE_EMAILJS_TEMPLATE_CONTACT, // Template ID (Contact form)
        form.current,                                  // Form reference
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY        // Public key
      )
      .then(
        () => {
          alert("Message sent successfully ✅");
          form.current.reset(); // clear form after send
        },
        (error) => {
          console.error("FAILED...", error.text);
          alert("Failed to send ❌. Please try again.");
        }
      );
  };

  return (
    <section id="contact">
      <div className="contact">
        <h2>Let's Build the Future, Together</h2>
        <div className="contact-details">
          <div className="form-container">
            <form ref={form} onSubmit={sendEmail}>
              <label htmlFor="fullname">Full Name</label>
              <input type="text" name="fullname" required />

              <label htmlFor="email">Email</label>
              <input type="email" name="email" required />

              <label htmlFor="projecttype">Project Type</label>
              <select name="projecttype" required>
                <option value="web development">Web Development</option>
                <option value="branding">Branding</option>
                <option value="automation">Automation</option>
                <option value="consultancy">Consultancy</option>
                <option value="other">Other</option>
              </select>

              <label htmlFor="message">Message</label>
              <textarea name="message" required></textarea>

              <button type="submit" className="contact-btn">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
