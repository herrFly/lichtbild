import React from 'react';
import { Link } from "gatsby"

import "./../../static/assets/css/main.css";


const MyFooter = () => (
    <div className="inner">
    <ul className="icons">
       <li><Link to="https://www.instagram.com/lichtbild_enthusiastin/"><span className="label">Instagram</span></Link></li>
        <li><Link to="/agb/"><span className="label">AGB</span></Link></li>
        <li><Link to="/widerrufbelehrung/"><span className="label">Widerrufsbelehrung</span></Link></li>
        <li><Link to="/datenschutz/"><span className="label">Datenschutz</span></Link></li>
        <li><Link to="/faq/"><span className="label">FAQ</span></Link></li>
    </ul>
    <p>&copy; Untitled. Design: <a href="https://html5up.net">HTML5 UP</a>.</p>
    </div>
  )
  export default MyFooter