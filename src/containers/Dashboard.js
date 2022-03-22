import React,{ Component, Fragment} from 'react'
import PropTypes from 'prop-types'
import FetchData from '../services/FetchData'
import FormatData from '../services/FormatData'
import HorizontalNav from '../components/HorizontalNav/HorizontalNav'
import VerticalNav from '../components/VerticalNav/VerticalNav'
import Welcome from '../components/Welcome/Welcome'
import Graphs from './Graphs/Graphs'
import './Dashboard.css'
import Aside from './Aside/Aside'

/**
 * @param { number } id - user id
 * @return { Component } react component
 */ 

class Dashboard extends Component {

  constructor(props){
    super(props)
    this.state = {
      id: this.props.id,
      name: null
    }
    this.fd =new FetchData();
    this.formatData = new FormatData();
  }

  async componentDidMount() {
   
    const basiqueData = await this.fd.getBasiqueData(this.state.id);
    const formatBasiqueData = this.formatData.formatBasiqueData(basiqueData)
    
    this.setState({
      name: formatBasiqueData.firstName
    })
  }

  render() {
    return(
      <Fragment >
        <header>
        <VerticalNav />
        <HorizontalNav />
        </header>
        <Welcome name={this.state.name} />
        <div className='container'>
          <main className='main-section'>
            <Graphs id={this.state.id} />
          </main>
          <aside className='aside'>
            <Aside id={this.state.id} />
          </aside>
        </div>
      </Fragment>
    )
  }

}

Dashboard.propTypes = {
  id : PropTypes.number.isRequired 
}

export default Dashboard;