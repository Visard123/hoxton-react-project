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
          <ul className="nav-list">
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
        <div className="searching-form ">
          <h2>Search for Properties </h2>
          <form action="" className="form-elements">
            <div className="reference-input">
              <h3>Property ID</h3>
              <input type="text" placeholder="Reference" />
            </div>
            <div className="property-type">
              <h3>Property Type </h3>
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
              <h3>Status </h3>
              <select name="" id="">
                {" "}
                <option value="1"> For Sale</option>
                <option value="2">For Rent</option>
              </select>
            </div>
            <div className="property-type">
              <h3>Rooms </h3>
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
              <h3>City </h3>
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
              <h3>Zone</h3>
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
            <button type="submit">Search</button>
          </form>
        </div>

        <div className="properties-list">
          <ul className="listof-properties">
            <li>
              <div className="property-elements">
                <img
                  src="https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                  alt="apartment"
                />
                <div className="property-specification">
                  <img src="" alt="img" />
                  <img src="" alt="img " />
                  <img src="" alt="img" />
                </div>
              </div>
              <div>
                <h2>Title</h2>
              </div>
              <div>
                <h2>location</h2>
                <p>Price</p>
              </div>
            </li>
            <li>
              <div className="property-elements">
                <img
                  src="https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                  alt="apartment"
                />
                <div className="property-specification"></div>
              </div>
            </li>
            <li>
              <div className="property-elements">
                <img
                  src="https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                  alt="apartment"
                />
                <div className="property-specification"></div>
              </div>
            </li>
            <li>
              <div className="property-elements">
                <img
                  src="https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                  alt="apartment"
                />
                <div className="property-specification"></div>
              </div>
            </li>
            <li>
              <div className="property-elements">
                <img
                  src="https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                  alt="apartment"
                />
                <div className="property-specification"></div>
              </div>
            </li>
            <li>
              <div className="property-elements">
                <img
                  src="https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                  alt="apartment"
                />
                <div className="property-specification"></div>
              </div>
            </li>
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
