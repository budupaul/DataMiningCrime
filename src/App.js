import React, { Component } from 'react';
import './App.css';
import USAMap from "react-usa-map";
import {allStateDataTotalByType, allStateDataTotalByTypeAndYear, allDataByYear, allData} from './Scripts/Statistics';
import {populateMapNumbersByOffenseAndYear, populateMapNumbersByOffense, populateMapNumbersByYear, populateMapNumbers} from './Scripts/MapPopulating';
import {years, offenses} from './Scripts/Constants';
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

  constructor(props) {
    
    super(props);
 
    this.state = {
      selectedYear: null,
      selectedOffense: null
    }
  }

  async chooseOption(optionYear, optionOffense){
    var data;
    if(optionYear == null && optionOffense == null)
    {
      data = populateMapNumbers(allData());
      data = this.putClickHandlers(data);
      await this.setState({
        completeData: data
      }) 
    }
    else if(optionYear != null && optionOffense == null)
    {
      data = populateMapNumbersByYear(allDataByYear(optionYear),optionYear);
      data = this.putClickHandlers(data);
      await this.setState({
        completeData: data
      })
    }
    else if(optionYear == null && optionOffense != null)
    {
      data = populateMapNumbersByOffense(allStateDataTotalByType(optionOffense),optionOffense); 
      data = this.putClickHandlers(data);
      await this.setState({
        completeData: data
      })
    }
    else if(optionYear != null && optionOffense != null)
    {
      data = populateMapNumbersByOffenseAndYear(allStateDataTotalByTypeAndYear(optionOffense, optionYear),optionOffense, optionYear);
      data = this.putClickHandlers(data);
      await this.setState({
        completeData: data
      })
    }
  }

  putClickHandlers(data){
    data.AK.clickHandler = (event) => this.handleClick("Alaska", data.AK.number);
    data.AL.clickHandler = (event) => this.handleClick("Alabama", data.AL.number);
    data.AR.clickHandler = (event) => this.handleClick("Arkansas", data.AR.number);
    data.AZ.clickHandler = (event) => this.handleClick("Arizona", data.AZ.number);
    data.CA.clickHandler = (event) => this.handleClick("California", data.CA.number);
    data.CO.clickHandler = (event) => this.handleClick("Colorado", data.CO.number);
    data.CT.clickHandler = (event) => this.handleClick("Connecticut", data.CT.number);
    data.DC2.clickHandler = (event) => this.handleClick("District of Columbia", data.DC2.number);
    data.DE.clickHandler = (event) => this.handleClick("Delaware", data.DE.number);
    data.FL.clickHandler = (event) => this.handleClick("Florida", data.FL.number);
    data.GA.clickHandler = (event) => this.handleClick("Georgia", data.GA.number);
    data.HI.clickHandler = (event) => this.handleClick("Hawaii", data.HI.number);
    data.IA.clickHandler = (event) => this.handleClick("Iowa", data.IA.number);
    data.ID.clickHandler = (event) => this.handleClick("Idaho", data.ID.number);
    data.IL.clickHandler = (event) => this.handleClick("Illinois", data.IL.number);
    data.IN.clickHandler = (event) => this.handleClick("Indiana", data.IN.number);
    data.KS.clickHandler = (event) => this.handleClick("Kansas", data.KS.number);
    data.KY.clickHandler = (event) => this.handleClick("Kentucky", data.KY.number);
    data.LA.clickHandler = (event) => this.handleClick("Louisiana", data.LA.number);
    data.MA.clickHandler = (event) => this.handleClick("Massachusetts", data.MA.number);
    data.MD.clickHandler = (event) => this.handleClick("Maryland", data.MD.number);
    data.ME.clickHandler = (event) => this.handleClick("Maine", data.ME.number);
    data.MI.clickHandler = (event) => this.handleClick("Michigan", data.MI.number);
    data.MN.clickHandler = (event) => this.handleClick("Minnesota", data.MN.number);
    data.MO.clickHandler = (event) => this.handleClick("Missouri", data.MO.number);
    data.MS.clickHandler = (event) => this.handleClick("Mississippi", data.MS.number);
    data.MT.clickHandler = (event) => this.handleClick("Montana", data.MT.number);
    data.NC.clickHandler = (event) => this.handleClick("North Carolina", data.NC.number);
    data.ND.clickHandler = (event) => this.handleClick("North Dakota", data.ND.number);
    data.NE.clickHandler = (event) => this.handleClick("Nebraska", data.NE.number);
    data.NH.clickHandler = (event) => this.handleClick("New Hampshire", data.NH.number);
    data.NJ.clickHandler = (event) => this.handleClick("New Jersey", data.NJ.number);
    data.NM.clickHandler = (event) => this.handleClick("New Mexico", data.NM.number);
    data.NV.clickHandler = (event) => this.handleClick("Nevada", data.NV.number);
    data.NY.clickHandler = (event) => this.handleClick("New York", data.NY.number);
    data.OH.clickHandler = (event) => this.handleClick("Ohio", data.OH.number);
    data.OK.clickHandler = (event) => this.handleClick("Oklahoma", data.OK.number);
    data.OR.clickHandler = (event) => this.handleClick("Oregon", data.OR.number);
    data.PA.clickHandler = (event) => this.handleClick("Pennsylvania", data.PA.number);
    data.RI.clickHandler = (event) => this.handleClick("Rhode Island", data.RI.number);
    data.SC.clickHandler = (event) => this.handleClick("South Carolina", data.SC.number);
    data.SD.clickHandler = (event) => this.handleClick("South Dakota", data.SD.number);
    data.TN.clickHandler = (event) => this.handleClick("Tennessee", data.TN.number);
    data.TX.clickHandler = (event) => this.handleClick("Texas", data.TX.number);
    data.UT.clickHandler = (event) => this.handleClick("Utah", data.UT.number);
    data.VA.clickHandler = (event) => this.handleClick("Virginia", data.VA.number);
    data.VT.clickHandler = (event) => this.handleClick("Vermont", data.VT.number);
    data.WA.clickHandler = (event) => this.handleClick("Washington", data.WA.number);
    data.WI.clickHandler = (event) => this.handleClick("Wisconsin", data.WI.number);
    data.WV.clickHandler = (event) => this.handleClick("West Virginia", data.WV.number);
    data.WY.clickHandler = (event) => this.handleClick("Wyoming", data.WY.number);
    data.DC2.clickHandler = (event) => this.handleClick("Columbia", data.DC2.number);
    return data;
  }

  handleClick = (state,value) => {
    document.getElementById('stateDiv').innerHTML = state;
    document.getElementById('valueDiv').innerHTML = value;
  }

  handleChangeYear = async (selectedOption) => {
    await this.setState({ selectedYear: selectedOption.value });
    this.chooseOption(this.state.selectedYear, this.state.selectedOffense);
  }

  handleChangeOffense = async (selectedOption) => {
    await this.setState({ selectedOffense: selectedOption.value });
    this.chooseOption(this.state.selectedYear, this.state.selectedOffense);
  }

  render() {
    var completeData = this.state.completeData;
    return (
      <div className="App">
      <div className='container'>
          <p>Select the offense:</p>
            <Select
            onChange={this.handleChangeOffense}
            options={offenses}
          />
        </div>

        <div className='container'>
          <p>Select the year:</p>
            <Select
            onChange={this.handleChangeYear}
            options={years}
          />
        </div>
        <br></br>
        <br></br>
        <br></br>
        <USAMap customize={completeData} onClick={this.mapHandler} />
        <br></br>
        <div className="label" id ='stateDiv' style={{ fontSize: 100}} ></div>
        <span className="badge badge-pill badge-primary" id='valueDiv' style={{ fontSize: 100}} ></span>
      </div>
    );
  }
}

export default App;
