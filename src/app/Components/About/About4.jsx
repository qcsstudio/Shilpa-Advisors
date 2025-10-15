"use client"
import { useEffect } from 'react';
import data from '../../Data/services2.json';
import data2 from '../../Data/coremodules.json';
import SectionTitle from '../Common/SectionTitle';
import loadBackgroudImages from '../Common/loadBackgroudImages';
import Link from 'next/link';
import Image from 'next/image';
import About1 from './About1';
import customhrms from '../../Data/customhrms.json'


const About4 = () => {

	useEffect(() => {
		loadBackgroudImages();
	}, []);

	return (
		<>
			<div className="about-section style-three relative" data-background="/assets/images/resource/about-bg3.jpg">
				{/* <p>about 4</p> */}

				<div className="container">

					{/* --------- PROBLEM → AGITATION → SOLUTION ------------------------*/}

					<div className="row">
						{data.map((item, i) => (
							<div key={i} className="col-lg-4 col-md-6">
								<div className="single-choose-us-box">
									<div className="choose-icon">
										<Image src={item.icon} alt="img" width={30} height={28} />
									</div>
									<div className="choose-content">
										<h3> {item.title} </h3>
										<p> {item.desc} </p>
									</div>
								</div>
							</div>
						))}

					</div>

					{/* ------------ WHAT YOU’LL ACHIEVE --------------------- */}
					<About1
						mainimage="/assets/images/resource/about.png"
						title1="WHAT YOU’LL ACHIEVE (benefits list)"
						listItem={[
							"Payroll in minutes with EPF/ETF/APIT and stamp duty auto-calculated.",
							"Fewer disputes via biometric logs + late/OT/half-day/no-pay rules and approvals.",
							"Audit-ready month-end with reconciliation, statutory bundles and period locking.",
							"Happier employees via self-service leave and instant bilingual e-payslips."
						]}
						btnName="Download the Sri Lanka Payroll Checklist (PDF)"
						btnUrl="/about"
					></About1>

					{/* ----------------- Core Modules ------------- */}

					<div className="row dream-bg my-5 ">
						<div className="col-lg-12">
							<div className="dexon-section-title padding-lg2">
								<SectionTitle
									Title="CORE MODULES"
								></SectionTitle>
							</div>
						</div>
						<div className="dream-shape mt-5">
							<Image src="/assets/images/resource/border2.png" alt="img" width={774} height={172} />
						</div>

					</div>

					<div className="row ">
						{data2.map((item, i) => (
							<div key={i} className="col-lg-6 col-md-12 ">
								<div className="feature-single-box">
									<div className="feature-content">
										<h2>{item.title}</h2>
										<p>{item.desc}</p>
										<p>{item.desc2}</p>
										<div className='breatcam-section-button d-flex'>
											<Link href="#">{item.cta}<i className="bi bi-arrow-right-short"></i></Link>

										</div>

									</div>
								</div>
							</div>
						))}
					</div>
							{/*---------- Customisable Hrms ----------------*/}
					  <div className="row ">
										<h2 className='my-5'>CUSTOMISABLE HRMS</h2>
										{customhrms.map((item, i) => (
											<div key={i} className="col-lg-3 col-md-6 ">
												<div className="feature-single-box feature-height">
													<div className="feature-content">
														<h2 >{item.title}</h2>
														<p>{item.desc}</p>
													</div>
												</div>
											</div>
										))}
									</div>

				
			</div>
			</div>


		</>
	);
};

export default About4;