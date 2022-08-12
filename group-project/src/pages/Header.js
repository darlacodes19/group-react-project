import { NavLink, Route, Routes } from "react-router-dom";

import Home from "./Home"
import About from "./About";
import NotFound from "./NotFound";


// NavLink: a component for setting the URL and
// providing navigation between components
// in our app
// without triggering a page refresh

function Header() {
  return (

    <div className="Header">
      <nav className="navbar">
        <div className="homeBtn">
          <NavLink style={{ textDecoration: "none" }} to={"/"}>
            LOGO
          </NavLink>
        </div>
      

      <ul className="heyon-ul1">
        <li>
          <NavLink style={{ textDecoration: "none" }} to={"/"}>
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink style={{ textDecoration: "none" }} to={"/about"}>
            ABOUT
          </NavLink>
        </li>
      </ul>
      </nav>
     <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="*" element={<NotFound />} />
    </Routes>
    </div>
  );
}

export default Header;
