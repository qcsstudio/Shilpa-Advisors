import BreadCumb from '@/app/Components/Common/BreadCumb';
import Contact from '@/app/Components/Contact/Contact';
import WhatToBring from '@/app/Components/Contact/WhatToBring';
import Cta from '@/app/Components/Cta/Cta';
import React from 'react';

const page = () => {
    return (
        <div>
            <BreadCumb
                bgImg="/assets/images/resource/inner-bg.jpg"
                subTitle="Contact"
                title="Talk to a Human—Today"
                content=" Whether it's HR & Payroll (EPF/ETF/APIT), ISO certification, Training & OBT, or Security SOPs, we'll map your next steps in a brief, focused call."
                button1="Book Free Consultation"
                button2=" Chat on WhatsApp"
            />
            <Contact/>
            <WhatToBring/>
            <Cta
              title=" Ready to get a clear, practical plan?"
                buttons={{ btn1: { label: " Book Free Consultation", link: "#" }, btn2: { label: "Chat on WhatsApp", link: "#" } }}
                sideicon={false}
            />
        </div>
    );
};

export default page;