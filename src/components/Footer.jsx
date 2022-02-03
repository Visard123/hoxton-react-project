import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <div className="mei-image">
        <img src="../src/images/logo-mei.png" alt="mei" />
        <p>
          Mei Realty është agjensi që operon kryesisht në ndërmjetësimin e
          Pronave të Paluajtshme. Zyra jonë operon që në vitin 2009 ne fushën e
          Pasurive të Palujtshme. Aktualisht e perbere nga 4 zyra ne Tirane dhe
          Durres.
        </p>

        <p>phone:+35542201010</p>
        <p>Linkedin</p>
        <p>Instagram</p>
      </div>

      <div>
        <h2>USEFUL LINKS</h2>
        <nav className="footer-navigation">
          <ul className="footer-list">
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
      </div>
      <div className="blog">
        <h2>BLOG</h2>

        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt="1"
        />
        <img
          src="https://images.unsplash.com/photo-1626178793926-22b28830aa30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt="2"
        />
        <img
          src="https://images.unsplash.com/photo-1602941525421-8f8b81d3edbb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt="3"
        />
      </div>
    </footer>
  );
}
