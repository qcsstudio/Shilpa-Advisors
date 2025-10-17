import Image from 'next/image'
import React from 'react'
import { FaArrowRight } from "react-icons/fa";

const Founder = () => {
    return (
        <>
            <div className='container bg-dark'>
                <div className="row align-items-center ">
                    {/* Left Image */}
                    <div className="col-lg-6  position-relative">
                        <Image
                            src="/assets/images/resource/Founder.png"
                            width={820}
                            height={547}
                            alt="founder_Image"
                            className=" rounded-3 border"
                        />
                    </div>

                    {/* Right Text + Circle */}
                    <div className="col-lg-6 position-absolute mt-4 mt-lg-0 text-start px-5 circleimage  ">
                        {/* Decorative circle */}
                        <Image
                            src="/assets/images/resource/founder-circle.png"
                            width={164}
                            height={78}
                            alt="circle"
                            className="position-absolute founder-circle "
                        />

                        {/* Text content */}
                        <h2 className="fw-semibold display-6  text-white">Meet The Founders</h2>
                        <p className="text-orange fs-5 ">Shilpa Advisors</p>
                    </div>
                </div>
                <div className="profile-card  ">
                    <div className="d-flex  ">
                        <span className="arrow text-white"><FaArrowRight/></span>
                        <div>
                            <h5 className="mb-0">Shilpa Advisors</h5>
                            <small>CO-FOUNDER AND VISUAL DESIGN DIRECTOR</small>
                             <p>
                        From frontline operations to calm, audit-ready systems. After leading rollouts and audits, we saw SMEs don’t need more theory—they need clear SOPs, HRMS configured to their rules, and coaching that sticks. Today we’re a practitioner-led team serving apparel, retail, education, services, logistics, and food.
                    </p>
                        </div>
                        
                    </div>

                   


                    <div className="d-flex gap-3 mt-4">
                        <button className="social-btn">LIN</button>
                        <button className="social-btn">IG</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Founder