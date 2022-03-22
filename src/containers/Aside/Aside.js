import { Component, Fragment } from "react";
import PropTypes from 'prop-types'
import KeyInfosCard from "../../components/KeyInfosCard/KeyInfosCard";
import Caloriesicon from "../../public/calories-icon.svg"
import ProteinIcon from "../../public/protein-icon.svg"
import CarbIcon from "../../public/carbs-icon.svg"
import FatIcon from "../../public/fat-icon.svg"
import FetchData from "../../services/FetchData";
import '../Aside/Aside.css'

/**
*@param { number } id - user id
*@return { Component } React Component 
*/

class Aside extends Component {
  constructor(props){
    super(props)
    this.state = {
      id: this.props.id,
    }
    this.fd = new FetchData()
  }

  async componentDidMount() {
    const asideData = await this.fd.getBasiqueData(this.state.id)
      this.setState({
        calories: asideData.keyData.calorieCount,
        proteins: asideData.keyData.proteinCount,
        carbohydrates: asideData.keyData.carbohydrateCount,
        lipid: asideData.keyData.lipidCount,
      })
  }

  render() {
    return(
      <Fragment>
        <KeyInfosCard name="Calories" src={Caloriesicon} number={this.state.calories} unity="kCal" />
        <KeyInfosCard name="Proteines" src={ProteinIcon} number={this.state.proteins} unity="g" />
        <KeyInfosCard name="Glucides" src={CarbIcon} number={this.state.carbohydrates} unity="g" />
        <KeyInfosCard name="Lipides" src={FatIcon} number={this.state.lipid} unity="g" />
      </Fragment>
    )
  }
}

Aside.protoTypes = {
  id: PropTypes.number
}

export default Aside;