import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <NavLink to={`/home`}>
        {" "}
        <div className="header-logo">
          <img src="../src/images/logo-mei.png" alt="mei" />
        </div>
      </NavLink>
      <nav className="header-navigation">
        <ul className="nav-list">
          <li>
            {" "}
            <NavLink to={`/home`}> Home </NavLink>
          </li>
          <li>
            {" "}
            <NavLink to={`/properties`}> Properties</NavLink>
          </li>
          <li>
            <NavLink to={`/about`}> About us</NavLink>{" "}
          </li>
          <li>
            <NavLink to={`/services`}> Services</NavLink>
          </li>
          <li>
            <NavLink to={`/offices`}> Offices</NavLink>
          </li>
          <li>
            <NavLink to={`/blog`}> Blog</NavLink>
          </li>
          <li>
            <NavLink to={`/contact`}> Contact</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
