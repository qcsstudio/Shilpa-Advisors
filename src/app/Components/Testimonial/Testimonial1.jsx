"use client"
import { useEffect } from "react";
import SectionTitle from "../Common/SectionTitle";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import Slider from "react-slick";
import data from '../../Data/testimonial1.json';
import CounterCard from "./CounterCard";
import Link from "next/link";
import Image from "next/image";

const Testimonial1 = () => {

	useEffect(() => {
		loadBackgroudImages();
	}, []);

	const settings = {
		dots: false,
		infinite: true,
		speed: 600,
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: false,
		swipeToSlide: true,
		responsive: [
			{
				breakpoint: 1399,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 1199,
				settings: {
					slidesToShow: 2,
				}
			}, {
				breakpoint: 575,
				settings: {
					slidesToShow: 1,
				}
			}
		]
	};

	return (
		<div className="testimoonial-section" data-background="/assets/images/resource/testi-bg.jpg">
			<div className="container">
			
				<div className="row">
					<div className="testi-list owl-carousel cs_slider_gap_30 ">
						<Slider {...settings}>
							{data.map((item, index) => (
								<div key={index} className="col-lg-12 ">
									<div className="testimonial-single-box ">
										<div className="testi-people">
											<Image src={item.image} alt="img" width={75} height={75} />
										</div>
										<div className="people-name">
											<h2> {item.title} </h2>
											<span>{item.subTitle}</span>
										</div>
										<div className="testi-description ">
											<p>“{item.desc}”</p>
										</div>
										<div className="company-logo ">
											<a href="#"><Image src={item.icon} alt="img" width={75} height={25} /></a>
										</div>
										<div className="company-rating ">
											<ul>
												<li><i className="bi bi-star-fill"></i></li>
												<li><i className="bi bi-star-fill"></i></li>
												<li><i className="bi bi-star-fill"></i></li>
												<li><i className="bi bi-star-fill"></i></li>
												<li><i className="bi bi-star-half"></i></li>
											</ul>
										</div>
									</div>
								</div>
							))}
						</Slider>
					</div>
				</div>
			</div>
			
		</div>

	);
};

export default Testimonial1;