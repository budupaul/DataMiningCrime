import React, { Component } from 'react';
import './App.css';
import USAMap from "react-usa-map";
import { Dropdown } from 'semantic-ui-react'
import { leastOffensesTotalByYearAndType, mostOffensesByType,biggestOffenseRateAverageByType, mostOffensesTotalByYearAndType, allDataByState,allDataByStateAndYear, allStateDataTotalByType, allStateDataTotalByTypeAndYear, allDataByYear, 
  numberOfTotalOffensesForStateAndOffense, numberOfTotalOffensesForStateAndYear, leastOffensesByType, 
  mostOffensesByYear, leastOffensesByYear, populateMapNumbersByYear, numberOfTotalOffensesForState,
  mostOffenses, leastOffenses, allData, chooseOption} from './Scripts/Statistics'
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

    this.state = {
      optionsYear: [
         {key:'',value:''},
       ],
       optionsOffense: [
        {key:'',value:''},
      ]
    }
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

  populateMapNumbersByOffenseAndYear(populationNumbers, offense, year){
    var data = this.statesCustomConfig();
    var max = mostOffensesTotalByYearAndType(year, offense)[1];
    var min = leastOffensesTotalByYearAndType(year, offense)[1];
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

  populateMapNumbersByOffense(populationNumbers, offense){
    var data = this.statesCustomConfig();
    var max = mostOffensesByType(offense)[1];
    var min = leastOffensesByType(offense)[1];
    for (var i = 0; i < populationNumbers.length; i++){
      var stateData = populationNumbers[i];
      console.log(stateData.offenseQuantity);
      if (stateData.state === "Alabama"){
        var numberOffenses = numberOfTotalOffensesForStateAndOffense("Alabama", offense);
        data.AL.number =numberOffenses;
        data.AL.fill = this.classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Alaska"){
        var numberOffenses = numberOfTotalOffensesForStateAndOffense("Alaska", offense);
        data.AK.number= numberOffenses;
        data.AK.fill = this.classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Arizona"){
        var numberOffenses = numberOfTotalOffensesForStateAndOffense("Arizona", offense);
        data.AZ.number =numberOffenses;
        data.AZ.fill = this.classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Arkansas"){
        var numberOffenses = numberOfTotalOffensesForStateAndOffense("Arkansas", offense);
        data.AR.number= numberOffenses;
        data.AR.fill = this.classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "California"){
        var numberOffenses = numberOfTotalOffensesForStateAndOffense("California", offense);
        data.CA.number= numberOffenses;
        data.CA.fill = this.classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Colorado"){
        var numberOffenses = numberOfTotalOffensesForStateAndOffense("Colorado", offense);
        data.CO.number= numberOffenses;
        data.CO.fill = this.classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Connecticut"){
        var numberOffenses = numberOfTotalOffensesForStateAndOffense("Connecticut", offense);
        data.CT.number= numberOffenses;
        data.CT.fill = this.classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Delaware"){
        var numberOffenses = numberOfTotalOffensesForStateAndOffense("Delaware", offense);
        data.DE.number= numberOffenses;
        data.DE.fill = this.classifyColors(numberOffenses);
      } else
      if (stateData.state === "Florida"){
        var numberOffenses = numberOfTotalOffensesForStateAndOffense("Florida", offense);
        data.FL.number= numberOffenses;
        data.FL.fill = this.classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Georgia"){
        var numberOffenses = numberOfTotalOffensesForStateAndOffense("Georgia", offense);
        data.GA.number= numberOffenses;
        data.GA.fill = this.classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Hawaii"){
        var numberOffenses = numberOfTotalOffensesForStateAndOffense("Hawaii", offense);
        data.HI.number= numberOffenses;
        data.HI.fill = this.classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Idaho"){
        var numberOffenses = numberOfTotalOffensesForStateAndOffense("Idaho", offense);
        data.ID.number= numberOffenses;
        data.ID.fill = this.classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Illinois"){
        var numberOffenses = numberOfTotalOffensesForStateAndOffense("Illinois", offense);
        data.IL.number= numberOffenses;
        data.IL.fill = this.classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Indiana"){
        var numberOffenses = numberOfTotalOffensesForStateAndOffense("Indiana", offense);
        data.IN.number= numberOffenses;
        data.IN.fill = this.classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Iowa"){
        var numberOffenses = numberOfTotalOffensesForStateAndOffense("Iowa", offense);
        data.IA.number= numberOffenses;
        data.IA.fill = this.classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Kansas"){
        var numberOffenses = numberOfTotalOffensesForStateAndOffense("Kansas", offense);
        data.KS.number= numberOffenses;
        data.KS.fill = this.classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Kentucky"){
        var numberOffenses = numberOfTotalOffensesForStateAndOffense("Kentucky", offense);
        data.KY.number= numberOffenses;
        data.KY.fill = this.classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Maine"){
        var numberOffenses = numberOfTotalOffensesForStateAndOffense("Maine", offense);
        data.ME.number= numberOffenses;
        data.ME.fill = this.classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Maryland"){
        var numberOffenses = numberOfTotalOffensesForStateAndOffense("Maryland", offense);
        data.MD.number= numberOffenses;
        data.MD.fill = this.classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Massachusetts"){
        var numberOffenses = numberOfTotalOffensesForStateAndOffense("Massachusetts", offense);
        data.MA.number= numberOffenses;
        data.MA.fill = this.classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Michigan"){
        var numberOffenses = numberOfTotalOffensesForStateAndOffense("Michigan", offense);
        data.MI.number= numberOffenses;
        data.MI.fill = this.classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Minnesota"){
        var numberOffenses = numberOfTotalOffensesForStateAndOffense("Minnesota", offense);
        data.MN.number= numberOffenses;
        data.MN.fill = this.classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Mississippi"){
        var numberOffenses = numberOfTotalOffensesForStateAndOffense("Mississippi", offense);
        data.MS.number= numberOffenses;
        data.MS.fill = this.classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Missouri"){
        var numberOffenses = numberOfTotalOffensesForStateAndOffense("Missouri", offense);
        data.MO.number= numberOffenses;
        data.MO.fill = this.classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Montana"){
        var numberOffenses = numberOfTotalOffensesForStateAndOffense("Montana", offense);
        data.MT.number= numberOffenses;
        data.MT.fill = this.classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Nebraska"){
        var numberOffenses = numberOfTotalOffensesForStateAndOffense("Nebraska", offense);
        data.NE.number= numberOffenses;
        data.NE.fill = this.classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Nevada"){
        var numberOffenses = numberOfTotalOffensesForStateAndOffense("Nevada", offense);
        data.NV.number= numberOffenses;
        data.NV.fill = this.classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "New Hampshire"){
        var numberOffenses = numberOfTotalOffensesForStateAndOffense("New Hampshire", offense);
        data.NH.number= numberOffenses;
        data.NH.fill = this.classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "New Jersey"){
        var numberOffenses = numberOfTotalOffensesForStateAndOffense("New Jersey", offense);
        data.NJ.number= numberOffenses;
        data.NJ.fill = this.classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "New Mexico"){
        var numberOffenses = numberOfTotalOffensesForStateAndOffense("New Mexico", offense);
        data.NM.number= numberOffenses;
        data.NM.fill = this.classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "New York"){
        var numberOffenses = numberOfTotalOffensesForStateAndOffense("New York", offense);
        data.NY.number= numberOffenses;
        data.NY.fill = this.classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "North Carolina"){
        var numberOffenses = numberOfTotalOffensesForStateAndOffense("North Carolina", offense);
        data.NC.number= numberOffenses;
        data.NC.fill = this.classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "North Dakota"){
        var numberOffenses = numberOfTotalOffensesForStateAndOffense("North Dakota", offense);
        data.ND.number= numberOffenses;
        data.ND.fill = this.classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Ohio"){
        var numberOffenses = numberOfTotalOffensesForStateAndOffense("Ohio", offense);
        data.OH.number= numberOffenses;
        data.OH.fill = this.classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Oklahoma"){
        var numberOffenses = numberOfTotalOffensesForStateAndOffense("Oklahoma", offense);
        data.OK.number= numberOffenses;
        data.OK.fill = this.classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Oregon"){
        var numberOffenses = numberOfTotalOffensesForStateAndOffense("Oregon", offense);
        data.OR.number= numberOffenses;
        data.OR.fill = this.classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Pennsylvania"){
        var numberOffenses = numberOfTotalOffensesForStateAndOffense("Pennsylvania", offense);
        data.PA.number= numberOffenses;
        data.PA.fill = this.classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Rhode Island"){
        var numberOffenses = numberOfTotalOffensesForStateAndOffense("Rhode Island", offense);
        data.RI.number= numberOffenses;
        data.RI.fill = this.classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "South Carolina"){
        var numberOffenses = numberOfTotalOffensesForStateAndOffense("South Carolina", offense);
        data.SC.number= numberOffenses;
        data.SC.fill = this.classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "South Dakota"){
        var numberOffenses = numberOfTotalOffensesForStateAndOffense("South Dakota", offense);
        data.TN.number= numberOffenses;
        data.TN.fill = this.classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Tennessee"){
        var numberOffenses = numberOfTotalOffensesForStateAndOffense("Tennessee", offense);
        data.AL.number= numberOffenses;
        data.AL.fill = this.classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Texas"){
        var numberOffenses = numberOfTotalOffensesForStateAndOffense("Texas", offense);
        data.TX.number= numberOffenses;
        data.TX.fill = this.classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Utah"){
        var numberOffenses = numberOfTotalOffensesForStateAndOffense("Utah", offense);
        data.UT.number= numberOffenses;
        data.UT.fill = this.classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Vermont"){
        var numberOffenses = numberOfTotalOffensesForStateAndOffense("Vermont", offense);
        data.VT.number= numberOffenses;
        data.VT.fill = this.classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Virginia"){
        var numberOffenses = numberOfTotalOffensesForStateAndOffense("Virginia", offense);
        data.VA.number= numberOffenses;
        data.VA.fill = this.classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Washington"){
        var numberOffenses = numberOfTotalOffensesForStateAndOffense("Washington", offense);
        data.WA.number= numberOffenses;
        data.WA.fill = this.classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "West Virginia"){
        var numberOffenses = numberOfTotalOffensesForStateAndOffense("West Virginia", offense);
        data.WV.number= numberOffenses;
        data.WV.fill = this.classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Wisconsin"){
        var numberOffenses = numberOfTotalOffensesForStateAndOffense("Wisconsin", offense);
        data.WI.number= numberOffenses;
        data.WI.fill = this.classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Wyoming"){
        var numberOffenses = numberOfTotalOffensesForStateAndOffense("Wyoming", offense);
        data.WY.number= numberOffenses;
        data.WY.fill = this.classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Columbia"){
        var numberOffenses = numberOfTotalOffensesForStateAndOffense("Columbia", offense);
        data.DC2.number= numberOffenses;
        data.DC2.fill = this.classifyColors(numberOffenses,min,max);
      }
    };
    return data;
  }

  populateMapNumbersByYear(populationNumbers, year){
    var data = this.statesCustomConfig();
    var max = mostOffensesByYear(year)[1];
    var min = leastOffensesByYear(year)[1];
    for (var i = 0; i < populationNumbers.length; i++){
      var stateData = populationNumbers[i];
      console.log(stateData.offenseQuantity);
      if (stateData.state === "Alabama"){
        var numberOffenses = numberOfTotalOffensesForStateAndYear("Alabama", year);
        data.AL.number =numberOffenses;
        data.AL.fill = this.classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Alaska"){
        var numberOffenses = numberOfTotalOffensesForStateAndYear("Alaska", year);
        data.AK.number= numberOffenses;
        data.AK.fill = this.classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Arizona"){
        var numberOffenses = numberOfTotalOffensesForStateAndYear("Arizona", year);
        data.AZ.number =numberOffenses;
        data.AZ.fill = this.classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Arkansas"){
        var numberOffenses = numberOfTotalOffensesForStateAndYear("Arkansas", year);
        data.AR.number= numberOffenses;
        data.AR.fill = this.classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "California"){
        var numberOffenses = numberOfTotalOffensesForStateAndYear("California", year);
        data.CA.number= numberOffenses;
        data.CA.fill = this.classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Colorado"){
        var numberOffenses = numberOfTotalOffensesForStateAndYear("Colorado", year);
        data.CO.number= numberOffenses;
        data.CO.fill = this.classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Connecticut"){
        var numberOffenses = numberOfTotalOffensesForStateAndYear("Connecticut", year);
        data.CT.number= numberOffenses;
        data.CT.fill = this.classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Delaware"){
        var numberOffenses = numberOfTotalOffensesForStateAndYear("Delaware", year);
        data.DE.number= numberOffenses;
        data.DE.fill = this.classifyColors(numberOffenses);
      } else
      if (stateData.state === "Florida"){
        var numberOffenses = numberOfTotalOffensesForStateAndYear("Florida", year);
        data.FL.number= numberOffenses;
        data.FL.fill = this.classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Georgia"){
        var numberOffenses = numberOfTotalOffensesForStateAndYear("Georgia", year);
        data.GA.number= numberOffenses;
        data.GA.fill = this.classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Hawaii"){
        var numberOffenses = numberOfTotalOffensesForStateAndYear("Hawaii", year);
        data.HI.number= numberOffenses;
        data.HI.fill = this.classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Idaho"){
        var numberOffenses = numberOfTotalOffensesForStateAndYear("Idaho", year);
        data.ID.number= numberOffenses;
        data.ID.fill = this.classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Illinois"){
        var numberOffenses = numberOfTotalOffensesForStateAndYear("Illinois", year);
        data.IL.number= numberOffenses;
        data.IL.fill = this.classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Indiana"){
        var numberOffenses = numberOfTotalOffensesForStateAndYear("Indiana", year);
        data.IN.number= numberOffenses;
        data.IN.fill = this.classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Iowa"){
        var numberOffenses = numberOfTotalOffensesForStateAndYear("Iowa", year);
        data.IA.number= numberOffenses;
        data.IA.fill = this.classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Kansas"){
        var numberOffenses = numberOfTotalOffensesForStateAndYear("Kansas", year);
        data.KS.number= numberOffenses;
        data.KS.fill = this.classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Kentucky"){
        var numberOffenses = numberOfTotalOffensesForStateAndYear("Kentucky", year);
        data.KY.number= numberOffenses;
        data.KY.fill = this.classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Maine"){
        var numberOffenses = numberOfTotalOffensesForStateAndYear("Maine", year);
        data.ME.number= numberOffenses;
        data.ME.fill = this.classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Maryland"){
        var numberOffenses = numberOfTotalOffensesForStateAndYear("Maryland", year);
        data.MD.number= numberOffenses;
        data.MD.fill = this.classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Massachusetts"){
        var numberOffenses = numberOfTotalOffensesForStateAndYear("Massachusetts", year);
        data.MA.number= numberOffenses;
        data.MA.fill = this.classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Michigan"){
        var numberOffenses = numberOfTotalOffensesForStateAndYear("Michigan", year);
        data.MI.number= numberOffenses;
        data.MI.fill = this.classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Minnesota"){
        var numberOffenses = numberOfTotalOffensesForStateAndYear("Minnesota", year);
        data.MN.number= numberOffenses;
        data.MN.fill = this.classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Mississippi"){
        var numberOffenses = numberOfTotalOffensesForStateAndYear("Mississippi", year);
        data.MS.number= numberOffenses;
        data.MS.fill = this.classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Missouri"){
        var numberOffenses = numberOfTotalOffensesForStateAndYear("Missouri", year);
        data.MO.number= numberOffenses;
        data.MO.fill = this.classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Montana"){
        var numberOffenses = numberOfTotalOffensesForStateAndYear("Montana", year);
        data.MT.number= numberOffenses;
        data.MT.fill = this.classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Nebraska"){
        var numberOffenses = numberOfTotalOffensesForStateAndYear("Nebraska", year);
        data.NE.number= numberOffenses;
        data.NE.fill = this.classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Nevada"){
        var numberOffenses = numberOfTotalOffensesForStateAndYear("Nevada", year);
        data.NV.number= numberOffenses;
        data.NV.fill = this.classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "New Hampshire"){
        var numberOffenses = numberOfTotalOffensesForStateAndYear("New Hampshire", year);
        data.NH.number= numberOffenses;
        data.NH.fill = this.classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "New Jersey"){
        var numberOffenses = numberOfTotalOffensesForStateAndYear("New Jersey", year);
        data.NJ.number= numberOffenses;
        data.NJ.fill = this.classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "New Mexico"){
        var numberOffenses = numberOfTotalOffensesForStateAndYear("New Mexico", year);
        data.NM.number= numberOffenses;
        data.NM.fill = this.classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "New York"){
        var numberOffenses = numberOfTotalOffensesForStateAndYear("New York", year);
        data.NY.number= numberOffenses;
        data.NY.fill = this.classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "North Carolina"){
        var numberOffenses = numberOfTotalOffensesForStateAndYear("North Carolina", year);
        data.NC.number= numberOffenses;
        data.NC.fill = this.classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "North Dakota"){
        var numberOffenses = numberOfTotalOffensesForStateAndYear("North Dakota", year);
        data.ND.number= numberOffenses;
        data.ND.fill = this.classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Ohio"){
        var numberOffenses = numberOfTotalOffensesForStateAndYear("Ohio", year);
        data.OH.number= numberOffenses;
        data.OH.fill = this.classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Oklahoma"){
        var numberOffenses = numberOfTotalOffensesForStateAndYear("Oklahoma", year);
        data.OK.number= numberOffenses;
        data.OK.fill = this.classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Oregon"){
        var numberOffenses = numberOfTotalOffensesForStateAndYear("Oregon", year);
        data.OR.number= numberOffenses;
        data.OR.fill = this.classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Pennsylvania"){
        var numberOffenses = numberOfTotalOffensesForStateAndYear("Pennsylvania", year);
        data.PA.number= numberOffenses;
        data.PA.fill = this.classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Rhode Island"){
        var numberOffenses = numberOfTotalOffensesForStateAndYear("Rhode Island", year);
        data.RI.number= numberOffenses;
        data.RI.fill = this.classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "South Carolina"){
        var numberOffenses = numberOfTotalOffensesForStateAndYear("South Carolina", year);
        data.SC.number= numberOffenses;
        data.SC.fill = this.classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "South Dakota"){
        var numberOffenses = numberOfTotalOffensesForStateAndYear("South Dakota", year);
        data.TN.number= numberOffenses;
        data.TN.fill = this.classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Tennessee"){
        var numberOffenses = numberOfTotalOffensesForStateAndYear("Tennessee", year);
        data.AL.number= numberOffenses;
        data.AL.fill = this.classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Texas"){
        var numberOffenses = numberOfTotalOffensesForStateAndYear("Texas", year);
        data.TX.number= numberOffenses;
        data.TX.fill = this.classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Utah"){
        var numberOffenses = numberOfTotalOffensesForStateAndYear("Utah", year);
        data.UT.number= numberOffenses;
        data.UT.fill = this.classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Vermont"){
        var numberOffenses = numberOfTotalOffensesForStateAndYear("Vermont", year);
        data.VT.number= numberOffenses;
        data.VT.fill = this.classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Virginia"){
        var numberOffenses = numberOfTotalOffensesForStateAndYear("Virginia", year);
        data.VA.number= numberOffenses;
        data.VA.fill = this.classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Washington"){
        var numberOffenses = numberOfTotalOffensesForStateAndYear("Washington", year);
        data.WA.number= numberOffenses;
        data.WA.fill = this.classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "West Virginia"){
        var numberOffenses = numberOfTotalOffensesForStateAndYear("West Virginia", year);
        data.WV.number= numberOffenses;
        data.WV.fill = this.classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Wisconsin"){
        var numberOffenses = numberOfTotalOffensesForStateAndYear("Wisconsin", year);
        data.WI.number= numberOffenses;
        data.WI.fill = this.classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Wyoming"){
        var numberOffenses = numberOfTotalOffensesForStateAndYear("Wyoming", year);
        data.WY.number= numberOffenses;
        data.WY.fill = this.classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Columbia"){
        var numberOffenses = numberOfTotalOffensesForStateAndYear("Columbia", year);
        data.DC2.number= numberOffenses;
        data.DC2.fill = this.classifyColors(numberOffenses,min,max);
      }
    };
    return data;
  }

  populateMapNumbers(populationNumbers){
    var data = this.statesCustomConfig();
    var max = mostOffenses()[1];
    var min = leastOffenses()[1];
    for (var i = 0; i < populationNumbers.length; i++){
      var stateData = populationNumbers[i];
      console.log(stateData.offenseQuantity);
      if (stateData.state === "Alabama"){
        var numberOffenses = numberOfTotalOffensesForState("Alabama");
        data.AL.number =numberOffenses;
        data.AL.fill = this.classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Alaska"){
        var numberOffenses = numberOfTotalOffensesForState("Alaska");
        data.AK.number= numberOffenses;
        data.AK.fill = this.classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Arizona"){
        var numberOffenses = numberOfTotalOffensesForState("Arizona");
        data.AZ.number =numberOffenses;
        data.AZ.fill = this.classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Arkansas"){
        var numberOffenses = numberOfTotalOffensesForState("Arkansas");
        data.AR.number= numberOffenses;
        data.AR.fill = this.classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "California"){
        var numberOffenses = numberOfTotalOffensesForState("California");
        data.CA.number= numberOffenses;
        data.CA.fill = this.classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Colorado"){
        var numberOffenses = numberOfTotalOffensesForState("Colorado");
        data.CO.number= numberOffenses;
        data.CO.fill = this.classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Connecticut"){
        var numberOffenses = numberOfTotalOffensesForState("Connecticut");
        data.CT.number= numberOffenses;
        data.CT.fill = this.classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Delaware"){
        var numberOffenses = numberOfTotalOffensesForState("Delaware");
        data.DE.number= numberOffenses;
        data.DE.fill = this.classifyColors(numberOffenses);
      } else
      if (stateData.state === "Florida"){
        var numberOffenses = numberOfTotalOffensesForState("Florida");
        data.FL.number= numberOffenses;
        data.FL.fill = this.classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Georgia"){
        var numberOffenses = numberOfTotalOffensesForState("Georgia");
        data.GA.number= numberOffenses;
        data.GA.fill = this.classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Hawaii"){
        var numberOffenses = numberOfTotalOffensesForState("Hawaii");
        data.HI.number= numberOffenses;
        data.HI.fill = this.classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Idaho"){
        var numberOffenses = numberOfTotalOffensesForState("Idaho");
        data.ID.number= numberOffenses;
        data.ID.fill = this.classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Illinois"){
        var numberOffenses = numberOfTotalOffensesForState("Illinois");
        data.IL.number= numberOffenses;
        data.IL.fill = this.classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Indiana"){
        var numberOffenses = numberOfTotalOffensesForState("Indiana");
        data.IN.number= numberOffenses;
        data.IN.fill = this.classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Iowa"){
        var numberOffenses = numberOfTotalOffensesForState("Iowa");
        data.IA.number= numberOffenses;
        data.IA.fill = this.classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Kansas"){
        var numberOffenses = numberOfTotalOffensesForState("Kansas");
        data.KS.number= numberOffenses;
        data.KS.fill = this.classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Kentucky"){
        var numberOffenses = numberOfTotalOffensesForState("Kentucky");
        data.KY.number= numberOffenses;
        data.KY.fill = this.classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Maine"){
        var numberOffenses = numberOfTotalOffensesForState("Maine");
        data.ME.number= numberOffenses;
        data.ME.fill = this.classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Maryland"){
        var numberOffenses = numberOfTotalOffensesForState("Maryland");
        data.MD.number= numberOffenses;
        data.MD.fill = this.classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Massachusetts"){
        var numberOffenses = numberOfTotalOffensesForState("Massachusetts");
        data.MA.number= numberOffenses;
        data.MA.fill = this.classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Michigan"){
        var numberOffenses = numberOfTotalOffensesForState("Michigan");
        data.MI.number= numberOffenses;
        data.MI.fill = this.classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Minnesota"){
        var numberOffenses = numberOfTotalOffensesForState("Minnesota");
        data.MN.number= numberOffenses;
        data.MN.fill = this.classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Mississippi"){
        var numberOffenses = numberOfTotalOffensesForState("Mississippi");
        data.MS.number= numberOffenses;
        data.MS.fill = this.classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Missouri"){
        var numberOffenses = numberOfTotalOffensesForState("Missouri");
        data.MO.number= numberOffenses;
        data.MO.fill = this.classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Montana"){
        var numberOffenses = numberOfTotalOffensesForState("Montana");
        data.MT.number= numberOffenses;
        data.MT.fill = this.classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Nebraska"){
        var numberOffenses = numberOfTotalOffensesForState("Nebraska");
        data.NE.number= numberOffenses;
        data.NE.fill = this.classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Nevada"){
        var numberOffenses = numberOfTotalOffensesForState("Nevada");
        data.NV.number= numberOffenses;
        data.NV.fill = this.classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "New Hampshire"){
        var numberOffenses = numberOfTotalOffensesForState("New Hampshire");
        data.NH.number= numberOffenses;
        data.NH.fill = this.classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "New Jersey"){
        var numberOffenses = numberOfTotalOffensesForState("New Jersey");
        data.NJ.number= numberOffenses;
        data.NJ.fill = this.classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "New Mexico"){
        var numberOffenses = numberOfTotalOffensesForState("New Mexico");
        data.NM.number= numberOffenses;
        data.NM.fill = this.classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "New York"){
        var numberOffenses = numberOfTotalOffensesForState("New York");
        data.NY.number= numberOffenses;
        data.NY.fill = this.classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "North Carolina"){
        var numberOffenses = numberOfTotalOffensesForState("North Carolina");
        data.NC.number= numberOffenses;
        data.NC.fill = this.classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "North Dakota"){
        var numberOffenses = numberOfTotalOffensesForState("North Dakota");
        data.ND.number= numberOffenses;
        data.ND.fill = this.classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Ohio"){
        var numberOffenses = numberOfTotalOffensesForState("Ohio");
        data.OH.number= numberOffenses;
        data.OH.fill = this.classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Oklahoma"){
        var numberOffenses = numberOfTotalOffensesForState("Oklahoma");
        data.OK.number= numberOffenses;
        data.OK.fill = this.classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Oregon"){
        var numberOffenses = numberOfTotalOffensesForState("Oregon");
        data.OR.number= numberOffenses;
        data.OR.fill = this.classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Pennsylvania"){
        var numberOffenses = numberOfTotalOffensesForState("Pennsylvania");
        data.PA.number= numberOffenses;
        data.PA.fill = this.classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Rhode Island"){
        var numberOffenses = numberOfTotalOffensesForState("Rhode Island");
        data.RI.number= numberOffenses;
        data.RI.fill = this.classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "South Carolina"){
        var numberOffenses = numberOfTotalOffensesForState("South Carolina");
        data.SC.number= numberOffenses;
        data.SC.fill = this.classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "South Dakota"){
        var numberOffenses = numberOfTotalOffensesForState("South Dakota");
        data.TN.number= numberOffenses;
        data.TN.fill = this.classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Tennessee"){
        var numberOffenses = numberOfTotalOffensesForState("Tennessee");
        data.AL.number= numberOffenses;
        data.AL.fill = this.classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Texas"){
        var numberOffenses = numberOfTotalOffensesForState("Texas");
        data.TX.number= numberOffenses;
        data.TX.fill = this.classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Utah"){
        var numberOffenses = numberOfTotalOffensesForState("Utah");
        data.UT.number= numberOffenses;
        data.UT.fill = this.classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Vermont"){
        var numberOffenses = numberOfTotalOffensesForState("Vermont");
        data.VT.number= numberOffenses;
        data.VT.fill = this.classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Virginia"){
        var numberOffenses = numberOfTotalOffensesForState("Virginia");
        data.VA.number= numberOffenses;
        data.VA.fill = this.classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Washington"){
        var numberOffenses = numberOfTotalOffensesForState("Washington");
        data.WA.number= numberOffenses;
        data.WA.fill = this.classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "West Virginia"){
        var numberOffenses = numberOfTotalOffensesForState("West Virginia");
        data.WV.number= numberOffenses;
        data.WV.fill = this.classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Wisconsin"){
        var numberOffenses = numberOfTotalOffensesForState("Wisconsin");
        data.WI.number= numberOffenses;
        data.WI.fill = this.classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Wyoming"){
        var numberOffenses = numberOfTotalOffensesForState("Wyoming");
        data.WY.number= numberOffenses;
        data.WY.fill = this.classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Columbia"){
        var numberOffenses = numberOfTotalOffensesForState("Columbia");
        data.DC2.number= numberOffenses;
        data.DC2.fill = this.classifyColors(numberOffenses,min,max);
      }
    };
    return data;
  }

  chooseOption(optionYear, optionOffense){
    
    if(optionYear == null && optionOffense == null)
    {
      return this.populateMapNumbers(allData());
    }
    else if(optionYear != null && optionOffense == null)
    {
      return this.populateMapNumbersByYear(allDataByYear(optionYear),optionYear);
    }
    else if(optionYear == null && optionOffense != null)
    {
      return this.populateMapNumbersByOffense(allStateDataTotalByType(optionOffense),optionOffense);
    }
    else if(optionYear != null && optionOffense != null)
    {
      return this.populateMapNumbersByOffenseAndYear(allStateDataTotalByTypeAndYear(optionOffense, optionYear),optionOffense, optionYear);
    }
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
    var completeData = this.populateMapNumbers(allData());
    console.log(completeData);
    return (
      <div className="App">
        <USAMap customize={completeData} onClick={this.mapHandler} />
      </div>

    );
  }
}

export default App;
