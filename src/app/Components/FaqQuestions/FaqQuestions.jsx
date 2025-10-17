'use client';
import Image from "next/image";
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { ImCross } from "react-icons/im";



const Questions = ({ faqData }) => {

    const [openIndex, setOpenIndex] = useState(null);

    const toggleAnswer = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="about-section style-three py-3 " data-background="/assets/images/resource/about-bg3.jpg">
            <h2 className="text-center fw-semibold display-5 mb-5">
                Frequently Asked Question's
            </h2>

            <div className="container"  >

                {/*--------------- Questions --------------*/}

                <div className="row align-items-center">


                    {/*  (FAQ List) */}
                    <div
                        className="col-lg-12 overflow-auto "

                    >
                        {faqData?.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white  rounded p-3 mb-3 "
                                onClick={() => toggleAnswer(index)}
                                style={{ cursor: "pointer" }}
                            >
                                <div className="d-flex justify-content-between align-items-center py-1 ">
                                    <span className="fw-medium text-dark">{item.question}</span>
                                    <button
                                        type="button"
                                        className="btn btn-link text-decoration-none p-0 text-dark"
                                    >
                                        {openIndex === index ? (
                                            <ImCross className="small" />
                                        ) : (
                                            <FaPlus />
                                        )}
                                    </button>
                                </div>

                                {openIndex === index && (
                                    <div className="mt-2 text-secondary small">{item.answer}</div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Questions;
