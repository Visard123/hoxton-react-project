import { Link } from "react-router-dom";

export default function Properties(props) {
  return (
    <div className="properties-list">
      <ul className="listof-properties">
        {props.properties.map((property) => (
          <Link to={`/properties/${property.id}`}>
            <li key={property.id}>
              <div className="property-elements">
                <img src={property.image} alt={property.title} />
                <p className="property-status">{property.status}</p>
                <div className="property-specification">
                  <span>
                    {" "}
                    <img
                      src="../src/images/surface.svg 
                    "
                      alt="img "
                    />
                    <p>{property.surface}</p>
                  </span>
                  <span>
                    <img
                      src="../src/images/bedroom.svg 
                    "
                      alt="img"
                    />
                    <p>{property.rooms}</p>
                  </span>
                  <span>
                    <img
                      src="../src/images/bathroom.svg 
                    "
                      alt="img"
                    />
                    <p>{property.bathrooms}</p>
                  </span>
                </div>
              </div>
              <div className="property-data">
                <div>
                  <h2>{property.title}</h2>
                </div>
                <div>
                  <h2>
                    {property.city}, {property.location}
                  </h2>
                  <p>€{property.price}</p>
                </div>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
