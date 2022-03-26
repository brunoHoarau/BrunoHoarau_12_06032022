import React,{ Component, Fragment} from 'react'
import PropTypes from 'prop-types'
import FetchData from '../../services/FetchData'
import FormatData from '../../services/FormatData'
import HorizontalNav from '../../components/HorizontalNav/HorizontalNav'
import VerticalNav from '../../components/VerticalNav/VerticalNav'
import Welcome from '../../components/Welcome/Welcome'
import Graphs from '../Graphs/Graphs'
import '../Dashboard.css'
import Aside from '../Aside/Aside'
import MockedData from '../../services/MockedData'

/**
 * @param { number } id - user id
 * @return { Component } react component
 */ 


class DashboardMock extends Component {
  
  constructor(props){
    super(props)
    this.state = {
      loading: false,
      mock: true,
      id: this.props.id,
      name: null,
    }

    this.fd = new FetchData() ;
    this.formatData = new FormatData();
    this.md = new MockedData();
  }

  async componentDidMount() {

    const mockFormatBasiqueData = this.md.mockFormatBasiqueData(this.state.id)

    this.setState({
      name: mockFormatBasiqueData.firstName
    })
  }

  render() {
    console.log(this.state.loading)
    return(
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
            />
          </main>
          <aside className='aside'>
            <Aside id={this.state.id}
                   mock= {this.state.mock} />
          </aside>
        </div>
      </Fragment>
    )
  }
}

DashboardMock.propTypes = {
  id : PropTypes.number.isRequired 
}

export default DashboardMock;