"use client";
import React from "react";

const LeadMagnets = ({ title, items }) => {
  return (
    <section className="py-5" style={{ background: "#0d0d0d" }}>
      <div className="container text-light">
        <div className="row justify-content-center text-center mb-5">
          <div className="col-lg-8">
            <h2 className="fw-bold text-white">{title}</h2>
          </div>
        </div>

        <div className="row justify-content-center bg-dark rounded-5 py-5 text-center">
          {items.map((item, index) => (
            <div
              key={index}
              className={`col-md-12 col-lg-3 ${
                index !== items.length - 1 ? "border-end border-secondary" : ""
              }`}
            >
              <div className="resource-card p-4 h-100 bg-dark">
                <p
                  className="mb-3 lh-lg"
                  dangerouslySetInnerHTML={{ __html: `<strong>${item}</strong>` }}
                ></p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadMagnets;
