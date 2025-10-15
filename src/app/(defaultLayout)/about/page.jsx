import About3 from '@/app/Components/About/About3';
import VisionMissionCards from '@/app/Components/About/VisionMissionCards';
import BreadCumb from '@/app/Components/Common/BreadCumb';
import Cta from '@/app/Components/Cta/Cta';
import Feature3 from '@/app/Components/Feature/Feature3';
import Team from '@/app/Components/Team/Team';
import React from 'react';

const page = () => {
    return (
        <div className="about-page">
            <BreadCumb
                bgImg="/assets/images/resource/inner-bg.jpg"
                subTitle="About Us"
                title="Standards. People. Systems. Growth—Built for Sri Lankan SMEs"
                content="We turn standards into daily habits: HRMS Sri Lanka (EPF/ETF/APIT), ISO certification Sri Lanka, Training & OBT Kitulgala, and ISO 18788 security "
                button1="Book Free Consultation"
            />
            <VisionMissionCards/>
            <About3></About3>
            <Feature3></Feature3>
            <Team></Team>
            <Cta></Cta>
        </div>
    );
};

export default page;