"use client";
import { useState } from "react";
import Image from "next/image";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState({ type: "", message: "" });
  const [loading, setLoading] = useState(false);

  // 🧠 Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 📨 Handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    // ✅ Basic validation
    if (!formData.name || !formData.email || !formData.phone) {
      setStatus({ type: "error", message: "Please fill all required fields." });
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("https://formspree.io/f/myyleorq", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus({
          type: "success",
          message: "✅ Your message has been sent successfully!",
        });
        setFormData({ name: "", company: "", email: "", phone: "", message: "" });
      } else {
        setStatus({
          type: "error",
          message: "❌ Something went wrong. Please try again later.",
        });
      }
    } catch (error) {
      console.error("Error sending form:", error);
      setStatus({
        type: "error",
        message: "⚠️ Network error. Please check your connection.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-us py-5">
      <div className="container">
        <div className="row align-items-start">
          {/* Left Image */}
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div className="contact-thumb text-center">
              <Image
                src="/assets/images/resource/contact.jpg"
                alt="Contact"
                width={624}
                height={681}
                className="rounded-4 shadow"
              />
            </div>
          </div>

          {/* Right Form */}
          <div className="col-lg-6">
            <div className="dexon-section-title  ">
              <h1>Send Us a Message</h1>
              <p>
                Send us your valuable message & we’ll reply to you soon!
              </p>
            </div>

            <div className="contact-form-box3 border bg-white p-4 rounded-4 shadow-sm">
              <form onSubmit={handleSubmit}>
                <div className="row ">
                  <div className="col-12  ">
                    <h6 className="form-title ">Name*</h6>
                    <div className="form-box p-0 ">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter Your Name"
                        className="form-control "
                        required
                      />
                    </div>
                  </div>

                  <div className="col-12">
                    <h6 className="form-title">Company*</h6>
                    <div className="form-box">
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Enter Company Name"
                        className="form-control"
                      />
                    </div>
                  </div>

                  <div className="col-12">
                    <h6 className="form-title">Your E-Mail*</h6>
                    <div className="form-box">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter E-Mail"
                        className="form-control"
                        required
                      />
                    </div>
                  </div>

                  <div className="col-12">
                    <h6 className="form-title">Phone*</h6>
                    <div className="form-box">
                      <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter Phone Number"
                        className="form-control"
                        required
                      />
                    </div>
                  </div>

                  <div className="col-12">
                    <h6 className="form-title">Message*</h6>
                    <div className="form-box">
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Write Your Message"
                        rows="4"
                        className="form-control"
                      />
                    </div>
                  </div>

                  <div className="col-12 text-center buttons ">
                    <button
                      type="submit"
                      className={`btn btn-dark text-white px-5 py-2 rounded-pill ${
                        loading ? "disabled" : ""
                      }`}
                      disabled={loading}
                    >
                      {loading ? "Sending..." : "Submit Now"}
                    </button>
                  </div>
                </div>
              </form>

              {/* Status Message */}
              {status.message && (
                <div
                  className={`mt-3 text-center fw-semibold ${
                    status.type === "success"
                      ? "text-success"
                      : "text-danger"
                  }`}
                >
                  {status.message}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
