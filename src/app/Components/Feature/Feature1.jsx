"use client"
import { useEffect } from "react";
import SectionTitle from "../Common/SectionTitle";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import data from '../../Data/feature1.json';
import About1 from "../About/About1";
import counter from '../../Data/counter.json';
import Image from "next/image";
import Fix from "../Fix/Fix";
import Hrms from "../Hrms/Hrms";
import hrmssteps from '../../Data/hrmssteps.json';

const Feature1 = () => {

    useEffect(() => {
        loadBackgroudImages();
    }, []);

    return (
        <div className="feature-section" data-background="/assets/images/resource/feature-bg.jpg">
            <h1>Feature1</h1>
            <div className="container">
                <div className="row dream-bg">
                    <div className="col-lg-12">
                        <div className="dexon-section-title padding-lg2">
                            <SectionTitle
                                Title="Growing your Revenue using <br> Dexon Services"
                            ></SectionTitle>
                        </div>
                    </div>
                    <div className="dream-shape">
                        <Image src="/assets/images/resource/border2.png" alt="img" width={774} height={172} />
                    </div>
                    <div className="dream-shape2">
                        <Image src="/assets/images/resource/icon.png" alt="img" width={41} height={41} />
                    </div>
                </div>
                <div className="row">
                    {data.map((item, i) => (
                        <div key={i} className="col-lg-4 col-md-6">
                            <div className="feature-single-box">
                                <div className="feature-icon">
                                    <Image src={item.icon} alt="img" width={73} height={76} />
                                </div>
                                <div className="feature-content">
                                    <h2>{item.title}</h2>
                                    <p>{item.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <About1
                    mainimage="/assets/images/resource/about.png"
                    title1="Authority Stack"
                    listItem={[
                        "Trusted by SMEs across manufacturing, garment, retail, banking, education, NGOs, & security services Standards supported: ISO 9001 · 45001 · 22000 · 14001 · 21001- 39001",
                        "Payroll localisation: EPF/ETF/APIT, variable OT types, bilingual payslips , Bank files",
                        "Tech & reliability: Cloud hosting, role-based access, audit trail, daily backups",
                        "Team: Seasoned consultants, auditors, facilitators & certified OBT partners"
                    ]}
                    btnName="See our compliance stack"
                    btnUrl="/about"
                ></About1>

                <Hrms
                    data={hrmssteps}
                    heading="Customisable HRMS (Your rules, not ours)"
                    desc="Lead: One-size-fits-all HR rarely works. Our HRMS is fully customisable—we configure OT slabs, allowance/deduction formulas, multi-level approvals, payslip layouts , bank files, and reports to match your workflow."
                />
                <Fix
                    mainimage="/assets/images/resource/about.png"
                    title1="What You'll Fix in Week 1"
                    listItem={[
                        "TManual payroll chaos → Automated payroll with EPF/ETF/APIT; payslips go out on time",
                        "Attendance disputes → Biometric logs + clear late/OT rules; fewer escalations",
                        "Audit anxiety → Gap → documentation → internal audits → certification support",
                        "Team friction → Practical training & OBT; better communication and ownership"
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