import React, { useState } from "react";
import "../../styles/pages/contact.scss";
import decoratingClass from "../../assets/cake-decorating-class.jpg";

function Contact() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    subject: "",
  });

  const [showPopup, setShowPopup] = useState(false);

  const isFormValid =
    formData.firstname && formData.lastname && formData.subject;

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
        <img src={decoratingClass} alt="Cake Decorating Class" />
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
              <input
                type="text"
                name="firstname"
                placeholder="Your first name..."
                value={formData.firstname}
                onChange={handleChange}
              />
            </div>
            <div className="input-wrapper">
              <input
                type="text"
                name="lastname"
                placeholder="Your last name..."
                value={formData.lastname}
                onChange={handleChange}
              />
            </div>
            <div className="input-wrapper">
              <textarea
                name="subject"
                placeholder="Write something..."
                value={formData.subject}
                onChange={handleChange}
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
                <p>info@sprinkleandwhisk.com</p>
              </div>
              <div className="location">
                <i class="fa-solid fa-location-dot"></i>
                <p>248 Sugarberry Lane, Frostville, UT 90210</p>
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
                  Have questions about our cake decorating tools or need help
                  with an order? We'd love to hear from you! Whether you're a
                  beginner or a seasoned baker, our team is here to provide
                  support, share tips, and ensure your baking experience is as
                  sweet as possible. Fill out the "Send Us a Message" form, and
                  we'll get back to you as soon as possible.
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
