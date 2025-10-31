import Link from 'next/link'
import React from 'react'

const OurMethod = ({data1,data2,heading}) => {
    return (
        <>
            <div className="about-section  relative" data-background="/assets/images/resource/about-bg3.jpg">
                <div className="container">
                    <div className="row ">
                        <h2 className='my-5'>{heading}</h2>
                        {data1?.map((item, i) => (
                            <div key={i} className="col-lg-3 col-md-6 ">
                                <div className="feature-single-box feature-height">
                                    <div className="feature-content">
                                        <h2 >{item.heading}</h2>
                                        <p>{item.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                        {data2?.map((item, i) => (
                            <div key={i} className="col-lg-12 col-md-12">
                                <div className="method-single-box  d-flex justify-content-between align-items-center">
                                    <div className=" d-flex  align-items-center justify-content-start  w-75">
                                        <h2 className='' >{item.heading}</h2>
                                        <p className=' mt-4 ms-4 '>{item.desc}</p>
                                    </div>
                                    <div>
                                        <Link href={item.btnLink} className='bg-dark text-white px-4 py-3 rounded'>{item.btn}<i className="bi bi-arrow-right-short ms-2 "></i></Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default OurMethod