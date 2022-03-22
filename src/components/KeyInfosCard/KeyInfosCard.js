import { Component } from "react"
import PropTypes from 'prop-types'


/**
 *  @param { string } name - molecule name 
 *  @param { string } unity - molecule unity
 *  @param { number } number - molecule value
 *  @return { Component } React Component 
*/

class KeyInfosCard extends Component {
  render() {
    return(
      <div className="card">
        <div className="card-img ">
          <img src={this.props.src} alt={"img-"+this.props.name}/>
        </div>
        <div className="card-txt">
          <p><strong>{this.props.number} {this.props.unity}</strong></p>
          <p>{this.props.name} </p>
        </div>
      </div>
    )
  }
}

KeyInfosCard.propTypes = {
  src: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.number
}

export default KeyInfosCard;