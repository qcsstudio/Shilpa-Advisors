import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { FaArrowRight } from "react-icons/fa";

const Founder = () => {
    return (
        <>
            <div className='container bg-dark p-4'>
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
                    <div className="col-lg-6 position-absolute mt-4 mt-lg-0 text-start px-5  circleimage  ">
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
                <div className="profile-card   ">
                    <div className="d-flex  ">
                        <span className="arrow text-white"><FaArrowRight /></span>
                        <div>
                            <h5 className="mb-0">Shilpa Advisors</h5>
                            <small>CO-FOUNDER</small>
                            <p>
                                Aruna Maganaarachchi is at the helm of Shilpa Advisors Pvt Ltd. Aruna is a retired Commander of the Sri Lanka Navy and also with over two decades of working experience in the private sector. Aruna had his education at Wesley College and the Royal College of Colombo before joining SL Navy. He retired from the military services with battle casualties in late 2001.
                                With the qualifications of Human Resources Management, Marketing Management and Quality Assurance he held several managerial positions in leading business enterprises in Sri Lanka for over twenty-four years. Further, he holds an MBA and presently reading for the DBA.
                                With the experience and knowledge gained through the working experience and the observations made during the travels island-wide “Shilpa Advisors” was formed with the intention of uplifting the Sri Lankan Small and Medium Enterprises of different sectors.
                                Aruna will personally attend to your needs with frequent site visits and consultations.
                                He will be with you from the GAP Analysis - Training & Records maintenance - Audits - Certification - Continuation of Certification                    </p>
                        </div>

                    </div>




                    <div className="d-flex gap-3 mt-4">
                        <Link href="#" className="social-btn">LINKEDIN</Link>
                        <Link href="#"  className="social-btn">INSTA GRAM</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Founder