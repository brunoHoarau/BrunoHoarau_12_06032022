import { Component } from "react";
import { Link } from "react-router-dom";
import './Error404.css'
class Error404 extends Component {
  render(){
    return(
      <div className="error404">
        <h3>Error 404</h3>
        <p>Les données que vous avez demandé ne sont pas disponible ou introuvable</p>
        <Link to='/' className="error404Link">
          Retour en arrière pour choisir un nouveau mode de données
        </Link>
      </div>
    )
  }
}

export default Error404;