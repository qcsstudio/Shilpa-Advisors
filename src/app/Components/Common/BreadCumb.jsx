"use client"
import { useEffect } from "react";
import loadBackgroudImages from "./loadBackgroudImages";
import parse from 'html-react-parser';
import Image from "next/image";
import Link from "next/link";

const BreadCumb = ({ bgImg, title, content, buttons }) => {

  useEffect(() => {
    loadBackgroudImages();
  }, []);

  return (

    <div className="breatcam-section d-flex align-items-center" data-background={bgImg}>
      <div className="container">
        <div className="row dream-bg align-items-center">
          <div className="col-lg-12">
            <div className="breatcam-content text-center">
              {/* <h4> <span> {subTitle} </span> </h4> */}
              <h1>{parse(title)}</h1>
              <p>{content}</p>
            </div>

            {buttons && <div className="hero-button ">
              <div
                className={`d-flex gap-4 mt-4 flex-wrap justify-content-center`}
              >
                {buttons.btn1?.label && (
                  <button
                    onClick={buttons.btn1?.link || "#"}
                    className="rounded-2 bg-black text-white px-5 py-3 border-0"
                  >
                    {buttons.btn1.label}
                    <i className="bi bi-arrow-right-short ms-2 "></i>
                  </button>
                )}
                {buttons.btn2?.label && (
                  <button
                    onClick={buttons.btn2?.link || "#"}
                    className="rounded-2 bg-black text-white px-5 py-3 border-0"
                  >
                    {buttons?.btn2?.label}
                    <i className="bi bi-arrow-right-short ms-2 "></i>
                  </button>
                )}
              </div>
            </div>}



          </div>
          <div className="inner-page-shape">
            <div className="inner-shape">
              <Image src="/assets/images/resource/shape-2.png" alt="img" width={46} height={46} />
            </div>
            <div className="inner-shape2">
              <Image src="/assets/images/resource/shap-2.png" alt="img" width={40} height={40} />
            </div>
            <div className="inner-shape3">
              <Image src="/assets/images/resource/inner-shp.png" alt="img" width={287} height={249} />
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default BreadCumb;