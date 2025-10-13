const ServiceCard = ({title,content}) => {
    return (
        <div className="service-content">
        <h3 className="service-title">{title}</h3>
        <p className="service-desc">{content}</p>
    </div>
    );
};

export default ServiceCard;