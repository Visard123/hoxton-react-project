import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Property() {
  const params = useParams();
  const [prona, setProna] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:4000/properties/${params.id}`)
      .then((resp) => resp.json())
      .then((pronaFromServer) => setProna(pronaFromServer));
  }, []);

  if (prona === null) {
    return <h2>Loading...</h2>;
  }
  return (
    <div className="property-details">
      <div>
        <h2 className="property-title">{prona.title}</h2>
        <img src={prona.image} alt={prona.tile} />
        <ul className="general-details">
          <li>ID: {prona.id}</li>
          <li>CATEGORY: {prona.category_Id}</li>
          <li>STATUS: {prona.status}</li>
          <li>PRICE: {prona.price}</li>
          <li>SQM: {prona.surface}</li>
        </ul>
        <div className="property-description">
          <h2>Description</h2>
          <p>{prona.description}</p>
        </div>
        <div className="property-specifications">
          <h2>Specifications</h2>
          <ul className="specific-data">
            <li>BEDROOMS: {prona.rooms}</li>
            <li>BATHROOMS: {prona.bathrooms}</li>
            <li>SQM: {prona.surface}</li>
            <li>LOCATION: {prona.location}</li>
            <li>MORTGAGAE: {prona.mortgage}</li>
            <li>PRICE: {prona.price}</li>
            <li>FLOOR: {prona.floor}</li>
          </ul>
        </div>
      </div>
      <div>
        <div className="agent-wrapper">
          <h2>Property Broker</h2>
          <ul className="our-agent">
            <li>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Ilir_Meta_%28portrait%29.jpg/422px-Ilir_Meta_%28portrait%29.jpg"
                alt="ilir"
              />
              <p>Ilir Meta</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
