"use client"
import parse from 'html-react-parser';
import { useEffect } from 'react';
import loadBackgroudImages from '../Common/loadBackgroudImages';
import Image from 'next/image';

const HeroBanner2 = ({bgImg,title,content,btnName,btnUrl,mainImg,compaignNumber,compaignnName,salesNumber,salesName,textAnimation}) => {

    useEffect(() => {
        loadBackgroudImages();
      }, []);

    return (
        <div className="hero-section hero2 d-flex align-items-center" data-background={bgImg}>
            <h1>Hero 2 </h1>
                <div className="container">
                    <div className="row align-items-center hero-bg">
                        <div className="col-lg-6">
                            <div className="hero-content2">
                                <h1> {parse(title)} </h1>
                                <p>{content}</p>
                                <div className="hero-button">
                                    <a href={btnUrl}> {btnName} <i className="bi bi-arrow-right-short"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="hero-thumb">
                            <Image src={mainImg} alt="img" width={565} height={600}   />
                                <div className="hero-counter-box">
                                    <div className="hero-counter">
                                        <h2 className="counter">{compaignNumber}</h2>
                                        <h2 className="counter1">K+</h2>
                                        <span className="counter-text">{compaignnName}</span>
                                    </div>
                                    <div className="hero-counter upper">
                                        <h2 className="counter">{salesNumber}</h2>
                                        <h2 className="counter1">%</h2>
                                        <span className="counter-text">{salesName}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="hero-all-shape">
                            <div className="hero-shape6">
                            <Image src="/assets/images/slider/circle2.png" alt="img" width={76} height={77}   />
                            </div>
                            <div className="hero-shape7">
                                <h1>{textAnimation}</h1>
                            </div>
                            <div className="hero-shape8">
                            <Image src="/assets/images/resource/shap-1.png" alt="img" width={36} height={36}   />                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default HeroBanner2;