import React, { useState } from "react";
import emailjs from "emailjs-com";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaEnvelope, FaUser, FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    // Check if environment variables are set
    const { REACT_APP_EMAILJS_SERVICE_ID, REACT_APP_EMAILJS_TEMPLATE_ID, REACT_APP_EMAILJS_PUBLIC_KEY } = process.env;

    if (!REACT_APP_EMAILJS_SERVICE_ID || !REACT_APP_EMAILJS_TEMPLATE_ID || !REACT_APP_EMAILJS_PUBLIC_KEY) {
      setError("Email service is not configured correctly. Please check your environment variables.");
      return;
    }

    // Send email using EmailJS
    emailjs
      .sendForm(
        REACT_APP_EMAILJS_SERVICE_ID, // Service ID
        REACT_APP_EMAILJS_TEMPLATE_ID, // Template ID
        e.target, // The form element
        REACT_APP_EMAILJS_PUBLIC_KEY // Public Key instead of user ID
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          setSent(true);
          setError(null); // Reset any errors
          e.target.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
          setError("Failed to send message. Please try again later.");
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
                <p className="text-success fw-bold text-center">
                  ✅ Your message has been sent successfully!
                </p>
              ) : (
                <>
                  {error && <p className="text-danger fw-bold text-center">{error}</p>}
                  <form onSubmit={sendEmail}>
                    {/* Name Input */}
                    <div className="mb-3">
                      <label className="form-label fw-bold">
                        <FaUser className="me-2 text-primary" /> Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Your Name"
                        required
                      />
                    </div>

                    {/* Email Input */}
                    <div className="mb-3">
                      <label className="form-label fw-bold">
                        <FaEnvelope className="me-2 text-primary" /> Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Your Email"
                        required
                      />
                    </div>

                    {/* Message Input */}
                    <div className="mb-3">
                      <label className="form-label fw-bold">Message</label>
                      <textarea
                        name="message"
                        rows="4"
                        className="form-control"
                        placeholder="Write your message..."
                        required
                      ></textarea>
                    </div>

                    {/* Submit Button */}
                    <button type="submit" className="btn btn-primary w-100">
                      <FaPaperPlane className="me-2" /> Send Message
                    </button>
                  </form>
                </>
              )}

              {error && (
                <p className="text-danger text-center mt-3">
                  ⚠️ {error}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
