"use client"
import { useEffect } from "react";
import ServiceCard from "./ServiceCard";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import Image from "next/image";

const Service1 = () => {

	const HeadingContent = {
		title1: 'Your rules, not ours',

		Content: ' We configure OT slabs, night/weekend premiums, late/early/no-pay, slabbed allowances/deductions, single/parallel/multi-level approvals by department/site/grade, payslips, bank files and report layouts aligned to your auditor’s checklist.',
	}

	useEffect(() => {
		loadBackgroudImages();
	}, []);


	return (
		<div className="service-section service" data-background="/assets/images/resource/service-bg.jpg">
			<div className="container">
				<div className="row dream1-bg">
					<div className="col-lg-6">
						<div className="row">
							<div className="col-lg-12">
								<div className="dexon-section-title white padding-lg1">
									<h1>{HeadingContent.title1}</h1>
									<p>{HeadingContent.Content}</p>
								</div>
							</div>
							<div className="col-lg-12">
								<div className="single-service-box upper2">
									<ServiceCard
										title="Rules & calculations"
										content="OT windows/rounding/grace; no-pay; allowance/deduction formulas."
									></ServiceCard>
								</div>
							</div>
							<div className="col-lg-12">
								<div className="single-service-box upper4">
									<ServiceCard
										title="Interfaces"
										content="Biometric devices; CSV/Excel ingest; bank files; GL mappings."
										btnName="Read More"
										btnUrl="/service/service-details"
									></ServiceCard>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-6">
						<div className="row">
							<div className="col-lg-12">
								<div className="single-service-box upper">
									<ServiceCard
										title="Workflows"
										content="Approvals with routing/escalations; roster/shift assignment."
									></ServiceCard>
								</div>
							</div>

							<div className="col-lg-12">
								<div className="single-service-box upper3">
									<ServiceCard
										title="Outputs"
										content="payslips, month-end packs, statutory bundles; scheduled emails.
 													Action row: Book Free Fit-Assessment · Ask about your bank/device · See a Month-End Pack"
									></ServiceCard>
								</div>
							</div>

						</div>
					</div>
					<div className="service-shape">
						<div className="serivce-shape">
							<Image src="/assets/images/resource/shap-2.png" alt="img" width={40} height={40} />
						</div>
						<div className="serivce-shape2">
							<Image src="/assets/images/resource/shape3.png" alt="img" width={70} height={69} />
						</div>
					</div>
				</div>
			</div>
		</div>

	);
};

export default Service1;