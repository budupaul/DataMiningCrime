import { crimeData } from './data';

//This function takes an offense type and returns state with the highest count of offeses and the count of offenses 
//Used for data expressed in number of incidents, like "Robbery"
export function mostOffensesByType(offenseType) {
    var maxCrimes = 0;
    var state;
    for (var i = 0; i < crimeData.crimesStateYear.length; i++) {
        var stateData = crimeData.crimesStateYear[i].data;
        var tempMax = 0;
        for (var j = 0; j < stateData.length; j++) {
            tempMax += stateData[j][offenseType];
        }
        if (tempMax > maxCrimes) {
            maxCrimes = tempMax;
            state = crimeData.crimesStateYear[i].state;
        }
    }
    return [state, maxCrimes];
}
//This function takes an offense type and returns state with the lowest count of offeses and the count of offenses 
//Used for data expressed in number of incidents, like "Robbery"
export function leastOffensesByType(offenseType) {
    var minCrimes = Number.MAX_SAFE_INTEGER;
    var state;
    for (var i = 0; i < crimeData.crimesStateYear.length; i++) {
        var stateData = crimeData.crimesStateYear[i].data;
        var tempMin = 0;
        for (var j = 0; j < stateData.length; j++) {
            tempMin += stateData[j][offenseType];
        }
        if (tempMin < minCrimes) {
            minCrimes = tempMin;
            state = crimeData.crimesStateYear[i].state;
        }
    }
    return [state, minCrimes];
}
//This function takes a year and returns state with the highest count of offeses and the count of offenses 
//Used for data expressed in number of incidents, like "Robbery"
export function mostOffensesByYear(year) {
    var maxCrimes = 0;
    var state;
    var offenses = ["Violent crime total", 
    "Murder and nonnegligent Manslaughter",
    "Legacy rape",
    "Revised rape",
    "Robbery",
    "Aggravated assault",
    "Property crime total",
    "Burglary",
    "Larceny-theft",
    "Motor vehicle theft"];
    for (var i = 0; i < crimeData.crimesStateYear.length; i++) {
        var stateData = crimeData.crimesStateYear[i].data;
        var tempMax = 0;
        for (var j = 0; j < stateData.length; j++) {
            if (stateData[j]["Year"] == year){
                for(var k = 0; k < offenses.length; k++){
                    tempMax += stateData[j][offenses[k]];
                }
            }
        }
        if (tempMax > maxCrimes) {
            maxCrimes = tempMax;
            state = crimeData.crimesStateYear[i].state;
        }
    }
    return [state, maxCrimes];
}
//This function takes a year and returns state with the lowest count of offeses and the count of offenses 
//Used for data expressed in number of incidents, like "Robbery"
export function leastOffensesByYear(year) {
    var minCrimes = Number.MAX_SAFE_INTEGER;
    var state;
    var offenses = ["Violent crime total", 
    "Murder and nonnegligent Manslaughter",
    "Legacy rape",
    "Revised rape",
    "Robbery",
    "Aggravated assault",
    "Property crime total",
    "Burglary",
    "Larceny-theft",
    "Motor vehicle theft"];
    for (var i = 0; i < crimeData.crimesStateYear.length; i++) {
        var stateData = crimeData.crimesStateYear[i].data;
        var tempMin = 0;
        for (var j = 0; j < stateData.length; j++) {
            if (stateData[j]["Year"] == year){
                for(var k = 0; k < offenses.length; k++){
                    tempMin += stateData[j][offenses[k]];
                }
            }
        }
        if (tempMin < minCrimes) {
            minCrimes = tempMin;
            state = crimeData.crimesStateYear[i].state;
        }
    }
    return [state, minCrimes];
}
//This function takes an offense type and returns state with the highest rate of offeses and the rate of offenses 
//Used for data expressed in rate of incidents, like "Legacy rape rate"
export function biggestOffenseRateAverageByType(offenseType) {
    var maxCrimes = 0;
    var state;
    for (var i = 0; i < crimeData.crimesStateYear.length; i++) {
        var stateData = crimeData.crimesStateYear[i].data;
        var tempMax = 0;
        for (var j = 0; j < stateData.length; j++) {
            tempMax += stateData[j][offenseType];
        }
        if (tempMax > maxCrimes) {
            maxCrimes = tempMax;
            state = crimeData.crimesStateYear[i].state;
        }
    }
    return [state, maxCrimes/15];
}

//Same as before, but for one specific year
export function mostOffensesTotalByYearAndType(year,offenseType) {
    var maxCrimes = 0;
    var state;
    for (var i = 0; i < crimeData.crimesStateYear.length; i++) {
        var stateData = crimeData.crimesStateYear[i].data.filter( data => data.Year === year)[0];
        if (maxCrimes < stateData[offenseType]){
            maxCrimes =  stateData[offenseType];
            state = crimeData.crimesStateYear[i].state;
        }
    }
    return [state, maxCrimes];
}

export function leastOffensesTotalByYearAndType(year,offenseType) {
    var minCrimes = crimeData.crimesStateYear[0].data.filter( data => data.Year === year)[0][offenseType];
    var state;
    for (var i = 1; i < crimeData.crimesStateYear.length; i++) {
        var stateData = crimeData.crimesStateYear[i].data.filter( data => data.Year === year)[0];
        if (minCrimes > stateData[offenseType]){
            minCrimes =  stateData[offenseType];
            state = crimeData.crimesStateYear[i].state;
        }
    }
    return [state, minCrimes];
}

//This function takes returns state with the highest count of offenses and the count of offenses 
//Used for data expressed in number of incidents, like "Robbery"
export function mostOffenses() {
    var maxCrimes = 0;
    var state;
    var offenses = ["Violent crime total", 
                "Murder and nonnegligent Manslaughter",
                "Legacy rape",
                "Revised rape",
                "Robbery",
                "Aggravated assault",
                "Property crime total",
                "Burglary",
                "Larceny-theft",
                "Motor vehicle theft"];
    for (var i = 0; i < crimeData.crimesStateYear.length; i++) {
        var stateData = crimeData.crimesStateYear[i].data;
        var tempMax = 0;
        for (var j = 0; j < stateData.length; j++) {
            for(var k = 0; k < offenses.length; k++){
                tempMax += stateData[j][offenses[k]];
            }
        }
        if (tempMax > maxCrimes) {
            maxCrimes = tempMax;
            state = crimeData.crimesStateYear[i].state;
        }
    }
    return [state, maxCrimes];
}
//This function returns state with the lowest count of offenses and the count of offenses 
//Used for data expressed in number of incidents, like "Robbery"
export function leastOffenses() {
    var minCrimes = Number.MAX_SAFE_INTEGER;
    var state;
    var offenses = ["Violent crime total", 
    "Murder and nonnegligent Manslaughter",
    "Legacy rape",
    "Revised rape",
    "Robbery",
    "Aggravated assault",
    "Property crime total",
    "Burglary",
    "Larceny-theft",
    "Motor vehicle theft"];
    for (var i = 0; i < crimeData.crimesStateYear.length; i++) {
        var stateData = crimeData.crimesStateYear[i].data;
        var tempMin = 0;
        for (var j = 0; j < stateData.length; j++) {
            for(var k = 0; k < offenses.length; k++){
                tempMin += stateData[j][offenses[k]];
            }
        }
        if (tempMin < minCrimes) {
            minCrimes = tempMin;
            state = crimeData.crimesStateYear[i].state;
        }
    }
    return [state, minCrimes];
}

//This function returns all the data for a specific state
export function allDataByState(state) {
    return crimeData.crimesStateYear.filter( stateData => stateData.state === state)[0];
}

//This function returns all the data for all the states
export function allData(state) {
    return crimeData.crimesStateYear[0];
}

//Same as before, for a specific year
export function allDataByStateAndYear(state, year) {
    var result ={
        "state": state,
        "data": crimeData.crimesStateYear.filter( stateData => stateData.state === state)[0].data.filter( data => data.Year === year)[0]
    }
    return result;
}

//Return the data for all the states for one specific year
export function allDataByYear( year) {
    var result = [];
    for (var i = 0; i < crimeData.crimesStateYear.length; i++) {
        var state = crimeData.crimesStateYear[i].state;
        var stateData = crimeData.crimesStateYear[i].data.filter( data => data.Year === year)[0];
        result.push({
            "state": state,
            "data": stateData
        })
    }
    return result;
}

//Data for all states and years for one offense type
export function allStateDataTotalByType(offenseType) {
    var result = [];
    for (var i = 0; i < crimeData.crimesStateYear.length; i++) {
        var state = crimeData.crimesStateYear[i].state;
        var stateData = crimeData.crimesStateYear[i].data;
        var offenseQuantity = 0;
        for (var j = 0; j < stateData.length; j++) {
            offenseQuantity += stateData[j][offenseType];
        }
        result.push({
            "state":state,
            "offenseQuantity": offenseQuantity
        })
    }
    return result;
}

//Data for all states for a specific year and offense type
export function allStateDataTotalByTypeAndYear(offenseType, year) {
    var result = [];
    for (var i = 0; i < crimeData.crimesStateYear.length; i++) {
        var state = crimeData.crimesStateYear[i].state;
        var stateData = crimeData.crimesStateYear[i].data.filter( data => data.Year === year)[0];
        var offenseQuantity = stateData[offenseType];
        var element = {
            "state":state,
            "offenseQuantity": offenseQuantity
        }
        result.push(element)
    }
    return result;
}

//This function takes a state and a offense and returns the number of offenses of that type that occurred in all the years
export function numberOfTotalOffensesForStateAndOffense(state, offense) {

    var nrCrimes = 0;
    var crimes = [];

    crimes = allDataByState(state);

    for (var i = 0; i < crimes.length; i++) {
        nrCrimes += crimes[i].data.offenses[offense];
    }
    return nrCrimes;
}

//This function takes a state and a year and returns the total number of offenses that occurred for that year
export function numberOfTotalOffensesForStateAndYear(state, year) {

    var nrCrimes = 0;
    var crimes = [];

    var offenses = ["Violent crime total", 
                "Murder and nonnegligent Manslaughter",
                "Legacy rape",
                "Revised rape",
                "Robbery",
                "Aggravated assault",
                "Property crime total",
                "Burglary",
                "Larceny-theft",
                "Motor vehicle theft"];

    crimes = allDataByStateAndYear(state, year);

    for (var i = 0; i < crimes.length; i++) {
        for (var j = 0; j < offenses.length; j++) {
            nrCrimes += crimes[i].data.offenses[j];
        }
    }
    return nrCrimes;
}

//This function takes a state and returns the total number of offenses that occurred for all the years and all the offenses
export function numberOfTotalOffensesForState(state) {

    var nrCrimes = 0;
    var crimes = [];

    var offenses = ["Violent crime total", 
                "Murder and nonnegligent Manslaughter",
                "Legacy rape",
                "Revised rape",
                "Robbery",
                "Aggravated assault",
                "Property crime total",
                "Burglary",
                "Larceny-theft",
                "Motor vehicle theft"];

    crimes = allDataByState(state);

    for (var i = 0; i < crimes.length; i++) {
        for (var j = 0; j < offenses.length; j++) {
            nrCrimes += crimes[i].data.offenses[j];
        }
    }
    return nrCrimes;
}