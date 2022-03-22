import { Component } from "react";
import './Welcome.css'
import PropTypes from 'prop-types'


/**
 *  @param { string } name - user name
 *  @return { Component } React Component 
*/

class Welcome extends Component {
  render(){
    return(
      <article className="welcome">
         <h1>Bonjour, <span id="welcome-name">{this.props.name}</span></h1>
         <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      </article>
    )
  }
}

 Welcome.propTypes = {
  name: PropTypes.string
 }

export default Welcome;