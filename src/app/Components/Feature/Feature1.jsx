"use client"
import { useEffect } from "react";
import SectionTitle from "../Common/SectionTitle";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import Acheive from "../About/Acheive";
import Fix from "../Fix/Fix";



const Feature1 = () => {

    useEffect(() => {
        loadBackgroudImages();
    }, []);

    return (
        <div className="feature-section" data-background="/assets/images/resource/feature-bg.jpg">
           
            <div className="container">
                <Acheive
                    mainimage="/assets/images/resource/about.png"
                    title1=" Built for global scale, local rules"
                    listItem={[
                        "HRMS: country taxes, social security, payslips, bank files",
                        "ISO: 9001 · 45001 · 22000 · 14001 · 21001 · 39001 · HACCP/GMP",
                        "Training: leadership, compliance, experiential offsites",
                        "Security: ISO 18788 alignment, SOPs, incident reporting"
                    ]}
                    btnName="See our compliance stack"
                    btnUrl="/about"
                />

               
                <Fix
                    mainimage="/assets/images/resource/about.png"
                    title1="What You'll Fix in Week 1"
                    listItem={[
                        "HRMS: Manual payroll → automated cycles; on-time payslips",
                        "ISO: Chaos → clear gap plan; docs, IAs, audit-day support",
                        "Training: Skill gaps → focused workshops; visible ownership",
                        "Security: Ad-hoc ops → SOPs, drills, surprise audits & logs"
                    ]}
                    btnName="Show me how it works"
                    btnUrl="/about" />


                {/* <div className="row counter-bg">
                {counter.map((item, i) => (
                    <div key={i} className="col-lg-3 col-md-6">
                        <div className="single-counter-box">
                            <div className="counter-title">
                                <h1 className="counter">{item.number}</h1>
                                <h1>{item.symbol}</h1>
                            </div>
                            <div className="counter-text">
                                <p>{item.desc}</p>
                            </div>
                        </div>
                    </div>
                ))}

                <div className="dream-shape3">
                    <Image src="/assets/images/resource/shape-1.png" alt="img" width={530} height={403} />
                </div>
                <div className="dream-shape4">
                    <Image src="/assets/images/resource/shape-2.png" alt="img" width={46} height={46} />
                </div>
            </div> */}
            </div>
        </div >

    );
};

export default Feature1;