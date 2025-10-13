import About1 from '@/app/Components/About/About1';
import About4 from '@/app/Components/About/About4';
import BreadCumb from '@/app/Components/Common/BreadCumb';
import Hrms from '@/app/Components/Hrms/Hrms';
import Service1 from '@/app/Components/Services/Service1';
import React from 'react';
import overflow from '@/app/Data/overflow.json'
import Questions from '@/app/Components/FaqQuestions/FaqQuestions';
import serviceFaq from '@/app/Data/servicefaq.json'
import Cta from '@/app/Components/Cta/Cta';

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
            ></BreadCumb>
            <About4></About4>
            <Service1 />
            <Hrms data={overflow} heading="GUIDED WORKFLOW" />


            <Questions FaqData={serviceFaq} />
            <Cta
                title="Ready to see your rules running inside Shilpa HRMS?"
                buttons={{ btn1: { label: " Get a Live Demo", link: "#" }, btn2: { label: " Book Free Fit-Assessment", link: "#" } }}
                sideicon={false}
            />


        </div>
    );
};

export default page;