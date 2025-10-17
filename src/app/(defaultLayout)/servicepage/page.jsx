import Acheive from '@/app/Components/About/Acheive'
import BreadCumb from '@/app/Components/Common/BreadCumb'
import SectionTitle from '@/app/Components/Common/SectionTitle'
import Cta from '@/app/Components/Cta/Cta'
import Faq from '@/app/Components/Faq/Faq'
import Feature2 from '@/app/Components/Feature/Feature2'
import Problem from '@/app/Components/Services/Problem'
import WhySmeChoose from '@/app/Components/Services2/WhySmeChoose'
import { service_Faq2_1, service_Faq2_2 } from '@/app/Data/questions'
import { service2 } from '@/app/Data/service/service1'
import { shilpaMethod } from '@/app/Data/service/service2method'
import Image from 'next/image'
import React from 'react'

const page = () => {
    const about1listItem = [
        "Certification readiness with minimal disruption to operations",
        "Audit-proof documentation (SOPs, forms, registers, records) people actually use",
        "Measurable improvements in quality, safety, and compliance culture",
        "Buyer confidence and faster vendor onboarding"
    ]
    const service2Deliverables = [
        "Policies, SOPs, forms, registers, checklists (editable)",
        "Risk & opportunities register; legal/other requirements matrix",
        "Training slides + attendance records; competency matrix",
        "Internal audit program, audit checklists & reports",
        "CAPA log, NC tracker, management review pack",
        "Pre-audit rehearsal + certification-day script"
    ]
    return (
        <>
            <BreadCumb
                bgImg="/assets/images/resource/inner-bg.jpg"
                subTitle="Services"
                title="Get ISO-Certified—Fast, Practical, Audit-Ready"
                content="We take Sri Lankan SMEs from Gap → Documentation → Training → Internal Audits → Certification across not limited to ISO 9001, 45001, 22000, 14001, 21001, 39001 (plus HACCP/GMP). Clear deliverables, no last-minute fire drills."
                button1=" Book ISO Readiness Call "
                button2=" Download ISO 9001 Checklist (Free)"
            />
            <div className="about-section style-three " data-background="/assets/images/resource/about-bg3.jpg">
                <div className="container">
                    <Problem data={service2} />
                    <Acheive
                        mainimage="/assets/images/resource/about.png"
                        title1="WHAT YOU'LL ACHIEVE"
                        listItem={about1listItem}
                        btnName="Download the Sri Lanka Payroll Checklist (PDF)"
                        btnUrl="/about"
                    />
                </div>
            </div>
            <Feature2 data={shilpaMethod} />
            <div className="about-section style-three relative" data-background="/assets/images/resource/about-bg3.jpg">
                <div className="container">

                    <Acheive
                        mainimage="/assets/images/resource/about.png"
                        title1="Deliverables "
                        listItem={service2Deliverables}
                        btnName="See sample documents"
                        btnUrl="/about"
                    />
                    <div className="row align-items-center mt-5  ">
                        <div className="col-lg-6">
                            <div className="dexon-section-title ">
                                <SectionTitle
                                    Title="Why choose us"
                                ></SectionTitle>
                            </div>
                            <div className="serviceCard-list ">
                                <ul className="list-unstyled">
                                    <li><i className="bi bi-check2-all gap-4"></i>Local SME expertise: apparel, retail, services, education, food processing</li>
                                    <li><i className="bi bi-check2-all gap-4"></i>Audit-day discipline: We rehearse the audit so there are no surprises</li>
                                    <li><i className="bi bi-check2-all gap-4"></i>“Use it daily” documentation: lean templates that match real workflows</li>
                                    <li><i className="bi bi-check2-all gap-4"></i>Measurable wins: fewer NCs, faster buyer approval, cleaner handovers</li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="about-thumb2">
                                <Image src="/assets/images/resource/about2.png" alt="img" width={521} height={521} />
                                <div className="about-shape">
                                    <Image src="/assets/images/resource/shape-2.png" alt="img" width={46} height={46} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <WhySmeChoose/> */}
            <Faq leftdata={service_Faq2_1} rightdata={service_Faq2_2} />

            <Cta
                title=" Ready to pass audit—without the panic?"
                buttons={{ btn1: { label: " Book ISO Readiness Call", link: "#" }, btn2: { label: " Get Sample SOP Pack", link: "#" } }}
                sideicon={false}
            />



        </>
    )
}

export default page