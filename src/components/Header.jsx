import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <Link to={`/home`}>
        {" "}
        <div className="header-logo">
          <img src="../src/images/logo-mei.png" alt="mei" />
        </div>
      </Link>
      <nav className="header-navigation">
        <ul className="nav-list">
          <li>
            {" "}
            <Link to={`/home`}> Home </Link>
          </li>
          <li>
            {" "}
            <Link to={`/properties`}> Properties</Link>
          </li>
          <li>
            <Link to={`/about`}> About us</Link>{" "}
          </li>
          <li>
            <Link to={`/services`}> Services</Link>
          </li>
          <li>
            <Link to={`/offices`}> Offices</Link>
          </li>
          <li>
            <Link to={`/blog`}> Blog</Link>
          </li>
          <li>
            <Link to={`/contact`}> Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
