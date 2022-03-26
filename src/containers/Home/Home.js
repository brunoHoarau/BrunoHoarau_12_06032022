import { Component } from "react";
import { Link } from "react-router-dom";
import './Home.css'

class Home extends Component {
  render(){
    return(
      <div className="home">
       <div className="home-users">
        <Link to="/mock/12">User id 12 (Données mockés)</Link>
        <Link to="/express/12">User id 12 (Serveur Express)</Link>
       </div>
       <div className="home-users">
        <Link to="/mock/18">User id 18 (Données mockés)</Link>
        <Link to="/express/18">User id 18 (Serveur Express)</Link>
       </div>
      </div>
    )
  }
}

export default Home;