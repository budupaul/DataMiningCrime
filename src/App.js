import React, { Component } from 'react';
import './App.css';
import { mostOffensesByType,biggestOffenseRateAverageByType, mostOffensesTotalByYearAndType, allDataByState,allDataByStateAndYear, allStateDataTotalByType, allStateDataTotalByTypeAndYear, allDataByYear} from './Scripts/Statistics'

class App extends Component {
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
  render() {
    return (
      <div className="App">
        Hi mom
      </div>
    );
  }
}

export default App;
