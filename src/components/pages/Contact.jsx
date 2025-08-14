import React, { useState } from "react";
// import "../../styles/pages/contact.scss";
import contactImage from "../../assets/contact-us.jpg";

function Contact() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    subject: "",
  });

  const [showPopup, setShowPopup] = useState(false);

  const isFormValid =
    formData.firstname &&
    formData.lastname &&
    formData.email &&
    formData.subject;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    setFormData({
      firstname: "",
      lastname: "",
      subject: "",
    });

    setShowPopup(true);

    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  };

  return (
    <div className="main">
      <div className="contact-hero-image">
        <img src={contactImage} alt="Laptop and Phone" />
      </div>
      <div className="get-in-touch">
        <h1>Get In Touch</h1>
      </div>
      <div className="in-touch-text">
        <p>
          We're here to answer any questions you have about our products. Reach
          out to us directly or fill out the form below, and a member of our
          team will get back to you as soon as possible.
        </p>
      </div>

      <div className="contact-grid">
        <div className="left-column">
          <h1>Send Us a Message</h1>
          <form className="form" onSubmit={handleSubmit}>
            <div className="input-wrapper">
              <label htmlFor="firstname">
                First Name <span className="required">*</span>
              </label>
              <input
                type="text"
                id="firstname"
                name="firstname"
                placeholder="Your first name..."
                value={formData.firstname}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-wrapper">
              <label htmlFor="lastname">
                Last Name <span className="required">*</span>
              </label>
              <input
                type="text"
                id="lastname"
                name="lastname"
                placeholder="Your last name..."
                value={formData.lastname}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-wrapper">
              <label htmlFor="email">
                Email <span className="required">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your email..."
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-wrapper">
              <label htmlFor="subject">
                Message <span className="required">*</span>
              </label>
              <textarea
                id="subject"
                name="subject"
                placeholder="Write something..."
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <input
              type="submit"
              value="Submit"
              disabled={!isFormValid}
              style={{
                opacity: isFormValid ? 1 : 0.5,
                cursor: isFormValid ? "pointer" : "not-allowed",
              }}
            />
          </form>
          {showPopup && (
            <div className="popup-message">Message sent successfully!</div>
          )}
        </div>

        <div className="contact-info">
          <div className="map">
            <div className="info-block">
              <div className="header-line">
                <h1>Contact Information</h1>
              </div>
              <div className="phone-number">
                <i class="fa-solid fa-square-phone"></i>
                <p>(555) 382-9425</p>
              </div>
              <div className="email">
                <i class="fa-solid fa-envelope"></i>
                <p>info@glamandgadget.com</p>
              </div>
              <div className="location">
                <i class="fa-solid fa-location-dot"></i>
                <p>3125 Lumina Lane Suite 408 San Aurelia, CA 90211</p>
              </div>
              <div className="social-media">
                <i class="fa-brands fa-amazon"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-facebook"></i>
              </div>
              <div className="business-hours">
                <h2>Business Hours</h2>
                <p>
                  Monday - Friday 9:00am - 5:00pm MT <br />
                  Saturday & Sunday Closed
                </p>
              </div>
              <div className="service-description">
                <p>
                  Have questions about our fashion, jewelry, or tech products —
                  or need help with an order? We'd love to hear from you!
                  Whether you're refreshing your wardrobe, accessorizing your
                  look, or upgrading your gear, our team is here to help. Fill
                  out the “Send Us a Message” form, and we'll get back to you as
                  soon as possible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
