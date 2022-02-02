import { useEffect, useState } from "react";
import { Link, Navigate, Route, Routes } from "react-router-dom";

import "./App.css";
import BackgroundImage from "./components/BackgroundImage";
import Header from "./components/Header";
import Properties from "./components/Properties";
import SearchForm from "./components/Search-Form";
import About from "./pages/About";
import AllProperties from "./pages/AllProperties";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact.jsx";
import Home from "./pages/Home";
import Offices from "./pages/Offices";
import Property from "./pages/Property";

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

      <Routes>
        <Route index element={<Navigate to="/home" />} />
        <Route
          path="/home"
          element={
            <Home
              handlePropertyFilter={handlePropertyFilter}
              resetFilters={resetFilters}
              properties={properties}
            />
          }
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/offices" element={<Offices />} />
        <Route path="/blog" element={<Blog />} />
        <Route
          path="/properties"
          element={<AllProperties properties={properties} />}
        />
        <Route path="/properties/:id" element={<Property />} />
      </Routes>

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
