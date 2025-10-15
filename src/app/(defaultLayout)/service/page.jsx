import About4 from '@/app/Components/About/About4';
import BreadCumb from '@/app/Components/Common/BreadCumb';
import Hrms from '@/app/Components/Hrms/Hrms';
import React from 'react';
import overflow from '@/app/Data/overflow.json'
import Questions from '@/app/Components/FaqQuestions/FaqQuestions';
import Cta from '@/app/Components/Cta/Cta';
import { service_Faq } from '@/app/Data/questions';
import scenarios from '../../Data/scenarios.json'
import Link from 'next/link';


const page = () => {

    return (
        <div>
            <BreadCumb
                bgImg="/assets/images/resource/inner-bg.jpg"
                subTitle="Services"
                title="HR & Payroll for Sri Lankan SMEs—<br/>Fast, Compliant, Customisable"
                content="Automate attendance, leave and payroll with EPF/ETF/APIT built-in. Configure approvals, payslips, bank files and reports to match your flow—then lock month-end with audit-ready packs."
                button1="Get a Live Demo"
                button2="Book Free Fit-Assessment"
            />
            <About4/>
            <Hrms data={overflow} heading="GUIDED WORKFLOW" />
            <Cta
                title="IMPLEMENTATION & CHANGE MANAGEMENT"
                content="Fit-Assessment → Prototype (1–2 weeks) with sample data → UAT & sign-off → Migration (masters, YTD, balances, history) → Go-Live (optional parallel run; period lock) → Post-Go (30–60–90 day tune-ups; L1/L2/L3 under SLA)."
                buttons={{ btn1: { label: "Book my Fit-Assessment", link: "#" } }}
                sideicon={false}
            />
            <div className="about-section style-three py-0 pb-5" data-background="/assets/images/resource/about-bg3.jpg">
                <div className="container"  >

                    {/* ---REAL-WORLD SCENARIOS-------- */}

                    <div className="row ">
                        <h2 className='my-5'>REAL-WORLD SCENARIOS</h2>

                        {scenarios.map((item, i) => (
                            <div key={i} className="col-lg-3 col-md-6 ">
                                <div className="feature-single-box feature-height">
                                    <div className="feature-content">
                                        <h2>{item.title}</h2>
                                        <p>{item.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
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
            </div>
            <Questions faqData={service_Faq} />
            <Cta
                title="Ready to see your rules running inside Shilpa HRMS?"
                buttons={{ btn1: { label: " Get a Live Demo", link: "#" }, btn2: { label: "Book Free Fit-Assessment", link: "#" } }}
                sideicon={false}
            />


        </div>
    );
};

export default page;