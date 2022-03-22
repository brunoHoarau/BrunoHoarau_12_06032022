import { Component } from "react"
import { LineChart,XAxis,YAxis,Tooltip,Line, ResponsiveContainer } from 'recharts'
import TooltipLineChart from "../CustomTools/TooltipLineChart"
import PropTypes from 'prop-types'


/**
 *  @param { Array.Object } data- Average activity data
 *  @return { Component } React Component 
*/

class ChartAverageActivity extends Component {
  render() {
    return(
      <div className="LineChartActivity" >
        <p><strong>Durée moyenne des sessions</strong></p>
        <ResponsiveContainer width='100%' height='100%' >
          <LineChart   data={this.props.data}
          >
          <XAxis 
            dataKey="day" 
            stroke="white" 
            tickLine={false} 
            axisLine={false}
            domain={[0,100]}
            width={500}
            />
            
          <YAxis 
            hide={true}
            domain={[0, 90]}
            dx={10}
          />
          <Tooltip  content={<TooltipLineChart />}/>
          <Line type="monotone"
            dataKey="sessionLength"
            stroke="white"
            strokeWidth={1.5}
            dot={false}
            activeDot={{
              stroke: "rgba(255,255,255, 0.6)",
              strokeWidth: 5,
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    )
      }
}

ChartAverageActivity.propTypes = {
  data : PropTypes.array
}

export default ChartAverageActivity;