import { useEffect, useState } from "react";

import "./App.css";
import Header from "./components/Header";
import SearchForm from "./components/Search-Form";

function App() {
  const [properties, setProperties] = useState([]);
  const [allProperties, setAllProperties] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/properties")
      .then((resp) => resp.json())
      .then((propertyfromserver) => {
        setAllProperties(propertyfromserver);
        setProperties(propertyfromserver);
      });
  }, []);

  function handlePropertyFilter(formFilters) {
    const filteredProperties = allProperties.filter((property) => {
      if (formFilters.id) {
        return formFilters.id === property.id;
      }
      return (
        formFilters.categoryId === property.category_Id &&
        formFilters.status === property.status &&
        formFilters.rooms === property.rooms &&
        formFilters.city === property.city &&
        formFilters.zone === property.location
      );
    });
    setProperties(filteredProperties);
  }
  function resetFilters(e) {
    setProperties(allProperties);
  }
  return (
    <div className="App">
      <Header />
      <section>
        <div className="background-image">
          <img
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="villa"
          />
        </div>
      </section>
      <main className="main">
        <SearchForm
          handlePropertyFilter={handlePropertyFilter}
          resetFilters={resetFilters}
        />
        <div className="properties-list">
          <ul className="listof-properties">
            {properties.map((property) => (
              <li key={property.id}>
                <div className="property-elements">
                  <img src={property.image} alt={property.title} />
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
            ))}
          </ul>
        </div>
      </main>
      <footer>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam
          blanditiis adipisci atque, voluptas in, aspernatur nesciunt quam,
          dignissimos accusamus unde harum natus ipsa voluptates voluptatum?
          Impedit, quaerat qui! Vitae, neque.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          labore provident iste excepturi eveniet consequuntur ut doloremque
          nostrum cum minima deleniti aspernatur, delectus nulla mollitia ipsum
          earum quisquam dignissimos rerum.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi quidem
          vel hic ratione quam? Hic suscipit quia, ullam nostrum deleniti dicta,
          ad odit ab, ipsam aspernatur soluta recusandae voluptatum magni.
        </p>
      </footer>
    </div>
  );
}

export default App;
