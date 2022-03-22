import {Component, Fragment} from 'react';
import FetchData from '../../services/FetchData';
import FormatData from '../../services/FormatData';
import PropTypes from 'prop-types'
import ChartActivity from '../../components/ChartActivity/ChartActivity'
import ChartDurationActivity from '../../components/ChartDurationActivity/ChartDurationActivity'
import ChartTypeActivity from '../../components/ChartTypeActivity/ChartTypeActivity';
import ChartAverageScore from '../../components/ChartAverageScore/ChartAverageScore';
import "./Graphs.css"

/**
*@param { number } id - user id
*@return { Component } React Component 
*/


class Graphs extends Component {
  constructor(props){
    super(props);
    this.state = {
      id : this.props.id,
      dataActivity: [],
      dataAverageActivity: [],
      kind: null,
      kgDataMax: null,
      kgDataMin: null,
      dailyScore: null,
      dailyPourcent: null,
    }
    this.fd = new FetchData();
    this.formatData = new FormatData();
  }

  async componentDidMount() {

  const basiqueData = await this.fd.getBasiqueData(this.state.id)
  const activityData = await this.fd.getActivityData(this.state.id)
  const averageActivityData = await this.fd.getAverageActivityData(this.state.id)
  const performanceData = await this.fd.getPerformanceData(this.state.id);

  const formatBasiqueData = this.formatData.formatBasiqueData(basiqueData)
  const formatActivityData = this.formatData.formatActivity(activityData)
  const formatAverageActivityData = this.formatData.formatAverageActivityData(averageActivityData)
  const formatPerformanceData = this.formatData.formatPerformanceData(performanceData)

  this.setState({
    dailyScore: [{score: formatBasiqueData.todayScore * 100}],
    dailyPourcent: formatBasiqueData.todayScore*360,
    dataActivity: [...formatActivityData.copyData],
    kgDataMax: Math.max(...formatActivityData.allKg),
    kgDataMin: Math.min(...formatActivityData.allKg),
    dataAverageActivity: formatAverageActivityData.copyData,
    kind: formatPerformanceData.copyData

  })

  }

  render() {
    return(
      <Fragment >
        <section className='main-top'> 
          <div className="barChart-header">
            <p><strong>Activité quotidienne</strong></p>
            <div className="barChart-legend">
              <div>
                <div className="circle-b"></div>
                <p>Poids(kg)</p>
              </div>
              <div>
                <span className="circle-r"></span>
                <p>Calories brûlées(kCal))</p>
              </div>
            </div>
          </div>
            <ChartActivity 
              data={this.state.dataActivity}
              kgDataMax={this.state.kgDataMax}
              kgDataMin={this.state.kgDataMin}
            />
        </section>
        <section className="main-bottom" >
          <ChartDurationActivity 
            data={this.state.dataAverageActivity}
          />
          <ChartTypeActivity data={this.state.kind} />
          <ChartAverageScore score={this.state.dailyScore} pourcent={this.state.dailyPourcent}/>
        </section>
        
      </Fragment>
    )
  }
}

Graphs.propTypes = {
  id : PropTypes.number.isRequired 
}

export default Graphs;