import BreadCumb from '@/app/Components/Common/BreadCumb'
import SectionTitle from '@/app/Components/Common/SectionTitle'
import Faq from '@/app/Components/Faq/Faq'
import Feature2 from '@/app/Components/Feature/Feature2'
import Hrms from '@/app/Components/Services/Hrms'
import Problem from '@/app/Components/Services/Problem'
import { service_Faq3_1, service_Faq3_2 } from '@/app/Data/questions'
import { DeliveryOptions, Outcomes } from '@/app/Data/service/Hrms'
import { service3 } from '@/app/Data/service/service1'
import { Agendas } from '@/app/Data/service/service2method'
import Image from 'next/image'
import React from 'react'

const page = () => {
    return (
        <>
            <BreadCumb
                bgImg="/assets/images/resource/inner-bg.jpg"
                subTitle="Services"
                title="Practical Training that Changes On-the-Job Behaviour"
                content=" From leadership & supervisory skills to ISO awareness/internal auditor, OHS (45001), and team building via OBT at Kitulgala—programs built for Sri Lankan SMEs, delivered in EN/SI/TA, and measured for impact."
                button1="View Training Catalogue"
                button2="Book a Training Needs Call"
            />
            <div className="about-section style-three relative" data-background="/assets/images/resource/about-bg3.jpg">
                <div className="container">
                    <Problem data={service3} />


                    <div className="row align-items-center mt-5  ">
                        <div className="col-lg-6">
                            <div className="dexon-section-title ">
                                <SectionTitle
                                    Title="How We Make Training Stick"
                                ></SectionTitle>
                            </div>
                            <div className="serviceCard-list ">
                                <ul className="list-unstyled">
                                    <li><i className="bi bi-check2-all gap-4"></i>TNA (Training Needs Analysis) - quick discovery with managers to define behaviours and KPIs</li>
                                    <li><i className="bi bi-check2-all gap-4"></i>Design - contextual case studies, role plays, audit/drill simulations</li>
                                    <li><i className="bi bi-check2-all gap-4"></i>Delivery - interactive workshops (EN/SI/TA), on-site or off-site/OBT</li>
                                    <li><i className="bi bi-check2-all gap-4"></i>On-the-Job Practice - micro-tasks, observation checklists, supervisor coaching</li>
                                    <li><i className="bi bi-check2-all gap-4"></i>Follow-Through - 30•60•90-day check-ins; mini-audits; refresher micro-sessions</li>
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
                           <Hrms data={Outcomes} heading="Outcomes You Can Measure" />
                    </div>
                </div>
            </div>
             <Feature2 data={Agendas} heading="Agendas "/>
              <div className="about-section style-three relative" data-background="/assets/images/resource/about-bg3.jpg">
                <div className="container">
                    <div className="row align-items-center ">
                           <Hrms data={DeliveryOptions} heading="Delivery Options & Logistics" />

                    </div>
                    </div>
                    </div>
            <Faq leftdata={service_Faq3_1} rightdata={service_Faq3_2} />
        </>
    )
}

export default page