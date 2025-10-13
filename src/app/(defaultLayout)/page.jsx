import React from 'react';
import HeroBanner1 from '../Components/HeroBanner/HeroBanner1';
import Feature1 from '../Components/Feature/Feature1';
import Testimonial1 from '../Components/Testimonial/Testimonial1';
import Cta from '../Components/Cta/Cta';
import Hrms from '../Components/Hrms/Hrms';

const Home = () => {
    return (
        <div>
            <HeroBanner1
                bgmage="/assets/images/slider/hero-bg.jpg"
                Title1="HRMS & ISO Consulting"
                Title2="Global Payroll, Training & Security"
                content=" One partner for multi-country payroll and attendance (HRMS), end-to-end ISO readiness, leadership training & team offsites, and private security SOPs, audits, and event operations—start to scale."
                btnName=" Get Started"
                btnUrl="/about"
                heroShape1="/assets/images/slider/Frame-7.png"
                heroShape2="/assets/images/slider/hero-shp2.png"
            />
            <Feature1></Feature1>
           
            
            <Testimonial1></Testimonial1>
            <Cta 
            title="Ready to run a tighter, <br> compliant, growth-ready SME?"
            buttons={{ btn1: { label: " Book Free Consultation", link: "#" }, btn2: { label: "Get an HRMS Demo", link: "#" } }}
            sideicon={true}
            />
        </div>
    );
};

export default Home;