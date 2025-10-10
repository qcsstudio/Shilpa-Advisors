import Image from "next/image";
import Link from "next/link";

const About1 = ({mainimage,title1,listItem,btnName,btnUrl}) => {
    return (
        <div className="row about-bg align-items-center">
        
        <div className="col-lg-6">
            <div className="about-thumb">
                <Image src={mainimage} alt="img" width={513} height={485}   />
            </div>
        </div>
        <div className="col-lg-6">
            <div className="dexon-section-title">
                <h1>{title1}</h1>
                
            </div>
            <div className="about-item-list">
                <ul>
                {listItem?.map((item, index) => (
                    <li key={index}><i className="bi bi-check2-all"></i> {item} </li>
                ))}
                </ul>
            </div>
            <div className="about-button2">
                <Link href={btnUrl} className="dexon-button">{btnName} <i className="bi bi-arrow-right-short"></i> </Link>
            </div>
        </div>
    </div>
    );
};

export default About1;