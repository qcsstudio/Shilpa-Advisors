import React from 'react'
import SectionTitle from '../Common/SectionTitle'
import Image from 'next/image'
import data2 from '../../Data/coremodules.json';
import Link from 'next/link';

const CoreModules = () => {
    return (
        <>
            <div className="row dream-bg my-5 ">
                <div className="col-lg-12">
                    <div className="dexon-section-title padding-lg2">
                        <SectionTitle
                            Title="CORE MODULES"
                        ></SectionTitle>
                    </div>
                </div>
                <div className="dream-shape mt-5">
                    <Image src="/assets/images/resource/border2.png" alt="img" width={774} height={172} />
                </div>

            </div>

            <div className="row ">
                {data2?.map((item, i) => (
                    <div key={i} className="col-lg-6 col-md-12 ">
                        <div className="feature-single-box">
                            <div className="feature-content">
                                <h2>{item.title}</h2>
                                <p>{item.desc}</p>
                                <p>{item.desc2}</p>
                                <div className='breatcam-section-button d-flex'>
                                    <Link href="#">{item.cta}<i className="bi bi-arrow-right-short"></i></Link>

                                </div>

                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default CoreModules