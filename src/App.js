import React, { Component } from 'react';
import './App.css';
import USAMap from "react-usa-map";
import { Dropdown } from 'semantic-ui-react'
import { leastOffensesTotalByYearAndType, mostOffensesByType,biggestOffenseRateAverageByType, mostOffensesTotalByYearAndType, allDataByState,allDataByStateAndYear, allStateDataTotalByType, allStateDataTotalByTypeAndYear, allDataByYear} from './Scripts/Statistics'
import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from 'constants';

class App extends Component {
  mapHandler = (event) => {
    alert(event.target.dataset.name);
  };

  constructor(props) {
    super(props);
    console.log(mostOffensesByType("Motor vehicle theft"));
    console.log(biggestOffenseRateAverageByType("Legacy rape rate"));
    console.log(mostOffensesTotalByYearAndType(2002,"Robbery"));
    console.log(allDataByState("Wyoming"));
    console.log(allDataByStateAndYear("Wisconsin", 2005));
    console.log(allDataByYear(2010));
    console.log(allStateDataTotalByType("Aggravated assault"));
    console.log(allStateDataTotalByTypeAndYear('Murder and nonnegligent Manslaughter', 2014));
    console.log('Here');
  }

  /* optional customization of filling per state and calling custom callbacks per state */
  statesCustomConfig = () => {
    return {
      "AL": {
        fill: "#6bc4cc",
        clickHandler: (event) => console.log('Custom handler for Alabama', event.target.dataset)
      },
      "AK": {
        fill: "#767099",
        clickHandler: (event) => console.log('Custom handler for Alaska', event.target.dataset)
      },
      "AZ": {
        fill: "#919940",
        clickHandler: (event) => console.log('Custom handler for Arizona', event.target.dataset)
      },
      "AR": {
        fill: "#99191c",
        clickHandler: (event) => console.log('Custom handler for Arkansas', event.target.dataset)
      },
      "CA": {
        fill: "#2b995d",
        clickHandler: (event) => console.log('Custom handler for California', event.target.dataset)
      },
      "CO": {
        fill: "#991654",
        clickHandler: (event) => console.log('Custom handler for Colorado', event.target.dataset)
      },
      "CT": {
        fill: "#1b9900",
        clickHandler: (event) => console.log('Custom handler for Connecticut', event.target.dataset)
      },
      "DE": {
        fill: "#0c9953",
        clickHandler: (event) => console.log('Custom handler for Delaware', event.target.dataset)
      },
      "DC2": {
        fill: "#4e64f9",
        clickHandler: (event) => console.log('Custom handler for District of Columbia', event.target.dataset),
        title: "District of Columbia",
        stateName: "District of Columbia"
      },
      "FL": {
        fill: "#367d99",
        clickHandler: (event) => console.log('Custom handler for Florida', event.target.dataset)
      },
      "GA": {
        fill: "#995200",
        clickHandler: (event) => console.log('Custom handler for Georgia', event.target.dataset)
      },
      "HI": {
        state: "Hawaii",
        fill: "#997661",
        clickHandler: (event) => console.log('Custom handler for Hawaii', event.target.dataset)
      },
      "ID": {
        fill: "#006099",
        clickHandler: (event) => console.log('Custom handler for Idaho', event.target.dataset)
      },
      "IL": {
        fill: "#99444b",
        clickHandler: (event) => console.log('Custom handler for Illinois', event.target.dataset)
      },
      "IN": {
        fill: "#993304",
        clickHandler: (event) => console.log('Custom handler for Indiana', event.target.dataset)
      },
      "IA": {
        fill: "#629961",
        clickHandler: (event) => console.log('Custom handler for Iowa', event.target.dataset)
      },
      "KS": {
        fill: "#287c7c",
        clickHandler: (event) => console.log('Custom handler for Kansas', event.target.dataset)
      },
      "KY": {
        fill: "#ef71ff",
        clickHandler: (event) => console.log('Custom handler for Kentucky', event.target.dataset)
      },
      "LA": {
        fill: "#ffee9e",
        clickHandler: (event) => console.log('Custom handler for Louisiana', event.target.dataset)
      },
      "ME": {
        fill: "#ff645f",
        clickHandler: (event) => console.log('Custom handler for Maine', event.target.dataset)
      },
      "MD": {
        fill: "#0affa9",
        clickHandler: (event) => console.log('Custom handler for Maryland', event.target.dataset)
      },
      "MA": {
        fill: "#408cff",
        clickHandler: (event) => console.log('Custom handler for Massachusetts', event.target.dataset)
      },
      "MI": {
        fill: "#00ff2e",
        clickHandler: (event) => console.log('Custom handler for Michigan', event.target.dataset)
      },
      "MN": {
        fill: "#51ff83",
        clickHandler: (event) => console.log('Custom handler for Minnesota', event.target.dataset)
      },
      "MS": {
        fill: "#caff6d",
        clickHandler: (event) => console.log('Custom handler for Mississippi', event.target.dataset)
      },
      "MO": {
        fill: "#8d9fff",
        clickHandler: (event) => console.log('Custom handler for Missouri', event.target.dataset)
      },
      "MT": {
        fill: "#ffbf00",
        clickHandler: (event) => console.log('Custom handler for Montana', event.target.dataset)
      },
      "NE": {
        fill: "#006cff",
        clickHandler: (event) => console.log('Custom handler for Nebraska', event.target.dataset)
      },
      "NV": {
        fill: "#4f00ff",
        clickHandler: (event) => console.log('Custom handler for Nevada', event.target.dataset)
      },
      "NH": {
        fill: "#ffbe74",
        clickHandler: (event) => console.log('Custom handler for New Hapshire', event.target.dataset)
      },
      "NJ": {
        fill: "#29ba3a",
        clickHandler: (event) => console.log('Custom handler for New Jersey', event.target.dataset)
      },
      "NM": {
        fill: "#57ffce",
        clickHandler: (event) => console.log('Custom handler for New Mexico', event.target.dataset)
      },
      "NY": {
        fill: "#cc3b43",
        clickHandler: (event) => console.log('Custom handler for New York', event.target.dataset),
        title: 'New York'
      },
      "NC": {
        fill: "#ffe04f",
        clickHandler: (event) => console.log('Custom handler for New Carolina', event.target.dataset)
      },
      "ND": {
        fill: "#8bff00",
        clickHandler: (event) => console.log('Custom handler for North Dakota', event.target.dataset)
      },
      "OH": {
        fill: "#328bff",
        clickHandler: (event) => console.log('Custom handler for Ohio', event.target.dataset)
      },
      "OK": {
        fill: "#0babff",
        clickHandler: (event) => console.log('Custom handler for Oklahoma', event.target.dataset)
      },
      "OR": {
        fill: "#c8ff57",
        clickHandler: (event) => console.log('Custom handler for Oregon', event.target.dataset)
      },
      "PA": {
        fill: "#21ffd6",
        clickHandler: (event) => console.log('Custom handler for Pennsylvania', event.target.dataset)
      },
      "RI": {
        fill: "#ffba00",
        clickHandler: (event) => console.log('Custom handler for Rhode Island', event.target.dataset)
      },
      "SC": {
        fill: "#00ff95",
        clickHandler: (event) => console.log('Custom handler for South Carolina', event.target.dataset)
      },
      "SD": {
        fill: "#ff5671",
        clickHandler: (event) => console.log('Custom handler for South Dakota', event.target.dataset)
      },
      "TN": {
        fill: "#a3ff2f",
        clickHandler: (event) => console.log('Custom handler for Tennessee', event.target.dataset)
      },
      "TX": {
        fill: "#9795ff",
        clickHandler: (event) => console.log('Custom handler for Texas', event.target.dataset)
      },
      "UT": {
        fill: "#eda4ff",
        clickHandler: (event) => console.log('Custom handler for Utah', event.target.dataset)
      },
      "VT": {
        fill: "#6dff87",
        clickHandler: (event) => console.log('Custom handler for Vermont', event.target.dataset)
      },
      "VA": {
        fill: "#ffbb68",
        clickHandler: (event) => console.log('Custom handler for Virginia', event.target.dataset)
      },
      "WA": {
        fill: "#ff8b06",
        clickHandler: (event) => console.log('Custom handler for Washington', event.target.dataset)
      },
      "WV": {
        fill: "#07fdff",
        clickHandler: (event) => console.log('Custom handler for West Virginia', event.target.dataset)
      },
      "WI": {
        fill: "#ffe59a",
        clickHandler: (event) => console.log('Custom handler for Wisconsin', event.target.dataset)
      },
      "WY": {
        fill: "#00ff85",
        number: 111,
        clickHandler: (event) => console.log('Custom handler for Wyoming', event.target.dataset)
      }
    };
  };

  populateMapNumbers(populationNumbers){
    var data = this.statesCustomConfig();
    var max = mostOffensesTotalByYearAndType(2014, 'Murder and nonnegligent Manslaughter')[1];
    var min = leastOffensesTotalByYearAndType(2014, 'Murder and nonnegligent Manslaughter')[1];
    for (var i = 0; i < populationNumbers.length; i++){
      var stateData = populationNumbers[i];
      console.log(stateData.offenseQuantity);
      if (stateData.state === "Alabama"){
        data.AL.number = stateData.offenseQuantity;
        data.AL.fill = this.classifyColors(stateData.offenseQuantity,min,max);
      } else
      if (stateData.state === "Alaska"){
        data.AK.number= stateData.offenseQuantity;
        data.AK.fill = this.classifyColors(stateData.offenseQuantity,min,max);
      } else
      if (stateData.state === "Arizona"){
        data.AZ.number= stateData.offenseQuantity;
        data.AZ.fill = this.classifyColors(stateData.offenseQuantity,min,max);
      } else
      if (stateData.state === "Arkansas"){
        data.AR.number= stateData.offenseQuantity;
        data.AR.fill = this.classifyColors(stateData.offenseQuantity,min,max);
      } else
      if (stateData.state === "California"){
        data.CA.number= stateData.offenseQuantity;
        data.CA.fill = this.classifyColors(stateData.offenseQuantity,min,max);
      } else
      if (stateData.state === "Colorado"){
        data.CO.number= stateData.offenseQuantity;
        data.CO.fill = this.classifyColors(stateData.offenseQuantity,min,max);
      } else
      if (stateData.state === "Connecticut"){
        data.CT.number= stateData.offenseQuantity;
        data.CT.fill = this.classifyColors(stateData.offenseQuantity,min,max);
      } else
      if (stateData.state === "Delaware"){
        data.DE.number= stateData.offenseQuantity;
        data.DE.fill = this.classifyColors(stateData.offenseQuantity,min,max);
      } else
      if (stateData.state === "Florida"){
        data.FL.number= stateData.offenseQuantity;
        data.FL.fill = this.classifyColors(stateData.offenseQuantity,min,max);
      } else
      if (stateData.state === "Georgia"){
        data.GA.number= stateData.offenseQuantity;
        data.GA.fill = this.classifyColors(stateData.offenseQuantity,min,max);
      } else
      if (stateData.state === "Hawaii"){
        data.HI.number= stateData.offenseQuantity;
        data.HI.fill = this.classifyColors(stateData.offenseQuantity,min,max);
      } else
      if (stateData.state === "Idaho"){
        data.ID.number= stateData.offenseQuantity;
        data.ID.fill = this.classifyColors(stateData.offenseQuantity,min,max);
      } else
      if (stateData.state === "Illinois"){
        data.IL.number= stateData.offenseQuantity;
        data.IL.fill = this.classifyColors(stateData.offenseQuantity,min,max);
      } else
      if (stateData.state === "Indiana"){
        data.IN.number= stateData.offenseQuantity;
        data.IN.fill = this.classifyColors(stateData.offenseQuantity,min,max);
      } else
      if (stateData.state === "Iowa"){
        data.IA.number= stateData.offenseQuantity;
        data.IA.fill = this.classifyColors(stateData.offenseQuantity,min,max);
      } else
      if (stateData.state === "Kansas"){
        data.KS.number= stateData.offenseQuantity;
        data.KS.fill = this.classifyColors(stateData.offenseQuantity,min,max);
      } else
      if (stateData.state === "Kentucky"){
        data.KY.number= stateData.offenseQuantity;
        data.KY.fill = this.classifyColors(stateData.offenseQuantity,min,max);
      } else
      if (stateData.state === "Maine"){
        data.ME.number= stateData.offenseQuantity;
        data.ME.fill = this.classifyColors(stateData.offenseQuantity,min,max);
      } else
      if (stateData.state === "Maryland"){
        data.MD.number= stateData.offenseQuantity;
        data.MD.fill = this.classifyColors(stateData.offenseQuantity,min,max);
      } else
      if (stateData.state === "Massachusetts"){
        data.MA.number= stateData.offenseQuantity;
        data.MA.fill = this.classifyColors(stateData.offenseQuantity,min,max);
      } else
      if (stateData.state === "Michigan"){
        data.MI.number= stateData.offenseQuantity;
        data.MI.fill = this.classifyColors(stateData.offenseQuantity,min,max);
      } else
      if (stateData.state === "Minnesota"){
        data.MN.number= stateData.offenseQuantity;
        data.MN.fill = this.classifyColors(stateData.offenseQuantity,min,max);
      } else
      if (stateData.state === "Mississippi"){
        data.MS.number= stateData.offenseQuantity;
        data.MS.fill = this.classifyColors(stateData.offenseQuantity,min,max);
      } else
      if (stateData.state === "Missouri"){
        data.MO.number= stateData.offenseQuantity;
        data.MO.fill = this.classifyColors(stateData.offenseQuantity,min,max);
      } else
      if (stateData.state === "Montana"){
        data.MT.number= stateData.offenseQuantity;
        data.MT.fill = this.classifyColors(stateData.offenseQuantity,min,max);
      } else
      if (stateData.state === "Nebraska"){
        data.NE.number= stateData.offenseQuantity;
        data.NE.fill = this.classifyColors(stateData.offenseQuantity,min,max);
      } else
      if (stateData.state === "Nevada"){
        data.NV.number= stateData.offenseQuantity;
        data.NV.fill = this.classifyColors(stateData.offenseQuantity,min,max);
      } else
      if (stateData.state === "New Hampshire"){
        data.NH.number= stateData.offenseQuantity;
        data.NH.fill = this.classifyColors(stateData.offenseQuantity,min,max);
      } else
      if (stateData.state === "New Jersey"){
        data.NJ.number= stateData.offenseQuantity;
        data.NJ.fill = this.classifyColors(stateData.offenseQuantity,min,max);
      } else
      if (stateData.state === "New Mexico"){
        data.NM.number= stateData.offenseQuantity;
        data.NM.fill = this.classifyColors(stateData.offenseQuantity,min,max);
      } else
      if (stateData.state === "New York"){
        data.NY.number= stateData.offenseQuantity;
        data.NY.fill = this.classifyColors(stateData.offenseQuantity,min,max);
      } else
      if (stateData.state === "North Carolina"){
        data.NC.number= stateData.offenseQuantity;
        data.NC.fill = this.classifyColors(stateData.offenseQuantity,min,max);
      } else
      if (stateData.state === "North Dakota"){
        data.ND.number= stateData.offenseQuantity;
        data.ND.fill = this.classifyColors(stateData.offenseQuantity,min,max);
      } else
      if (stateData.state === "Ohio"){
        data.OH.number= stateData.offenseQuantity;
        data.OH.fill = this.classifyColors(stateData.offenseQuantity,min,max);
      } else
      if (stateData.state === "Oklahoma"){
        data.OK.number= stateData.offenseQuantity;
        data.OK.fill = this.classifyColors(stateData.offenseQuantity,min,max);
      } else
      if (stateData.state === "Oregon"){
        data.OR.number= stateData.offenseQuantity;
        data.OR.fill = this.classifyColors(stateData.offenseQuantity,min,max);
      } else
      if (stateData.state === "Pennsylvania"){
        data.PA.number= stateData.offenseQuantity;
        data.PA.fill = this.classifyColors(stateData.offenseQuantity,min,max);
      } else
      if (stateData.state === "Rhode Island"){
        data.RI.number= stateData.offenseQuantity;
        data.RI.fill = this.classifyColors(stateData.offenseQuantity,min,max);
      } else
      if (stateData.state === "South Carolina"){
        data.SC.number= stateData.offenseQuantity;
        data.SC.fill = this.classifyColors(stateData.offenseQuantity,min,max);
      } else
      if (stateData.state === "South Dakota"){
        data.TN.number= stateData.offenseQuantity;
        data.TN.fill = this.classifyColors(stateData.offenseQuantity,min,max);
      } else
      if (stateData.state === "Tennessee"){
        data.AL.number= stateData.offenseQuantity;
        data.AL.fill = this.classifyColors(stateData.offenseQuantity,min,max);
      } else
      if (stateData.state === "Texas"){
        data.TX.number= stateData.offenseQuantity;
        data.TX.fill = this.classifyColors(stateData.offenseQuantity,min,max);
      } else
      if (stateData.state === "Utah"){
        data.UT.number= stateData.offenseQuantity;
        data.UT.fill = this.classifyColors(stateData.offenseQuantity,min,max);
      } else
      if (stateData.state === "Vermont"){
        data.VT.number= stateData.offenseQuantity;
        data.VT.fill = this.classifyColors(stateData.offenseQuantity,min,max);
      } else
      if (stateData.state === "Virginia"){
        data.VA.number= stateData.offenseQuantity;
        data.VA.fill = this.classifyColors(stateData.offenseQuantity,min,max);
      } else
      if (stateData.state === "Washington"){
        data.WA.number= stateData.offenseQuantity;
        data.WA.fill = this.classifyColors(stateData.offenseQuantity,min,max);
      } else
      if (stateData.state === "West Virginia"){
        data.WV.number= stateData.offenseQuantity;
        data.WV.fill = this.classifyColors(stateData.offenseQuantity,min,max);
      } else
      if (stateData.state === "Wisconsin"){
        data.WI.number= stateData.offenseQuantity;
        data.WI.fill = this.classifyColors(stateData.offenseQuantity,min,max);
      } else
      if (stateData.state === "Wyoming"){
        data.WY.number= stateData.offenseQuantity;
        data.WY.fill = this.classifyColors(stateData.offenseQuantity,min,max);
      } else
      if (stateData.state === "Columbia"){
        data.DC2.number= stateData.offenseQuantity;
        data.DC2.fill = this.classifyColors(stateData.offenseQuantity,min,max);
      }
    };
    return data;
  }

  classifyColors(number, min, max){
    var step = (max-min)/5
    var limit1 = min + step;
    var limit2 = min + step*2;
    var limit3 = min + step*3;
    var limit4 = min + step*4;
    if (number < limit1)
      return "#002bff"
    else if (number < limit2)
      return "#2fff00"
    else if (number < limit3)
      return "#fff400"
    else if (number < limit4)
      return "#ff5a00"
    else
      return "#ff0000"
  }

  render() {
    var completeData = this.populateMapNumbers(allStateDataTotalByTypeAndYear('Murder and nonnegligent Manslaughter', 2014));
    console.log(completeData);
    return (
      <div className="App">
        <USAMap customize={completeData} onClick={this.mapHandler} />
      </div>
      
    );
  }
}

export default App;
