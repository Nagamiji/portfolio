import React, { useState } from "react";
import emailjs from "emailjs-com";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaEnvelope, FaUser, FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          setSent(true);
          e.target.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section className="contact section bg-light py-5" id="contact">
      <div className="container">
        <h2 className="section-title text-center fw-bold mb-4">📩 Contact Me</h2>

        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="p-4 border rounded bg-white shadow-sm">
              <h4 className="fw-bold text-secondary">📬 Send a Message</h4>

              {sent ? (
                <p className="text-success fw-bold text-center">✅ Your message has been sent successfully!</p>
              ) : (
                <form onSubmit={sendEmail}>
                  {/* Name Input */}
                  <div className="mb-3">
                    <label className="form-label fw-bold">
                      <FaUser className="me-2 text-primary" /> Name
                    </label>
                    <input type="text" name="name" className="form-control" placeholder="Your Name" required />
                  </div>

                  {/* Email Input */}
                  <div className="mb-3">
                    <label className="form-label fw-bold">
                      <FaEnvelope className="me-2 text-primary" /> Email
                    </label>
                    <input type="email" name="email" className="form-control" placeholder="Your Email" required />
                  </div>

                  {/* Message Input */}
                  <div className="mb-3">
                    <label className="form-label fw-bold">Message</label>
                    <textarea name="message" rows="4" className="form-control" placeholder="Write your message..." required></textarea>
                  </div>

                  {/* Submit Button */}
                  <button type="submit" className="btn btn-primary w-100">
                    <FaPaperPlane className="me-2" /> Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
