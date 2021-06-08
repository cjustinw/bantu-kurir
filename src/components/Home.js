import React from 'react'
import { FaBox } from "react-icons/fa";
import {IoMdArrowRoundForward} from 'react-icons/io';
import CourierLogo from '../images/courier.png';
import "../css/Home.css"
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="Home">
      <div className="Home-title">
        <h1><FaBox/> BantuKurir</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum interdum odio ut arcu placerat gravida at id sapien. </p>
        <Link to="/input"><button>Masukkan Lokasi <div className="Arrow-logo"><IoMdArrowRoundForward/></div></button></Link>
      </div>
      <img src={CourierLogo} alt="Courier-Logo" />
    </div>
  )
}

export default Home
