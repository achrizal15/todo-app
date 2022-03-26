import { Link } from "react-router-dom";


const Navbar = () => {
   return (
      <nav>
         <div className="nav-wrapper custom-nav">
            <Link to="/">OKTA PROJEK</Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
               <li><Link to="/">HOME</Link></li>
               <li><Link to="/about">ABOUT</Link></li>
               <li><Link to="/contact">CONTACT</Link></li>
            </ul>
         </div>
      </nav>
   )
}
export default Navbar;