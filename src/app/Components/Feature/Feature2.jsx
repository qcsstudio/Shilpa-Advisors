"use client"
import { useEffect } from 'react';
import SectionTitle from '../Common/SectionTitle';
import loadBackgroudImages from '../Common/loadBackgroudImages';
import Image from 'next/image';

const Feature2 = ({data}) => {

    useEffect(() => {
        loadBackgroudImages();
      }, []);

    return (
        <div className="feature-section style-two" data-background="/assets/images/resource/feature-bg2.jpg">
			<h1>Feature 2</h1>
		<div className="container">
			<div className="row dream-bg">
				<div className="col-lg-12">
					<div className="dexon-section-title white padding-lg text-center">
                        <SectionTitle
                            Title="The Shilpa Method"
                            // Content="Distinctively supply exceptional services after uniquely integrate alternative markets rather emerging initiatives."
                        ></SectionTitle>
					</div>
				</div>
				<div className="dream-shape2">
				<Image src="/assets/images/resource/shape2.png" alt="img" width={43} height={43}   />
				</div>
			</div>
			<div className="row justify-content-center">
            {data?.map((item, i) => (
				<div key={i} className="col-lg-4 col-md-6">
					<div className="feature-single-box">
						{/* <div className="feature-icon">
						<Image src={item.icon} alt="img" width={70} height={65}   />
						</div> */}
						<div className="feature-content">
							<h2 className=''>{item.heading}</h2>
							<p>{item.time} </p>
							<ul>
								{item.list?.map((list,idx)=>(
									<li key={idx}>{list}</li>
								))}
							</ul>
						</div>
					</div>
				</div>
				
                ))}
			</div>
			<div className='d-flex justify-content-center'>

			<button className='rounded-2 px-5 py-2 bg-dark text-white border-0 flex' >Get a Project Plan & Timeline<i className="bi bi-arrow-right-short ms-2"></i></button>
			</div>
		</div>
	</div>
    );
};

export default Feature2;