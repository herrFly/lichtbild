import React from "react";
import { Link } from "gatsby";

import "./../../static/assets/css/main.css";

const MyFooter = () => (
  <div className="inner">
    <ul className="icons">
      <li>
        <a
          href="https://www.instagram.com/lichtbild_enthusiastin/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
      </li>
      <li>
        <Link to="/agb/">
          <span className="label">AGB</span>
        </Link>
      </li>
      <li>
        <Link to="/widerrufbelehrung/">
          <span className="label">Widerrufsbelehrung</span>
        </Link>
      </li>
      <li>
        <Link to="/impressum/">
          <span className="label">Impressum</span>
        </Link>
      </li>
      <li>
        <Link to="/datenschutz/">
          <span className="label">Datenschutz</span>
        </Link>
      </li>
      <li>
        <Link to="/faq/">
          <span className="label">FAQ</span>
        </Link>
      </li>
    </ul>
    <p className="footerCopy">
      &copy; Untitled. Design:{" "}
      <a className="footerCopy" href="https://html5up.net">
        HTML5 UP
      </a>
      .
    </p>
  </div>
);
export default MyFooter;
