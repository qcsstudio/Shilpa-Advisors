import Image from 'next/image'
import React from 'react'

const Problem = ({data}) => {
    return (
        <>
            <div className="row">
                {data?.map((item, i) => (
                    <div key={i} className="col-lg-4 col-md-6">
                        <div className="single-choose-us-box">
                            <div className="choose-icon">
                                <Image src={item.icon} alt="img" width={30} height={28} />
                            </div>
                            <div className="choose-content">
                                <h3> {item.title} </h3>
                                <p> {item.desc} </p>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </>
    )
}

export default Problem