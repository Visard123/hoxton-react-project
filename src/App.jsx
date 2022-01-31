import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="header">
        <div className="header-logo">
          <img src="../src/images/logo-mei.png" alt="mei" />
        </div>
        <nav className="header-navigation">
          <ul>
            <li>Home</li>
            <li>Properties</li>
            <li>About us </li>
            <li>Services</li>
            <li>Offices</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>

      <main className="main">
        <div className="Searching-form ">
          Search for Properties
          <form action="">
            <input type="text" placeholder="Reference" />
            <div className="property-type">
              Poperty type
              <select name="" id="">
                {" "}
                <option value="1">Apartment</option>
                <option value="2">Comercial</option>
                <option value="3">Villa</option>
                <option value="4">Land</option>
                <option value="5">Restorant</option>
                <option value="6">Industrial</option>
              </select>
            </div>
            <div className="property-type">
              Status
              <select name="" id="">
                {" "}
                <option value="1">For Sale</option>
                <option value="2">For Rent</option>
              </select>
            </div>
            <div className="property-type">
              Rooms
              <select name="" id="">
                {" "}
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
              </select>
            </div>
            <div className="property-type">
              City
              <select name="" id="">
                {" "}
                <option value="1">Tirana</option>
                <option value="2">Durres</option>
                <option value="3">Vlora</option>
                <option value="4">Saranda</option>
                <option value="5">Fier</option>
                <option value="6">Korce</option>
              </select>
            </div>
            <div className="property-type">
              Zone
              <select name="" id="">
                {" "}
                <option value="1">Rruga Durresit</option>
                <option value="2">Astir</option>
                <option value="3">Teg</option>
                <option value="4">Porti</option>
                <option value="5">Qender</option>
                <option value="6">Gjiri Lalezit</option>
              </select>
            </div>
          </form>
        </div>

        <div className="properties-list">
          <ul>
            <li>ap1 </li>
            <li>ap2</li>
            <li>ap3</li>
            <li>ap4</li>
            <li>ap5</li>
            <li>ap6</li>
            <li>ap7</li>
            <li>ap8</li>
            <li>ap9</li>
          </ul>
        </div>
      </main>
    </div>
  );
}

export default App;
