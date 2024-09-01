const ServiceCard = (item) => {
    return (
       
        <div className="carditem">
            <h4> {item.name} </h4>
            <p>{item.description}</p>
            <p>{item.price}</p>
            <p>{item.duration}</p>

        </div>
       
    )
}
export default ServiceCard;