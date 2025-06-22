import React from "react";
import "./ContactForm.css";

const ContactForm = () => {
  return (
    <div className="form-bg">
      <div className="container py-5">
        <h2 className="text-white mb-4">Contact Us</h2>
        <p className="text-white">
          Fill out the form and our team will get back to you shortly
        </p>
        <form className="row g-3 mt-3">
          <div className="col-md-4">
            <input
              type="text"
              className=" transparent-input"
              placeholder="First Name"
            />
          </div>
          <div className="col-md-4">
            <input
              type="text"
              className=" transparent-input"
              placeholder="Second Name"
            />
          </div>
          <div className="col-md-4">
            <input
              type="email"
              className=" transparent-input"
              placeholder="Email Address"
            />
          </div>
          <div className="col-md-4">
            <input
              type="text"
              className=" transparent-input"
              placeholder="Phone"
            />
          </div>
          <div className="col-md-4">
            <input
              type="text"
              className=" transparent-input"
              placeholder="Company"
            />
          </div>
          <div className="col-md-4">
            <textarea
              className=" transparent-input"
              placeholder="Message"
              rows="1"
            />
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-danger px-4 rounded-pill">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
