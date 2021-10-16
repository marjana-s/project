import {Link} from "react-router-dom";
import "./header.css";
import logo from'../../img/logo.jpg';
import corsina from'../../img/corsina.png'
export default function Header() {
  return (
    <body className="head">
      <div className="header">
        <div className='headerLobby'>
          <img src={logo} alt="" />
          <h1>LifeFood</h1>
        </div>
        <div className="elements">
          <input className="hederInput" type="text" />
          <button class="btn buttonSeach">Seach</button>
          <Link to="/Login" className="Login">Login</Link>
          <Link to="/Register" className="Register">Register</Link>
          <Link to="/Corsina">
            <img src={corsina} alt="" />
          </Link>
        </div>
      </div>
      <div className="navigationmenu">
        <Link to= "/main">Menu</Link>
        <Link to="/pizza">Pizza</Link>
        <Link to="/sushy">sushy</Link>
        <Link to="/promotions">promotions</Link>
      </div>
    </body>
  );
}
