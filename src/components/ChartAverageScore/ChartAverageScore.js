import { Component } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import PropTypes from 'prop-types';

/**
 *  @param { Array.Object } score - daily score
 *  @param { number } pourcent - daily score pourcentage
 *  @return { Component } React Component 
*/

const full = [{ score: 100}];

class ChartAverageScore extends Component {
  render(){
    let res = Math.round((this.props.pourcent / 3.6) * 100) / 100
    return(
      <div className="averageScore" > 
        <p><strong>Score</strong></p>
        <div className="score-graph">

        <ResponsiveContainer width="100%" height="98%">

          <PieChart>
            <Pie data={this.props.score} startAngle={90}
              endAngle={(this.props.pourcent) + 110} 
              innerRadius="65%" 
              outerRadius="75%"
              stroke="white"
              fill="#FF0000" paddingAngle={5} dataKey="score" clockwise={true}>
              <Cell cornerRadius="50%"  fill="red"/>
            </Pie>
            <Pie
              data={full}
              dataKey="score"
              startAngle={0}
              endAngle={360}
              outerRadius={60}
              fill="white"
            >
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      <div className="pourcentage-container">
        <p className="pourcentage">{res}%</p>
        <p className="txt%">de votre objectif</p>
      </div>
                          </div>
      </div>
    )
  }

}


ChartAverageScore.propTypes = {
  pourcent : PropTypes.number,
  score: PropTypes.array
}

export default ChartAverageScore;