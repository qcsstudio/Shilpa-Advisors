import BreadCumb from '@/app/Components/Common/BreadCumb';
import React from 'react';
import overflow from '@/app/Data/overflow.json'
import Questions from '@/app/Components/FaqQuestions/FaqQuestions';
import Cta from '@/app/Components/Cta/Cta';
import { service_Faq } from '@/app/Data/questions';
import { service1 } from '@/app/Data/service/service1';
import WORKFLOW from '@/app/Components/WORKFLOW/WORKFLOW';
import Scenerios from '@/app/Components/Services/Scenerios';
import Reliability from '@/app/Components/Services/Reliability';
import Problem from '@/app/Components/Services/Problem';
import Acheive from '@/app/Components/About/Acheive';
import CoreModules from '@/app/Components/Services/CoreModules';
import Hrms from '@/app/Components/Services/Hrms';


const page = () => {
    const about1listItem = [
        "Payroll in minutes with EPF/ETF/APIT and stamp duty auto-calculated.",
        "Fewer disputes via biometric logs + late/OT/half-day/no-pay rules and approvals.",
        "Audit-ready month-end with reconciliation, statutory bundles and period locking.",
        "Buyer confidence and faster vendor onboarding"
    ]
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
            <div className="about-section style-three relative" data-background="/assets/images/resource/about-bg3.jpg">
                <div className="container">
                    <Problem data={service1} />
                    <Acheive
                        mainimage="/assets/images/resource/about.png"
                        title1="WHAT YOU'LL ACHIEVE"
                        listItem={about1listItem}
                        btnName="Download the Sri Lanka Payroll Checklist (PDF)"
                        btnUrl="/about"
                    />
                    <CoreModules />
                    <Hrms />
                </div>
            </div>
            <WORKFLOW data={overflow} heading="GUIDED WORKFLOW" />
            <Cta
                title="IMPLEMENTATION & CHANGE MANAGEMENT"
                content="Fit-Assessment → Prototype (1–2 weeks) with sample data → UAT & sign-off → Migration (masters, YTD, balances, history) → Go-Live (optional parallel run; period lock) → Post-Go (30–60–90 day tune-ups; L1/L2/L3 under SLA)."
                buttons={{ btn1: { label: "Book my Fit-Assessment", link: "#" } }}
                sideicon={false}
            />
            <div className="about-section style-three py-0 pb-5" data-background="/assets/images/resource/about-bg3.jpg">
                <Scenerios />
                <Reliability />
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