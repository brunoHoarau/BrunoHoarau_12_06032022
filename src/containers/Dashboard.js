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
import Error404 from './Error404/Error404'

/**
 * @param { number } id - user id
 * @return { Component } react component
 */ 


class Dashboard extends Component {
  
  constructor(props){
    super(props)
    this.state = {
      loading: false,
      mock: false,
      id: this.props.id,
      name: null
    }
    this.fd = new FetchData();
    this.formatData = new FormatData();

    
  } 

  async componentDidMount() {
    
    try {
    const loading  = await this.fd.getLoading(this.state.id)
    const basiqueData = await this.fd.getBasiqueData(this.state.id)
    const formatBasiqueData = this.formatData.formatBasiqueData(basiqueData)
    this.setState({
      name: formatBasiqueData.firstName,
      loading: loading,
      error: false
    })
    
    console.log(this.state.loading, this.state.error)
  } catch (error){ 
    this.setState({ error : true })
    window.location ="/error404" }
    console.log(this.state.loading, this.state.error)
  }

  render() {
    console.log(this.state.loading)
    return this.state.loading ? (
        <Fragment >
        <header>
        <VerticalNav />
        <HorizontalNav />
        </header>
        <Welcome name={this.state.name} />
        <div className='container'>
          <main className='main-section'>
            <Graphs id = {this.state.id}
                    mock = {this.state.mock}
                    loading = { this.state.loading}
                    />
          </main>
          <aside className='aside'>
            <Aside id={this.state.id}
                   mock = {this.state.mock}
                   />
          </aside>
        </div>
      </Fragment>) : this.state.error === true ? ( <Fragment> <Error404 /> </Fragment>) : (<Fragment> <h3>Loading...</h3> </Fragment>)
  }
}



Dashboard.propTypes = {
  id : PropTypes.number.isRequired 
}

export default Dashboard;