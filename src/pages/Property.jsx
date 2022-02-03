import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Property() {
  const params = useParams();
  const [prona, setProna] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:4000/properties/${params.id}`)
      .then((resp) => resp.json())
      .then((pronaFromServer) => setProna(pronaFromServer));
  }, []);

  return (
    <div className="property-details">
      <div>
        <h2>{prona.title}</h2>
        <img src={prona.image} alt={prona.tile} />
        <ul className="general-details">
          <li>ID: {prona.id}</li>
          <li>CATEGORY: {prona.category_Id}</li>
          <li>STATUS: {prona.status}</li>
          <li>PRICE: {prona.price}</li>
          <li>SQM: {prona.surface}</li>
        </ul>
        <h2>Description</h2>
        <p>{prona.description}</p>

        <div>
          <h2>Specifications</h2>
          <ul>
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
    </div>
  );
}
