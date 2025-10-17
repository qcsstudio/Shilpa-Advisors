import React from 'react'

const HomeResources = () => {
  return (
    <>
    <section className="py-5" style={{background: "#0d0d0d"}}>
  <div className="container text-light ">
    <div className="row justify-content-center text-center mb-5">
      <div className="col-lg-8">
        <h2 className="fw-bold text-white">Resources</h2>
        
      </div>
    </div>

    <div className="row  justify-content-center bg-dark rounded-5 py-5 text-center">
      {/* <!-- HRMS --> */}
      <div className="col-md-12 col-lg-3">
        <div className="resource-card p-4 h-100 k border-end border-secondary">
          <p className="mb-3 lh-lg">
            <strong>HRMS:</strong><br /> Global Payroll Readiness <br/> Checklist
          </p>
          {/* <a href="#" className="text-success text-decoration-none fw-semibold">
            Learn more <i className="bi bi-arrow-up-right ms-1"></i>
          </a> */}
        </div>
      </div>

      {/* <!-- ISO --> */}
      <div className="col-md-12 col-lg-3">
        <div className="resource-card p-4 h-100 bg-dark border-end border-secondary">
          <p className="mb-3 lh-lg">
            <strong>ISO:</strong> <br /> ISO 9001 Internal <br/>Audit Plan
          </p>
          {/* <a href="#" className="text-success text-decoration-none fw-semibold">
            Learn more <i className="bi bi-arrow-up-right ms-1"></i>
          </a> */}
        </div>
      </div>

      {/* <!-- Training --> */}
      <div className="col-md-12 col-lg-3">
        <div className="resource-card p-4 h-100 bg-dark border-end border-secondary">
          <p className="mb-3 lh-lg">
            <strong>Training:</strong> <br />TNA (Training Needs Analysis) Template 
          </p>
          {/* <a href="#" className="text-success text-decoration-none fw-semibold">
            Learn more <i className="bi bi-arrow-up-right ms-1"></i>
          </a> */}
        </div>
      </div>

      {/* <!-- Security --> */}
      <div className="col-md-12 col-lg-3">
        <div className="resource-card p-4 h-100 bg-dark">
          <p className="mb-3 lh-lg">
            <strong>Security:</strong> <br />Security SOP Starter<br/> Kit 
          </p>
          {/* <a href="#" className="text-success text-decoration-none fw-semibold">
            Learn more <i className="bi bi-arrow-up-right ms-1"></i>
          </a> */}
        </div>
      </div>
    </div>

  </div>
</section>

    </>
  )
}

export default HomeResources