'use client'
import React from 'react';
import HeroBanner1 from '../Components/HeroBanner/HeroBanner1';
import Feature1 from '../Components/Feature/Feature1';
import Testimonial1 from '../Components/Testimonial/Testimonial1';
import Cta from '../Components/Cta/Cta';
import Service1 from '../Components/Services/Service1';
import Services2 from '../Components/Services/Services2';
import HomeResources from '../Components/Home/HomeResources';
import WhyChoose from '../Components/Home/WhyChoose';
import { howWework } from '../Data/services2';
import {handleuseCalendly}  from '../Components/CalendlyBadge/CalendlyBadge';
import Faq from '../Components/Faq/Faq';
import {  home_Faq1, home_Faq2 } from '@/app/Data/questions';


const Home = () => {
    const HeadingContent = { title1: 'Services' }
    	const Service2HeadingContent = {
		subtitle: 'Improve your Business',
		title: 'How We Work',
		Content: '(Add Content Here)',
		btnurl: '/service',
		mainImg: '/assets/images/resource/servc-thumb.png'
	}
     const calendlyAction = handleuseCalendly()
    return (
        <div>
            <HeroBanner1
                bgmage="/assets/images/slider/hero-bg.jpg"
                Title1="HRMS & ISO Consulting"
                Title2="Global Payroll, Training & Security"
                content=" One partner for multi-country payroll and attendance (HRMS), end-to-end ISO readiness, leadership training & team offsites, and private security SOPs, audits, and event operations—start to scale."
                heroShape1="/assets/images/slider/Frame-7.png"
                heroShape2="/assets/images/slider/hero-shp2.png"
                buttons={{ btn1: { label: " Get a 15-Minute Fit Call", link:calendlyAction }, btn2: { label: "Watch 90-sec HRMS Demo", link: "#" } }}
              
            />
            <Feature1/>
            <Service1 headcontent={HeadingContent} />
            <WhyChoose/>
            <Testimonial1/>
            <Services2 headcontent={Service2HeadingContent} data={howWework}/>
            <HomeResources/>
            <Faq leftdata={home_Faq1} rightdata={home_Faq2}/>
            <Cta
                title="Ready to build compliant, growth-ready operations?"
                buttons={{ btn1: { label: " Get Demo", link: "#" }, btn2: { label: "Talk to Sales", link: "#" } }}
                sideicon={true}
            />
        </div>
    );
};

export default Home;