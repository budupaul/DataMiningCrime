import { leastOffensesTotalByYearAndType, mostOffensesByType, mostOffensesTotalByYearAndType, 
    numberOfTotalOffensesForStateAndOffense, numberOfTotalOffensesForStateAndYear, leastOffensesByType, 
    mostOffensesByYear, leastOffensesByYear, numberOfTotalOffensesForState,
    mostOffenses, leastOffenses} from './Statistics';

function classifyColors(number, min, max){
    var step = (max-min)/5
    var limit1 = min + step;
    var limit2 = min + step*2;
    var limit3 = min + step*3;
    var limit4 = min + step*4;
    console.log(limit1);
    console.log(limit2);
    console.log(limit3);
    console.log(limit4);
    console.log(max);
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
    
    /* optional customization of filling per state and calling custom callbacks per state */
  function statesCustomConfig (){
    return {
      "AL": {
      },
      "AK": {
      },
      "AZ": {
      },
      "AR": {
      },
      "CA": {
      },
      "CO": {
      },
      "CT": {
      },
      "DE": {
      },
      "DC2": {
      },
      "FL": {
      },
      "GA": {
      },
      "HI": {
      },
      "ID": {
      },
      "IL": {
      },
      "IN": {
      },
      "IA": {
      },
      "KS": {
      },
      "KY": {
      },
      "LA": {
      },
      "ME": {
      },
      "MD": {
      },
      "MA": {
      },
      "MI": {
      },
      "MN": {
      },
      "MS": {
      },
      "MO": {
      },
      "MT": {
      },
      "NE": {
      },
      "NV": {
      },
      "NH": {
      },
      "NJ": {
      },
      "NM": {
      },
      "NY": {
      },
      "NC": {
      },
      "ND": {
      },
      "OH": {
      },
      "OK": {
      },
      "OR": {
      },
      "PA": {
      },
      "RI": {
      },
      "SC": {
      },
      "SD": {
      },
      "TN": {
      },
      "TX": {
      },
      "UT": {
      },
      "VT": {
      },
      "VA": {
      },
      "WA": {
      },
      "WV": {
      },
      "WI": {
      },
      "WY": {
      }
    };
  };
export function populateMapNumbersByOffenseAndYear(populationNumbers, offense, year){
    var data = statesCustomConfig();
    var max = mostOffensesTotalByYearAndType(year, offense)[1];
    console.log(mostOffensesTotalByYearAndType(year, offense));
    var min = leastOffensesTotalByYearAndType(year, offense)[1];
    for (var i = 0; i < populationNumbers.length; i++){
      var stateData = populationNumbers[i];
      if (stateData.state === "Alabama"){
        data.AL.number = stateData.offenseQuantity;
        data.AL.fill = classifyColors(stateData.offenseQuantity,min,max);
      } else
      if (stateData.state === "Alaska"){
        data.AK.number= stateData.offenseQuantity;
        data.AK.fill = classifyColors(stateData.offenseQuantity,min,max);
      } else
      if (stateData.state === "Arizona"){
        data.AZ.number= stateData.offenseQuantity;
        data.AZ.fill = classifyColors(stateData.offenseQuantity,min,max);
      } else
      if (stateData.state === "Arkansas"){
        data.AR.number= stateData.offenseQuantity;
        data.AR.fill = classifyColors(stateData.offenseQuantity,min,max);
      } else
      if (stateData.state === "California"){
        data.CA.number= stateData.offenseQuantity;
        data.CA.fill = classifyColors(stateData.offenseQuantity,min,max);
      } else
      if (stateData.state === "Colorado"){
        data.CO.number= stateData.offenseQuantity;
        data.CO.fill = classifyColors(stateData.offenseQuantity,min,max);
      } else
      if (stateData.state === "Connecticut"){
        data.CT.number= stateData.offenseQuantity;
        data.CT.fill = classifyColors(stateData.offenseQuantity,min,max);
      } else
      if (stateData.state === "Delaware"){
        data.DE.number= stateData.offenseQuantity;
        data.DE.fill = classifyColors(stateData.offenseQuantity,min,max);
      } else
      if (stateData.state === "Florida"){
        data.FL.number= stateData.offenseQuantity;
        data.FL.fill = classifyColors(stateData.offenseQuantity,min,max);
      } else
      if (stateData.state === "Georgia"){
        data.GA.number= stateData.offenseQuantity;
        data.GA.fill = classifyColors(stateData.offenseQuantity,min,max);
      } else
      if (stateData.state === "Hawaii"){
        data.HI.number= stateData.offenseQuantity;
        data.HI.fill = classifyColors(stateData.offenseQuantity,min,max);
      } else
      if (stateData.state === "Idaho"){
        data.ID.number= stateData.offenseQuantity;
        data.ID.fill = classifyColors(stateData.offenseQuantity,min,max);
      } else
      if (stateData.state === "Illinois"){
        data.IL.number= stateData.offenseQuantity;
        data.IL.fill = classifyColors(stateData.offenseQuantity,min,max);
      } else
      if (stateData.state === "Indiana"){
        data.IN.number= stateData.offenseQuantity;
        data.IN.fill = classifyColors(stateData.offenseQuantity,min,max);
      } else
      if (stateData.state === "Iowa"){
        data.IA.number= stateData.offenseQuantity;
        data.IA.fill = classifyColors(stateData.offenseQuantity,min,max);
      } else
      if (stateData.state === "Kansas"){
        data.KS.number= stateData.offenseQuantity;
        data.KS.fill = classifyColors(stateData.offenseQuantity,min,max);
      } else
      if (stateData.state === "Kentucky"){
        data.KY.number= stateData.offenseQuantity;
        data.KY.fill = classifyColors(stateData.offenseQuantity,min,max);
      } else
      if (stateData.state === "Louisiana"){
        data.LA.number= stateData.offenseQuantity;
        data.LA.fill = classifyColors(stateData.offenseQuantity,min,max);
      } else
      if (stateData.state === "Maine"){
        data.ME.number= stateData.offenseQuantity;
        data.ME.fill = classifyColors(stateData.offenseQuantity,min,max);
      } else
      if (stateData.state === "Maryland"){
        data.MD.number= stateData.offenseQuantity;
        data.MD.fill = classifyColors(stateData.offenseQuantity,min,max);
      } else
      if (stateData.state === "Massachusetts"){
        data.MA.number= stateData.offenseQuantity;
        data.MA.fill = classifyColors(stateData.offenseQuantity,min,max);
      } else
      if (stateData.state === "Michigan"){
        data.MI.number= stateData.offenseQuantity;
        data.MI.fill = classifyColors(stateData.offenseQuantity,min,max);
      } else
      if (stateData.state === "Minnesota"){
        data.MN.number= stateData.offenseQuantity;
        data.MN.fill = classifyColors(stateData.offenseQuantity,min,max);
      } else
      if (stateData.state === "Mississippi"){
        data.MS.number= stateData.offenseQuantity;
        data.MS.fill = classifyColors(stateData.offenseQuantity,min,max);
      } else
      if (stateData.state === "Missouri"){
        data.MO.number= stateData.offenseQuantity;
        data.MO.fill = classifyColors(stateData.offenseQuantity,min,max);
      } else
      if (stateData.state === "Montana"){
        data.MT.number= stateData.offenseQuantity;
        data.MT.fill = classifyColors(stateData.offenseQuantity,min,max);
      } else
      if (stateData.state === "Nebraska"){
        data.NE.number= stateData.offenseQuantity;
        data.NE.fill = classifyColors(stateData.offenseQuantity,min,max);
      } else
      if (stateData.state === "Nevada"){
        data.NV.number= stateData.offenseQuantity;
        data.NV.fill = classifyColors(stateData.offenseQuantity,min,max);
      } else
      if (stateData.state === "Hampshire"){
        data.NH.number= stateData.offenseQuantity;
        data.NH.fill = classifyColors(stateData.offenseQuantity,min,max);
      } else
      if (stateData.state === "New Jersey"){
        data.NJ.number= stateData.offenseQuantity;
        data.NJ.fill = classifyColors(stateData.offenseQuantity,min,max);
      } else
      if (stateData.state === "New Mexico"){
        data.NM.number= stateData.offenseQuantity;
        data.NM.fill = classifyColors(stateData.offenseQuantity,min,max);
      } else
      if (stateData.state === "New York"){
        data.NY.number= stateData.offenseQuantity;
        data.NY.fill = classifyColors(stateData.offenseQuantity,min,max);
      } else
      if (stateData.state === "North Carolina"){
        data.NC.number= stateData.offenseQuantity;
        data.NC.fill = classifyColors(stateData.offenseQuantity,min,max);
      } else
      if (stateData.state === "North Dakota"){
        data.ND.number= stateData.offenseQuantity;
        data.ND.fill = classifyColors(stateData.offenseQuantity,min,max);
      } else
      if (stateData.state === "Ohio"){
        data.OH.number= stateData.offenseQuantity;
        data.OH.fill = classifyColors(stateData.offenseQuantity,min,max);
      } else
      if (stateData.state === "Oklahoma"){
        data.OK.number= stateData.offenseQuantity;
        data.OK.fill = classifyColors(stateData.offenseQuantity,min,max);
      } else
      if (stateData.state === "Oregon"){
        data.OR.number= stateData.offenseQuantity;
        data.OR.fill = classifyColors(stateData.offenseQuantity,min,max);
      } else
      if (stateData.state === "Pennsylvania"){
        data.PA.number= stateData.offenseQuantity;
        data.PA.fill = classifyColors(stateData.offenseQuantity,min,max);
      } else
      if (stateData.state === "Rhode Island"){
        data.RI.number= stateData.offenseQuantity;
        data.RI.fill = classifyColors(stateData.offenseQuantity,min,max);
      } else
      if (stateData.state === "South Carolina"){
        data.SC.number= stateData.offenseQuantity;
        data.SC.fill = classifyColors(stateData.offenseQuantity,min,max);
      } else
      if (stateData.state === "South Dakota"){
        data.SD.number= stateData.offenseQuantity;
        data.SD.fill = classifyColors(stateData.offenseQuantity,min,max);
      } else
      if (stateData.state === "Tennessee"){
        data.TN.number= stateData.offenseQuantity;
        data.TN.fill = classifyColors(stateData.offenseQuantity,min,max);
      } else
      if (stateData.state === "Texas"){
        data.TX.number= stateData.offenseQuantity;
        data.TX.fill = classifyColors(stateData.offenseQuantity,min,max);
      } else
      if (stateData.state === "Utah"){
        data.UT.number= stateData.offenseQuantity;
        data.UT.fill = classifyColors(stateData.offenseQuantity,min,max);
      } else
      if (stateData.state === "Vermont"){
        data.VT.number= stateData.offenseQuantity;
        data.VT.fill = classifyColors(stateData.offenseQuantity,min,max);
      } else
      if (stateData.state === "Virginia"){
        data.VA.number= stateData.offenseQuantity;
        data.VA.fill = classifyColors(stateData.offenseQuantity,min,max);
      } else
      if (stateData.state === "Washington"){
        data.WA.number= stateData.offenseQuantity;
        data.WA.fill = classifyColors(stateData.offenseQuantity,min,max);
      } else
      if (stateData.state === "West Virginia"){
        data.WV.number= stateData.offenseQuantity;
        data.WV.fill = classifyColors(stateData.offenseQuantity,min,max);
      } else
      if (stateData.state === "Wisconsin"){
        data.WI.number= stateData.offenseQuantity;
        data.WI.fill = classifyColors(stateData.offenseQuantity,min,max);
      } else
      if (stateData.state === "Wyoming"){
        data.WY.number= stateData.offenseQuantity;
        data.WY.fill = classifyColors(stateData.offenseQuantity,min,max);
      } else
      if (stateData.state === "Columbia"){
        data.DC2.number= stateData.offenseQuantity;
        data.DC2.fill = classifyColors(stateData.offenseQuantity,min,max);
      }
    };
    return data;
  }

export function populateMapNumbersByOffense(populationNumbers, offense){
    var data = statesCustomConfig();
    var max = mostOffensesByType(offense)[1];
    var min = leastOffensesByType(offense)[1];
    var numberOffenses;
    for (var i = 0; i < populationNumbers.length; i++){
      var stateData = populationNumbers[i];
      if (stateData.state === "Alabama"){
        numberOffenses = numberOfTotalOffensesForStateAndOffense("Alabama", offense);
        data.AL.number =numberOffenses;
        data.AL.fill = classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Alaska"){
        numberOffenses = numberOfTotalOffensesForStateAndOffense("Alaska", offense);
        data.AK.number= numberOffenses;
        data.AK.fill = classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Arizona"){
        numberOffenses = numberOfTotalOffensesForStateAndOffense("Arizona", offense);
        data.AZ.number =numberOffenses;
        data.AZ.fill = classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Arkansas"){
        numberOffenses = numberOfTotalOffensesForStateAndOffense("Arkansas", offense);
        data.AR.number= numberOffenses;
        data.AR.fill = classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "California"){
        numberOffenses = numberOfTotalOffensesForStateAndOffense("California", offense);
        data.CA.number= numberOffenses;
        data.CA.fill = classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Colorado"){
        numberOffenses = numberOfTotalOffensesForStateAndOffense("Colorado", offense);
        data.CO.number= numberOffenses;
        data.CO.fill = classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Connecticut"){
        numberOffenses = numberOfTotalOffensesForStateAndOffense("Connecticut", offense);
        data.CT.number= numberOffenses;
        data.CT.fill = classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Delaware"){
        numberOffenses = numberOfTotalOffensesForStateAndOffense("Delaware", offense);
        data.DE.number= numberOffenses;
        data.DE.fill = classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Florida"){
        numberOffenses = numberOfTotalOffensesForStateAndOffense("Florida", offense);
        data.FL.number= numberOffenses;
        data.FL.fill = classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Georgia"){
        numberOffenses = numberOfTotalOffensesForStateAndOffense("Georgia", offense);
        data.GA.number= numberOffenses;
        data.GA.fill = classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Hawaii"){
        numberOffenses = numberOfTotalOffensesForStateAndOffense("Hawaii", offense);
        data.HI.number= numberOffenses;
        data.HI.fill = classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Idaho"){
        numberOffenses = numberOfTotalOffensesForStateAndOffense("Idaho", offense);
        data.ID.number= numberOffenses;
        data.ID.fill = classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Illinois"){
        numberOffenses = numberOfTotalOffensesForStateAndOffense("Illinois", offense);
        data.IL.number= numberOffenses;
        data.IL.fill = classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Indiana"){
        numberOffenses = numberOfTotalOffensesForStateAndOffense("Indiana", offense);
        data.IN.number= numberOffenses;
        data.IN.fill = classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Iowa"){
        numberOffenses = numberOfTotalOffensesForStateAndOffense("Iowa", offense);
        data.IA.number= numberOffenses;
        data.IA.fill = classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Kansas"){
        numberOffenses = numberOfTotalOffensesForStateAndOffense("Kansas", offense);
        data.KS.number= numberOffenses;
        data.KS.fill = classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Kentucky"){
        numberOffenses = numberOfTotalOffensesForStateAndOffense("Kentucky", offense);
        data.KY.number= numberOffenses;
        data.KY.fill = classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Louisiana"){
        numberOffenses = numberOfTotalOffensesForStateAndOffense("Louisiana", offense);
        data.LA.number= numberOffenses;
        data.LA.fill = classifyColors(stateData.offenseQuantity,min,max);
      } else
      if (stateData.state === "Maine"){
        numberOffenses = numberOfTotalOffensesForStateAndOffense("Maine", offense);
        data.ME.number= numberOffenses;
        data.ME.fill = classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Maryland"){
        numberOffenses = numberOfTotalOffensesForStateAndOffense("Maryland", offense);
        data.MD.number= numberOffenses;
        data.MD.fill = classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Massachusetts"){
        numberOffenses = numberOfTotalOffensesForStateAndOffense("Massachusetts", offense);
        data.MA.number= numberOffenses;
        data.MA.fill = classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Michigan"){
        numberOffenses = numberOfTotalOffensesForStateAndOffense("Michigan", offense);
        data.MI.number= numberOffenses;
        data.MI.fill = classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Minnesota"){
        numberOffenses = numberOfTotalOffensesForStateAndOffense("Minnesota", offense);
        data.MN.number= numberOffenses;
        data.MN.fill = classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Mississippi"){
        numberOffenses = numberOfTotalOffensesForStateAndOffense("Mississippi", offense);
        data.MS.number= numberOffenses;
        data.MS.fill = classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Missouri"){
        numberOffenses = numberOfTotalOffensesForStateAndOffense("Missouri", offense);
        data.MO.number= numberOffenses;
        data.MO.fill = classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Montana"){
        numberOffenses = numberOfTotalOffensesForStateAndOffense("Montana", offense);
        data.MT.number= numberOffenses;
        data.MT.fill = classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Nebraska"){
        numberOffenses = numberOfTotalOffensesForStateAndOffense("Nebraska", offense);
        data.NE.number= numberOffenses;
        data.NE.fill = classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Nevada"){
        numberOffenses = numberOfTotalOffensesForStateAndOffense("Nevada", offense);
        data.NV.number= numberOffenses;
        data.NV.fill = classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Hampshire"){
        numberOffenses = numberOfTotalOffensesForStateAndOffense("Hampshire", offense);
        data.NH.number= numberOffenses;
        data.NH.fill = classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "New Jersey"){
        numberOffenses = numberOfTotalOffensesForStateAndOffense("New Jersey", offense);
        data.NJ.number= numberOffenses;
        data.NJ.fill = classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "New Mexico"){
        numberOffenses = numberOfTotalOffensesForStateAndOffense("New Mexico", offense);
        data.NM.number= numberOffenses;
        data.NM.fill = classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "New York"){
        numberOffenses = numberOfTotalOffensesForStateAndOffense("New York", offense);
        data.NY.number= numberOffenses;
        data.NY.fill = classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "North Carolina"){
        numberOffenses = numberOfTotalOffensesForStateAndOffense("North Carolina", offense);
        data.NC.number= numberOffenses;
        data.NC.fill = classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "North Dakota"){
        numberOffenses = numberOfTotalOffensesForStateAndOffense("North Dakota", offense);
        data.ND.number= numberOffenses;
        data.ND.fill = classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Ohio"){
        numberOffenses = numberOfTotalOffensesForStateAndOffense("Ohio", offense);
        data.OH.number= numberOffenses;
        data.OH.fill = classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Oklahoma"){
        numberOffenses = numberOfTotalOffensesForStateAndOffense("Oklahoma", offense);
        data.OK.number= numberOffenses;
        data.OK.fill = classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Oregon"){
        numberOffenses = numberOfTotalOffensesForStateAndOffense("Oregon", offense);
        data.OR.number= numberOffenses;
        data.OR.fill = classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Pennsylvania"){
        numberOffenses = numberOfTotalOffensesForStateAndOffense("Pennsylvania", offense);
        data.PA.number= numberOffenses;
        data.PA.fill = classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Rhode Island"){
        numberOffenses = numberOfTotalOffensesForStateAndOffense("Rhode Island", offense);
        data.RI.number= numberOffenses;
        data.RI.fill = classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "South Carolina"){
        numberOffenses = numberOfTotalOffensesForStateAndOffense("South Carolina", offense);
        data.SC.number= numberOffenses;
        data.SC.fill = classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "South Dakota"){
        numberOffenses = numberOfTotalOffensesForStateAndOffense("South Dakota", offense);
        data.SD.number= numberOffenses;
        data.SD.fill = classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Tennessee"){
        numberOffenses = numberOfTotalOffensesForStateAndOffense("Tennessee", offense);
        data.TN.number= numberOffenses;
        data.TN.fill = classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Texas"){
        numberOffenses = numberOfTotalOffensesForStateAndOffense("Texas", offense);
        data.TX.number= numberOffenses;
        data.TX.fill = classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Utah"){
        numberOffenses = numberOfTotalOffensesForStateAndOffense("Utah", offense);
        data.UT.number= numberOffenses;
        data.UT.fill = classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Vermont"){
        numberOffenses = numberOfTotalOffensesForStateAndOffense("Vermont", offense);
        data.VT.number= numberOffenses;
        data.VT.fill = classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Virginia"){
        numberOffenses = numberOfTotalOffensesForStateAndOffense("Virginia", offense);
        data.VA.number= numberOffenses;
        data.VA.fill = classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Washington"){
        numberOffenses = numberOfTotalOffensesForStateAndOffense("Washington", offense);
        data.WA.number= numberOffenses;
        data.WA.fill = classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "West Virginia"){
        numberOffenses = numberOfTotalOffensesForStateAndOffense("West Virginia", offense);
        data.WV.number= numberOffenses;
        data.WV.fill = classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Wisconsin"){
        numberOffenses = numberOfTotalOffensesForStateAndOffense("Wisconsin", offense);
        data.WI.number= numberOffenses;
        data.WI.fill = classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Wyoming"){
        numberOffenses = numberOfTotalOffensesForStateAndOffense("Wyoming", offense);
        data.WY.number= numberOffenses;
        data.WY.fill = classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Columbia"){
        numberOffenses = numberOfTotalOffensesForStateAndOffense("Columbia", offense);
        data.DC2.number= numberOffenses;
        data.DC2.fill = classifyColors(numberOffenses,min,max);
      }
    };
    return data;
  }

export function populateMapNumbersByYear(populationNumbers, year){
    var data = statesCustomConfig();
    var max = mostOffensesByYear(year)[1];
    var min = leastOffensesByYear(year)[1];
    var numberOffenses;
    for (var i = 0; i < populationNumbers.length; i++){
      var stateData = populationNumbers[i];
      if (stateData.state === "Alabama"){
        numberOffenses = numberOfTotalOffensesForStateAndYear("Alabama", year);
        data.AL.number =numberOffenses;
        data.AL.fill = classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Alaska"){
        numberOffenses = numberOfTotalOffensesForStateAndYear("Alaska", year);
        data.AK.number= numberOffenses;
        data.AK.fill = classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Arizona"){
        numberOffenses = numberOfTotalOffensesForStateAndYear("Arizona", year);
        data.AZ.number =numberOffenses;
        data.AZ.fill = classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Arkansas"){
        numberOffenses = numberOfTotalOffensesForStateAndYear("Arkansas", year);
        data.AR.number= numberOffenses;
        data.AR.fill = classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "California"){
        numberOffenses = numberOfTotalOffensesForStateAndYear("California", year);
        data.CA.number= numberOffenses;
        data.CA.fill = classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Colorado"){
        numberOffenses = numberOfTotalOffensesForStateAndYear("Colorado", year);
        data.CO.number= numberOffenses;
        data.CO.fill = classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Connecticut"){
        numberOffenses = numberOfTotalOffensesForStateAndYear("Connecticut", year);
        data.CT.number= numberOffenses;
        data.CT.fill = classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Delaware"){
        numberOffenses = numberOfTotalOffensesForStateAndYear("Delaware", year);
        data.DE.number= numberOffenses;
        data.DE.fill = classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Florida"){
        numberOffenses = numberOfTotalOffensesForStateAndYear("Florida", year);
        data.FL.number= numberOffenses;
        data.FL.fill = classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Georgia"){
        numberOffenses = numberOfTotalOffensesForStateAndYear("Georgia", year);
        data.GA.number= numberOffenses;
        data.GA.fill = classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Hawaii"){
        numberOffenses = numberOfTotalOffensesForStateAndYear("Hawaii", year);
        data.HI.number= numberOffenses;
        data.HI.fill = classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Idaho"){
        numberOffenses = numberOfTotalOffensesForStateAndYear("Idaho", year);
        data.ID.number= numberOffenses;
        data.ID.fill = classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Illinois"){
        numberOffenses = numberOfTotalOffensesForStateAndYear("Illinois", year);
        data.IL.number= numberOffenses;
        data.IL.fill = classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Indiana"){
        numberOffenses = numberOfTotalOffensesForStateAndYear("Indiana", year);
        data.IN.number= numberOffenses;
        data.IN.fill = classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Iowa"){
        numberOffenses = numberOfTotalOffensesForStateAndYear("Iowa", year);
        data.IA.number= numberOffenses;
        data.IA.fill = classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Kansas"){
        numberOffenses = numberOfTotalOffensesForStateAndYear("Kansas", year);
        data.KS.number= numberOffenses;
        data.KS.fill = classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Kentucky"){
        numberOffenses = numberOfTotalOffensesForStateAndYear("Kentucky", year);
        data.KY.number= numberOffenses;
        data.KY.fill = classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Louisiana"){
        numberOffenses = numberOfTotalOffensesForStateAndYear("Louisiana", year);
        data.LA.number= numberOffenses;
        data.LA.fill = classifyColors(stateData.offenseQuantity,min,max);
      } else
      if (stateData.state === "Maine"){
        numberOffenses = numberOfTotalOffensesForStateAndYear("Maine", year);
        data.ME.number= numberOffenses;
        data.ME.fill = classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Maryland"){
        numberOffenses = numberOfTotalOffensesForStateAndYear("Maryland", year);
        data.MD.number= numberOffenses;
        data.MD.fill = classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Massachusetts"){
        numberOffenses = numberOfTotalOffensesForStateAndYear("Massachusetts", year);
        data.MA.number= numberOffenses;
        data.MA.fill = classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Michigan"){
        numberOffenses = numberOfTotalOffensesForStateAndYear("Michigan", year);
        data.MI.number= numberOffenses;
        data.MI.fill = classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Minnesota"){
        numberOffenses = numberOfTotalOffensesForStateAndYear("Minnesota", year);
        data.MN.number= numberOffenses;
        data.MN.fill = classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Mississippi"){
        numberOffenses = numberOfTotalOffensesForStateAndYear("Mississippi", year);
        data.MS.number= numberOffenses;
        data.MS.fill = classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Missouri"){
        numberOffenses = numberOfTotalOffensesForStateAndYear("Missouri", year);
        data.MO.number= numberOffenses;
        data.MO.fill = classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Montana"){
        numberOffenses = numberOfTotalOffensesForStateAndYear("Montana", year);
        data.MT.number= numberOffenses;
        data.MT.fill = classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Nebraska"){
        numberOffenses = numberOfTotalOffensesForStateAndYear("Nebraska", year);
        data.NE.number= numberOffenses;
        data.NE.fill = classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Nevada"){
        numberOffenses = numberOfTotalOffensesForStateAndYear("Nevada", year);
        data.NV.number= numberOffenses;
        data.NV.fill = classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Hampshire"){
        numberOffenses = numberOfTotalOffensesForStateAndYear("Hampshire", year);
        data.NH.number= numberOffenses;
        data.NH.fill = classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "New Jersey"){
        numberOffenses = numberOfTotalOffensesForStateAndYear("New Jersey", year);
        data.NJ.number= numberOffenses;
        data.NJ.fill = classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "New Mexico"){
        numberOffenses = numberOfTotalOffensesForStateAndYear("New Mexico", year);
        data.NM.number= numberOffenses;
        data.NM.fill = classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "New York"){
        numberOffenses = numberOfTotalOffensesForStateAndYear("New York", year);
        data.NY.number= numberOffenses;
        data.NY.fill = classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "North Carolina"){
        numberOffenses = numberOfTotalOffensesForStateAndYear("North Carolina", year);
        data.NC.number= numberOffenses;
        data.NC.fill = classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "North Dakota"){
        numberOffenses = numberOfTotalOffensesForStateAndYear("North Dakota", year);
        data.ND.number= numberOffenses;
        data.ND.fill = classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Ohio"){
        numberOffenses = numberOfTotalOffensesForStateAndYear("Ohio", year);
        data.OH.number= numberOffenses;
        data.OH.fill = classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Oklahoma"){
        numberOffenses = numberOfTotalOffensesForStateAndYear("Oklahoma", year);
        data.OK.number= numberOffenses;
        data.OK.fill = classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Oregon"){
        numberOffenses = numberOfTotalOffensesForStateAndYear("Oregon", year);
        data.OR.number= numberOffenses;
        data.OR.fill = classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Pennsylvania"){
        numberOffenses = numberOfTotalOffensesForStateAndYear("Pennsylvania", year);
        data.PA.number= numberOffenses;
        data.PA.fill = classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Rhode Island"){
        numberOffenses = numberOfTotalOffensesForStateAndYear("Rhode Island", year);
        data.RI.number= numberOffenses;
        data.RI.fill = classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "South Carolina"){
        numberOffenses = numberOfTotalOffensesForStateAndYear("South Carolina", year);
        data.SC.number= numberOffenses;
        data.SC.fill = classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "South Dakota"){
        numberOffenses = numberOfTotalOffensesForStateAndYear("South Dakota", year);
        data.SD.number= numberOffenses;
        data.SD.fill = classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Tennessee"){
        numberOffenses = numberOfTotalOffensesForStateAndYear("Tennessee", year);
        data.TN.number= numberOffenses;
        data.TN.fill = classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Texas"){
        numberOffenses = numberOfTotalOffensesForStateAndYear("Texas", year);
        data.TX.number= numberOffenses;
        data.TX.fill = classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Utah"){
        numberOffenses = numberOfTotalOffensesForStateAndYear("Utah", year);
        data.UT.number= numberOffenses;
        data.UT.fill = classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Vermont"){
        numberOffenses = numberOfTotalOffensesForStateAndYear("Vermont", year);
        data.VT.number= numberOffenses;
        data.VT.fill = classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Virginia"){
        numberOffenses = numberOfTotalOffensesForStateAndYear("Virginia", year);
        data.VA.number= numberOffenses;
        data.VA.fill = classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Washington"){
        numberOffenses = numberOfTotalOffensesForStateAndYear("Washington", year);
        data.WA.number= numberOffenses;
        data.WA.fill = classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "West Virginia"){
        numberOffenses = numberOfTotalOffensesForStateAndYear("West Virginia", year);
        data.WV.number= numberOffenses;
        data.WV.fill = classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Wisconsin"){
        numberOffenses = numberOfTotalOffensesForStateAndYear("Wisconsin", year);
        data.WI.number= numberOffenses;
        data.WI.fill = classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Wyoming"){
        numberOffenses = numberOfTotalOffensesForStateAndYear("Wyoming", year);
        data.WY.number= numberOffenses;
        data.WY.fill = classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Columbia"){
        numberOffenses = numberOfTotalOffensesForStateAndYear("Columbia", year);
        data.DC2.number= numberOffenses;
        data.DC2.fill = classifyColors(numberOffenses,min,max);
      }
    };
    return data;
  }

export function populateMapNumbers(populationNumbers){
    var data = statesCustomConfig();
    var max = mostOffenses()[1];
    var min = leastOffenses()[1];
    var numberOffenses;
    for (var i = 0; i < populationNumbers.length; i++){
      var stateData = populationNumbers[i];
      if (stateData.state === "Alabama"){
        numberOffenses = numberOfTotalOffensesForState("Alabama");
        data.AL.number =numberOffenses;
        data.AL.fill = classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Alaska"){
        numberOffenses = numberOfTotalOffensesForState("Arizona");
        data.AK.number= numberOffenses;
        data.AK.fill = classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Arizona"){
        numberOffenses = numberOfTotalOffensesForState("Arizona");
        data.AZ.number =numberOffenses;
        data.AZ.fill = classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Arkansas"){
        numberOffenses = numberOfTotalOffensesForState("Arkansas");
        data.AR.number= numberOffenses;
        data.AR.fill = classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "California"){
        numberOffenses = numberOfTotalOffensesForState("California");
        data.CA.number= numberOffenses;
        data.CA.fill = classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Colorado"){
        numberOffenses = numberOfTotalOffensesForState("Colorado");
        data.CO.number= numberOffenses;
        data.CO.fill = classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Connecticut"){
        numberOffenses = numberOfTotalOffensesForState("Connecticut");
        data.CT.number= numberOffenses;
        data.CT.fill = classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Delaware"){
        numberOffenses = numberOfTotalOffensesForState("Delaware");
        data.DE.number= numberOffenses;
        data.DE.fill = classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Florida"){
        numberOffenses = numberOfTotalOffensesForState("Florida");
        data.FL.number= numberOffenses;
        data.FL.fill = classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Georgia"){
        numberOffenses = numberOfTotalOffensesForState("Georgia");
        data.GA.number= numberOffenses;
        data.GA.fill = classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Hawaii"){
        numberOffenses = numberOfTotalOffensesForState("Hawaii");
        data.HI.number= numberOffenses;
        data.HI.fill = classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Idaho"){
        numberOffenses = numberOfTotalOffensesForState("Idaho");
        data.ID.number= numberOffenses;
        data.ID.fill = classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Illinois"){
        numberOffenses = numberOfTotalOffensesForState("Illinois");
        data.IL.number= numberOffenses;
        data.IL.fill = classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Indiana"){
        numberOffenses = numberOfTotalOffensesForState("Indiana");
        data.IN.number= numberOffenses;
        data.IN.fill = classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Iowa"){
        numberOffenses = numberOfTotalOffensesForState("Iowa");
        data.IA.number= numberOffenses;
        data.IA.fill = classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Kansas"){
        numberOffenses = numberOfTotalOffensesForState("Kansas");
        data.KS.number= numberOffenses;
        data.KS.fill = classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Kentucky"){
        numberOffenses = numberOfTotalOffensesForState("Kentucky");
        data.KY.number= numberOffenses;
        data.KY.fill = classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Louisiana"){
        numberOffenses = numberOfTotalOffensesForState("Louisiana");
        data.LA.number= numberOffenses;
        data.LA.fill = classifyColors(stateData.offenseQuantity,min,max);
      } else
      if (stateData.state === "Maine"){
        numberOffenses = numberOfTotalOffensesForState("Maine");
        data.ME.number= numberOffenses;
        data.ME.fill = classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Maryland"){
        numberOffenses = numberOfTotalOffensesForState("Maryland");
        data.MD.number= numberOffenses;
        data.MD.fill = classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Massachusetts"){
        numberOffenses = numberOfTotalOffensesForState("Massachusetts");
        data.MA.number= numberOffenses;
        data.MA.fill = classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Michigan"){
        numberOffenses = numberOfTotalOffensesForState("Michigan");
        data.MI.number= numberOffenses;
        data.MI.fill = classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Minnesota"){
        numberOffenses = numberOfTotalOffensesForState("Minnesota");
        data.MN.number= numberOffenses;
        data.MN.fill = classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Mississippi"){
        numberOffenses = numberOfTotalOffensesForState("Mississippi");
        data.MS.number= numberOffenses;
        data.MS.fill = classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Missouri"){
        numberOffenses = numberOfTotalOffensesForState("Missouri");
        data.MO.number= numberOffenses;
        data.MO.fill = classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Montana"){
        numberOffenses = numberOfTotalOffensesForState("Montana");
        data.MT.number= numberOffenses;
        data.MT.fill = classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Nebraska"){
        numberOffenses = numberOfTotalOffensesForState("Nebraska");
        data.NE.number= numberOffenses;
        data.NE.fill = classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Nevada"){
        numberOffenses = numberOfTotalOffensesForState("Nevada");
        data.NV.number= numberOffenses;
        data.NV.fill = classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Hampshire"){
        numberOffenses = numberOfTotalOffensesForState("Hampshire");
        data.NH.number= numberOffenses;
        data.NH.fill = classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "New Jersey"){
        numberOffenses = numberOfTotalOffensesForState("New Jersey");
        data.NJ.number= numberOffenses;
        data.NJ.fill = classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "New Mexico"){
        numberOffenses = numberOfTotalOffensesForState("New Mexico");
        data.NM.number= numberOffenses;
        data.NM.fill = classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "New York"){
        numberOffenses = numberOfTotalOffensesForState("New York");
        data.NY.number= numberOffenses;
        data.NY.fill = classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "North Carolina"){
        numberOffenses = numberOfTotalOffensesForState("North Carolina");
        data.NC.number= numberOffenses;
        data.NC.fill = classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "North Dakota"){
        numberOffenses = numberOfTotalOffensesForState("North Dakota");
        data.ND.number= numberOffenses;
        data.ND.fill = classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Ohio"){
        numberOffenses = numberOfTotalOffensesForState("Ohio");
        data.OH.number= numberOffenses;
        data.OH.fill = classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Oklahoma"){
        numberOffenses = numberOfTotalOffensesForState("Oklahoma");
        data.OK.number= numberOffenses;
        data.OK.fill = classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Oregon"){
        numberOffenses = numberOfTotalOffensesForState("Oregon");
        data.OR.number= numberOffenses;
        data.OR.fill = classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Pennsylvania"){
        numberOffenses = numberOfTotalOffensesForState("Pennsylvania");
        data.PA.number= numberOffenses;
        data.PA.fill = classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Rhode Island"){
        numberOffenses = numberOfTotalOffensesForState("Rhode Island");
        data.RI.number= numberOffenses;
        data.RI.fill = classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "South Carolina"){
        numberOffenses = numberOfTotalOffensesForState("South Carolina");
        data.SC.number= numberOffenses;
        data.SC.fill = classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "South Dakota"){
        numberOffenses = numberOfTotalOffensesForState("South Dakota");
        data.SD.number= numberOffenses;
        data.SD.fill = classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Tennessee"){
        numberOffenses = numberOfTotalOffensesForState("Tennessee");
        data.TN.number= numberOffenses;
        data.TN.fill = classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Texas"){
        numberOffenses = numberOfTotalOffensesForState("Texas");
        data.TX.number= numberOffenses;
        data.TX.fill = classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Utah"){
        numberOffenses = numberOfTotalOffensesForState("Utah");
        data.UT.number= numberOffenses;
        data.UT.fill = classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Vermont"){
        numberOffenses = numberOfTotalOffensesForState("Vermont");
        data.VT.number= numberOffenses;
        data.VT.fill = classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Virginia"){
        numberOffenses = numberOfTotalOffensesForState("Virginia");
        data.VA.number= numberOffenses;
        data.VA.fill = classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Washington"){
        numberOffenses = numberOfTotalOffensesForState("Washington");
        data.WA.number= numberOffenses;
        data.WA.fill = classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "West Virginia"){
        numberOffenses = numberOfTotalOffensesForState("West Virginia");
        data.WV.number= numberOffenses;
        data.WV.fill = classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Wisconsin"){
        numberOffenses = numberOfTotalOffensesForState("Wisconsin");
        data.WI.number= numberOffenses;
        data.WI.fill = classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Wyoming"){
        numberOffenses = numberOfTotalOffensesForState("Wyoming");
        data.WY.number= numberOffenses;
        data.WY.fill = classifyColors(numberOffenses,min,max);
      } else
      if (stateData.state === "Columbia"){
        numberOffenses = numberOfTotalOffensesForState("Columbia");
        data.DC2.number= numberOffenses;
        data.DC2.fill = classifyColors(numberOffenses,min,max);
      }
    };
    return data;
  }