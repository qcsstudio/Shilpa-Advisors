import data from '../../Data/services1.json';
import parse from 'html-react-parser';
import Image from "next/image";
import Link from 'next/link';

const Services2 = () => {

	const HeadingContent = {
		subtitle: 'Improve your Business',
		title: 'How We Work',
		Content: '(Add Content Here)',
		btnurl: '/service',
		mainImg: '/assets/images/resource/servc-thumb.png'
	}

	return (
		<div className="my-5">
			<div className="container">
				<div className="row">
					<div className="col-lg-5">
						<div className="dexon-section-title white padding-lg">
							<h1 className='text-black'>{parse(HeadingContent.title)}</h1>
						</div>
					</div>
					<div className="col-lg-7">
						<div className="dexon-desc">
							<p>{HeadingContent.Content}</p>
						</div>
						<div className="services-icon">
							<a href={HeadingContent.btnurl}><i className="bi bi-arrow-right-short"></i></a>
						</div>

					</div>
				</div>
				<div className="row service-bg">
					<div className="col-lg-5">
						<div className="serivce-thumb">
							<Image src={HeadingContent.mainImg} alt="img" width={460} height={525} />
						</div>
					</div>
					<div className="col-lg-7">
						<div className="row">
							{data.map((item, i) => (
								<div key={i} className="col-lg-12">
									<div className="single-service-box2">
										{/* <div className="service-icon">
											<Image src={item.icon} alt="img" width={44} height={46} />
										</div> */}
										<div className="service-content">
											<h2 className="service-title">{item.title}</h2>
											<p className="service-desc">{item.desc}</p>

										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Services2;