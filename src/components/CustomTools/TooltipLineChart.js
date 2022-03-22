import { Component } from "react"
import PropTypes from 'prop-types'

/**
 *  @param { Array.Object } payload - Values content
 *  @param { boolean }  active - value of active
 *  @return { Component } React Component 
*/

class TooltipLineChart extends Component {
  render(){
    const active = this.props.active;
    const payload = this.props.payload; 
    if (active && payload) {return( 
      <div className="average_duration_tooltip">
        <p>{`${payload[0].value}`} min</p> 
      </div> )
        }
    return null ;
  }
}

TooltipLineChart.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array
}

export default TooltipLineChart;