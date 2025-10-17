"use client"
import Slider from 'react-slick';
import data from '../../Data/testimonial2.json';
import { useEffect } from 'react';
import loadBackgroudImages from '../Common/loadBackgroudImages';
import Link from 'next/link';
import Image from 'next/image';

const Testimonial2 = () => {

    useEffect(() => {
        loadBackgroudImages();
      }, []);

    const settings = {
        dots: false,
        infinite: true,
        speed: 600,
        slidesToShow: 2,
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
          },{
            breakpoint: 575,
            settings: {
              slidesToShow: 1,
            }
          }
        ]
      };      

      const HeadingContent = {
        subTitle:'Testimonial',
        title1:'What Say Our Customers',
        title2:'About Dexon',
      }       

    const CallContent = {
        title1:'Are you excited to start Next',
        title2:'SEO Campaign?',
        btnName:'Get Started',
        btnUrl:'/contact',
      }  

    return (
        <div className="testimoonial-section style-two" data-background="/assets/images/resource/testimonial-bg.jpg">
			<h2>Testimonial2</h2>
		<div className="container">
			<div className="row dream-bg">
				<div className="col-lg-12">
					<div className="dexon-section-title padding-lg white">
						<h4>{HeadingContent.subTitle}</h4>
						<h1>{HeadingContent.title1}</h1>
						<h1>{HeadingContent.title2}</h1>
					</div>
				</div>
				<div className="testi-shape">
				<Image src="/assets/images/resource/shape2.png" alt="img" width={43} height={43}   />
				</div>
			</div>
			<div className="row">
				<div className="testi-list2 owl-carousel cs_slider_gap_30">
                    <Slider {...settings}>
                    {data?.map((item, index)=>(
					<div key={index} className="col-lg-12">
						<div className="testimonial-single-box">
							<div className="testi-people">
							<Image src={item.image} alt="img" width={75} height={75}   />
							</div>
							<div className="people-name">
								<h2> {item.title} </h2>
								<span>{item.subTitle}</span>
							</div>
							<div className="company-rating">
								<ul>
									<li><i className="bi bi-star-fill"></i></li>
									<li><i className="bi bi-star-fill"></i></li>
									<li><i className="bi bi-star-fill"></i></li>
									<li><i className="bi bi-star-fill"></i></li>
									<li><i className="bi bi-star-half"></i></li>
								</ul>
							</div>
							<div className="testi-description">
								<p>“{item.desc}”</p>
							</div>
						</div>
					</div>
                    ))}
                    </Slider>                                                                             
				</div>
			</div>

			<div className="row call-bg">
				<div className="col-lg-12">
					<div className="dexon-section-title text-center white">
						<h1>{CallContent.title1} </h1>
						<h1>{CallContent.title2}</h1>
					</div>
					<div className="dexon-button2 text-center">
						<Link href={CallContent.btnUrl}>{CallContent.btnName} <i className="bi-arrow-right-short"></i></Link>
					</div>
				</div>
			</div>

		</div>
	</div>
    );
};

export default Testimonial2;