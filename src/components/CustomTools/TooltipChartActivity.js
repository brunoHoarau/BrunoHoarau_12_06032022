import { Component } from "react"
import PropTypes from 'prop-types'

/**
 *  @param { Array.Object } payload - Values content
 *  @param { boolean }  active - value of active
 *  @return { Component } React Component 
*/

class TooltipChartActivity extends Component {
  render(){
    const active = this.props.active;
    const payload = this.props.payload; 
    if (active && payload) {
      return(
        <div className="Tooltip-chartActivity">
          <p>{`${payload[0].value}`} kg</p>
          <p>{`${payload[1].value}`} kCal</p>
        </div>
        )
       }
    return null ;
  }
}

TooltipChartActivity.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array
}


export default TooltipChartActivity;