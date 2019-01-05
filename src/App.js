import React, { Component } from 'react';
import './App.css';
import USAMap from "react-usa-map";
import { mostOffensesByType,biggestOffenseRateAverageByType, mostOffensesTotalByYearAndType, allDataByState,allDataByStateAndYear, allStateDataTotalByType, allStateDataTotalByTypeAndYear, allDataByYear} from './Scripts/Statistics'

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
    console.log(allStateDataTotalByTypeAndYear('Murder and nonnegligent Manslaughter', 2014))
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
        clickHandler: (event) => console.log('Custom handler for Wyoming', event.target.dataset)
      }
    };
  };

  render() {
    return (
      <div className="App">
        <USAMap customize={this.statesCustomConfig()} onClick={this.mapHandler} />
      </div>
    );
  }
}

export default App;
