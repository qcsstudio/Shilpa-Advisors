import About3 from '@/app/Components/About/About3';
import Founder from '@/app/Components/About/Founder';
import VisionMissionCards from '@/app/Components/About/VisionMissionCards';
import BreadCumb from '@/app/Components/Common/BreadCumb';
import Feature3 from '@/app/Components/Feature/Feature3';
import Services2 from '@/app/Components/Services/Services2';
import { whatWeDo } from '@/app/Data/services2';
import React from 'react';

const page = () => {
    const Service2HeadingContent = {
		subtitle: 'Improve your Business',
		title: 'What we do',
		Content: '(Add Content Here)',
		btnurl: '/service',
		mainImg: '/assets/images/resource/servc-thumb.png'
	}
    return (
        <div className="about-page">
            <BreadCumb
                bgImg="/assets/images/resource/inner-bg.jpg"
                subTitle="About Us"
                title="Standards. People. Systems. Growth—Built for Sri Lankan SMEs"
                content="We turn standards into daily habits: HRMS Sri Lanka (EPF/ETF/APIT), ISO certification Sri Lanka, Training & OBT Kitulgala, and ISO 18788 security "
                button1="Book Free Consultation"
            />
             <About3/>
            <VisionMissionCards />
            <Feature3 />
            <Services2 headcontent={Service2HeadingContent} data={whatWeDo}/>
            <Founder/>
           
        </div>
    );
};

export default page;