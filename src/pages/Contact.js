import React from "react";

export default function Contact() {
  return (
    <section className="py-5">
      <div className="container px-5">
        <div className="bg-light rounded-4 py-5 px-4 px-md-5">
          <div className="text-center mb-5">
            <div className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 mb-3">
              <i className="bi bi-envelope"></i>
            </div>
            <h1 className="fw-bolder">Hubungi Saya</h1>
            <p className="lead fw-normal text-muted mb-0">Isi form dibawah</p>
          </div>
          <div className="row gx-5 justify-content-center">
            <div className="col-lg-8 col-xl-6">
              <form id="contactForm">
                <div className="form-floating mb-3">
                  <input
                    className="form-control"
                    id="name"
                    type="text"
                    placeholder="Enter your name..."
                    data-sb-validations="required"
                  />
                  <label for="name">Full name</label>
                  <div
                    className="invalid-feedback"
                    data-sb-feedback="name:required"
                  >
                    A name is required.
                  </div>
                </div>

                <div className="form-floating mb-3">
                  <input
                    className="form-control"
                    id="email"
                    type="email"
                    placeholder="name@example.com"
                    data-sb-validations="required,email"
                  />
                  <label for="email">Email address</label>
                  <div
                    className="invalid-feedback"
                    data-sb-feedback="email:required"
                  >
                    An email is required.
                  </div>
                  <div
                    className="invalid-feedback"
                    data-sb-feedback="email:email"
                  >
                    Email is not valid.
                  </div>
                </div>

                <div className="form-floating mb-3">
                  <input
                    className="form-control"
                    id="phone"
                    type="tel"
                    placeholder="(123) 456-7890"
                    data-sb-validations="required"
                  />
                  <label for="phone">Phone number</label>
                  <div
                    className="invalid-feedback"
                    data-sb-feedback="phone:required"
                  >
                    A phone number is required.
                  </div>
                </div>

                <div className="form-floating mb-3">
                  <textarea
                    className="form-control"
                    id="message"
                    type="text"
                    placeholder="Enter your message here..."
                    style={{ height: "10rem" }}
                    data-sb-validations="required"
                  ></textarea>
                  <label for="message">Message</label>
                </div>

                <div className="d-grid">
                  <button
                    className="btn btn-primary btn-lg disabled"
                    id="submitButton"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
