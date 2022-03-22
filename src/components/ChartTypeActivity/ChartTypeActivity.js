import React, { Component } from "react";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import PropTypes from 'prop-types'

/**
 *  @param { Array.Object } data - activity's data by kind
 *  @return { Component } React Component 
*/

class ChartTypeActivity extends Component {
  render() {
    return (
      <div className="chartTypeActivity"> 
      <ResponsiveContainer width='100%' height='100%' > 
      
      <RadarChart
        data={this.props.data}
        outerRadius="70%"
        cx="50%" cy="50%"
        >
        <PolarGrid 
          polarRadius={[0, 10, 25, 40, 55]}
          radialLines={false}/>
        <PolarAngleAxis
          dataKey="activity"
          tickLine={false}
          tick={{
            fontSize: 10
          }}
          stroke="white"
          />
        <Radar
          dataKey="value"
          fill="#FF0000"
          fillOpacity={0.6}
          strokeWidth={2}
          />
      </RadarChart >
        </ResponsiveContainer>
          </div>

      )
  }
}

ChartTypeActivity.propTypes = {
  data: PropTypes.array
}

export default ChartTypeActivity;