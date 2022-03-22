import React, { Component} from "react"
import { Link } from 'react-router-dom';
import './VerticalNav.css'
import Swim from '../../public/swim.png'
import Yoga from '../../public/yoga.png'
import Bike from '../../public/bike.png'
import Haltere from '../../public/haltere.png'


class VericalNav extends Component{
  constructor(props){
    super(props)
    this.state = {
      date: new Date()
    }
  }

  render() {

    return(
      <div id="header-v">
        <div className="global-square">
          <Link to='/' className="vertical-square">
            <img src={Yoga} alt="swim-logo" />
          </Link>
          <Link to='/' className="vertical-square">
            <img src={Swim} alt="swim-logo" />
          </Link>
          <Link to='/' className="vertical-square">
            <img src={Bike} alt="swim-logo" />
          </Link>
          <Link to='/' className="vertical-square">
            <img src={Haltere} alt="swim-logo" />
          </Link>
        </div>
        <div id="copyright">
          <p>Copyright, SportSee {this.state.date.getFullYear()}</p>
        </div>
      </div>
    )
  }
}

export default VericalNav;