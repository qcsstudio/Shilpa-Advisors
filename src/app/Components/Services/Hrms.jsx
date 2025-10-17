import React from 'react'
import customhrms from '@/app/Data/customhrms.json'
const Hrms = () => {
    return (
        <>
            <div className="row ">
                <h2 className='my-5'>CUSTOMISABLE HRMS</h2>
                {customhrms?.map((item, i) => (
                    <div key={i} className="col-lg-3 col-md-6 ">
                        <div className="feature-single-box feature-height">
                            <div className="feature-content">
                                <h2 >{item.title}</h2>
                                <p>{item.desc}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Hrms