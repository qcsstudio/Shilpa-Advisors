"use client"
import { useEffect } from "react";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import Link from "next/link";
import Image from "next/image";

const HeroBanner1 = ({bgmage,Title1,Title2,content,btnName,btnUrl,heroShape1,heroShape2,}) => {

	useEffect(() => {
        loadBackgroudImages();
      }, []);

    return (
        <div className="hero-section d-flex align-items-center" data-background={bgmage}>
			
		<div className="container-fluid">
			<div className="row hero-bg">
				<div className="col-lg-12 mx-2 mx-lg-5">
					<div className="hero-content d-flex gap-2 border">
						<div className="col-lg-9 ">
						<h1> {Title1} </h1>
						<h2> {Title2} </h2>
						<div className="hero-content-text-btn ">
							<Image src='/assets/images/slider/hero-arrow.png' alt="img" width={1350} height={50} className="  d-flex justify-content-start"   />
							<p>{content}sdfsdf</p>
							<div className="hero-button">
								<Link href={btnUrl}> {btnName} <i className="bi bi-arrow-right-short"></i></Link>
							</div>
						</div>
						</div>
						<div className="col-lg-3  hero-all-images d-none d-lg-block ">
							<div className="position-absolute hero-all-images1">
								<Image src={heroShape1} alt="img" width={300} height={150}   />
							</div>
							
							<div className="hero-all-images2">
								<Image src={heroShape2} alt="img" width={287} height={290}   />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
    );
};

export default HeroBanner1;