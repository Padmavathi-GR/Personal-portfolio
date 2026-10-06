"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  }

  return (
    <section className="page contact-page">
      <div className="contact-heading">
        <p className="section-label">GET IN TOUCH</p>

        <h1>Contact Me</h1>

        <p>
          Have a question, project idea or opportunity? Feel free to
          send me a message.
        </p>
      </div>

      <div className="contact-container">

        <div className="contact-info">
          <h2>Let's Connect</h2>

          <p>
            I am always interested in learning, collaborating and
            exploring new opportunities.
          </p>

          <div className="contact-item">
            <strong>Email</strong>
            <span>padmavathi@example.com</span>
          </div>

          <div className="contact-item">
            <strong>Location</strong>
            <span>India</span>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>

          <label htmlFor="name">Your Name</label>

          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Your Email</label>

          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="message">Your Message</label>

          <textarea
            id="message"
            name="message"
            placeholder="Write your message..."
            rows="6"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit" className="primary-btn">
            Send Message
          </button>

          {submitted && (
            <p className="success-message">
              Thank you! Your message has been submitted successfully.
            </p>
          )}

        </form>
      </div>
    </section>
  );
}