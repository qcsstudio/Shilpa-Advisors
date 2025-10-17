import Acheive from '@/app/Components/About/Acheive'
import BreadCumb from '@/app/Components/Common/BreadCumb'
import Cta from '@/app/Components/Cta/Cta'
import Questions from '@/app/Components/FaqQuestions/FaqQuestions'
import Problem from '@/app/Components/Services/Problem'
import {  service_Faq2 } from '@/app/Data/questions'
import { service2 } from '@/app/Data/service/service1'
import React from 'react'

const page = () => {
       const about1listItem = [
        "Certification readiness with minimal disruption to operations",
        "Audit-proof documentation (SOPs, forms, registers, records) people actually use",
        "Measurable improvements in quality, safety, and compliance culture",
        "Buyer confidence and faster vendor onboarding"
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
            <div className="about-section style-three relative" data-background="/assets/images/resource/about-bg3.jpg">
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
            <Cta
                title="IMPLEMENTATION & CHANGE MANAGEMENT"
                content="Fit-Assessment → Prototype (1–2 weeks) with sample data → UAT & sign-off → Migration (masters, YTD, balances, history) → Go-Live (optional parallel run; period lock) → Post-Go (30–60–90 day tune-ups; L1/L2/L3 under SLA)."
                buttons={{ btn1: { label: "Book my Fit-Assessment", link: "#" } }}
                sideicon={false}
            />
             <Questions faqData={service_Faq2} />



        </>
    )
}

export default page