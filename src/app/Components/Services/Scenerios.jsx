import React from 'react'
import scenarios from '../../Data/scenarios.json'

const Scenerios = () => {
    return (
        <>
            <div className="container"  >

                {/* ---REAL-WORLD SCENARIOS-------- */}

                <div className="row ">
                    <h2 className='my-5'>REAL-WORLD SCENARIOS</h2>

                    {scenarios?.map((item, i) => (
                        <div key={i} className="col-lg-3 col-md-6 ">
                            <div className="feature-single-box feature-height">
                                <div className="feature-content">
                                    <h2>{item.title}</h2>
                                    <p>{item.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Scenerios