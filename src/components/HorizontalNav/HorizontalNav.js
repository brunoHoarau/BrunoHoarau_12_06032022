import React, { Component } from "react";
import { Link } from 'react-router-dom';
import './HorizontalNav.css';
import LogoSportsee from '../../public/logo.png'

class HorizontalNav extends Component {
  constructor(props){
    super(props)
    this.state = {
        count : 0,
      }
  }

  render() {
    return(
      <div id="header-h">
        <div id="sportsee-logo">
          <img src={LogoSportsee} alt="Logo sportsee"/>
        </div>

        <div id="navbar-h">
          <nav className="navbar-h-link">
            <Link to='/' >Acceuil</Link>
            <Link to='/' >Profil</Link>
            <Link to='/' >Réglage</Link>
            <Link to='/' >Communauté</Link>
          </nav>
        </div>
      </div>
    )
  }
}

export default HorizontalNav;
