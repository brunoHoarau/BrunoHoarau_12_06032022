import { Component } from "react";
import PropTypes from 'prop-types';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import TooltipChartActivity from "../CustomTools/TooltipChartActivity";

/**
 *  @param { Array.Object } data - Average activity data
 *  @param { number } kgDataMax - higter number [data]
 *  @param { number } kgDataMin - lower number [data]
 *  @return { Component } React Component 
*/

class ChartActivity extends Component{
  render(){
    return(
      <ResponsiveContainer  width="100%" height='97%'>
        <BarChart
          barGap={5}
          barSize={10}
          barCategoryGap={25}
          data={this.props.data}
          margin={{
            top: 20,
            left: 30,
            bottom: 5,
          }}
        >

        <CartesianGrid
          vertical={false} 
          strokeDasharray="3 3" />
        <XAxis 
          dataKey="day" 
        />
    
        <YAxis 
        yAxisId="calories"
        tickCount={20}
        hide='true'
        />

        <YAxis 
        dataKey="kilogram"
        yAxisId="kilo"
        orientation='right'
        allowDataOverflow='true'
        tickCount={4}
        domain={[this.props.kgDataMin - 1 , this.props.kgDataMax + 1]}
        />
        
        <Tooltip content={<TooltipChartActivity />}/>
        <Bar dataKey="kilogram" stackId="a" fill="#282D30" minPointSize={10} yAxisId="kilo" radius={[50, 50, 0, 0]} />
        <Bar dataKey="calories" fill="#E60000" yAxisId="calories" radius={[50, 50, 0, 0]}/>
      </BarChart>
        </ResponsiveContainer>
    )
  }
}

ChartActivity.propTypes = {
  data : PropTypes.array,
  kgDataMax: PropTypes.number,
  kgDataMin: PropTypes.number
}

export default ChartActivity;