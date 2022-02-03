import { useEffect, useState } from "react";
import { Link, Navigate, Route, Routes } from "react-router-dom";

import "./App.css";
import BackgroundImage from "./components/BackgroundImage";
import Footer from "./components/Footer";
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

      <Footer />
    </div>
  );
}

export default App;
