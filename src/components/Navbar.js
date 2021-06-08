import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { FaBox } from "react-icons/fa";
import '../css/Navbar.css';

const Navbar = () => {
  const [color, setColor] = useState(true);

  const changeNavColor = () => {
    console.log(window.scroll());
    if(window.scrollY <= 45){
      setColor(true)
    }
    else{
      setColor(false);
    }
  }

  window.addEventListener('scroll', changeNavColor);

  return (
    <div className={ color ? "navbar" : "navbar-invert"}>
      <div className="nav-logo">
        <Link to="/">
          <FaBox/> BantuKurir
        </Link>
      </div>
      <div className="nav-menu">
        <div className="nav-links">
          <Link to="/input">Masukkan Tujuan</Link>
        </div>
        <div className="nav-links">
          <Link to="/cari">Cari Jalur</Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
