// import { NavLink, Route, Routes } from "react-router-dom";
import Footer from "./Footer";
import {NavLink, Route, Routes} from "react-router-dom"
import Advice from "../constants/advice";
import Home from "./Home"
import NotFound from "./NotFound";

// import Advice from "../constants/advice";

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
           <img src={require('../images/logo1.jpg')} alt="logo" className="logo"/>
          </NavLink>
        </div>
      

      <ul className="heyon-ul1">
        <li>
          <NavLink style={{ textDecoration: "none" }} to={"/"}>
            HOME
          </NavLink>
        </li>
         <li>
         <NavLink style={{ textDecoration: "none" }} to={"/advice"}>
           DAILY ADVICE
          </NavLink>
        </li>
      </ul>
      </nav>
      
      <Routes>
    <Route path="/" element={<Home />} />
    <Route path="*" element={<NotFound />} />
    <Route path="/advice" element={<Advice />} />
    </Routes>
   <Footer/>
    </div>
    
  );
}

export default Header;
