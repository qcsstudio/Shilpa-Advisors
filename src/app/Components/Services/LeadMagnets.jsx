import React from 'react'

const LeadMagnets = () => {
    return (
        <>
            <section className="py-5" style={{ background: "#0d0d0d" }}>
                <div className="container text-light ">
                    <div className="row justify-content-center text-center mb-5">
                        <div className="col-lg-8">
                            <h2 className="fw-bold text-white">Lead Magnets</h2>

                        </div>
                    </div>

                    <div className="row  justify-content-center bg-dark rounded-5 py-5 text-center">

                        <div className="col-md-12 col-lg-3">
                            <div className="resource-card p-4 h-100 k border-end border-secondary">
                                <p className="mb-3 lh-lg">
                                    <strong>ISO 9001 Readiness <br />Checklist</strong>
                                </p>

                            </div>
                        </div>


                        <div className="col-md-12 col-lg-3">
                            <div className="resource-card p-4 h-100 bg-dark border-end border-secondary">
                                <p className="mb-3 lh-lg">
                                    <strong>Internal Audit Schedule <br /> Template</strong>
                                </p>

                            </div>
                        </div>

                        <div className="col-md-12 col-lg-3">
                            <div className="resource-card p-4 h-100 bg-dark border-end border-secondary">
                                <p className="mb-3 lh-lg">
                                    <strong>CAPA Log + NC <br /> Report</strong>
                                </p>

                            </div>
                        </div>

                        {/* <!-- Security --> */}
                        <div className="col-md-12 col-lg-3">
                            <div className="resource-card p-4 h-100 bg-dark">
                                <p className="mb-3 lh-lg">
                                    <strong>Food Traceability Drill <br /> Scrip</strong>
                                </p>

                            </div>
                        </div>
                    </div>

                </div>
            </section>

        </>
    )
}

export default LeadMagnets