import Link from 'next/link'
import React from 'react'

const Reliability = () => {
  return (
    <>
        <div className="container"  >
                    <div className="row ">
                        {/*----------- SECURITY & RELIABILITY--------------- */}

                        <div className='col-lg-12  rounded-5 bg-white px-5 py-4 security-realiabilty'>
                            <h2>SECURITY & RELIABILITY</h2>
                            <p className='mt-4 w-50 '>RBAC with audit trails; encryption in transit/at rest; daily backups; optional IP restrictions & 2FA; Huawei Cloud hosting with mirrored storage & recovery runbooks.</p>
                            <div className='breatcam-section-button d-flex justify-content-start'>
                                <Link href="#">Read client stories<i className="bi bi-arrow-right-short"></i></Link>

                            </div>
                        </div>

                    </div>
                </div>
    </>
  )
}

export default Reliability