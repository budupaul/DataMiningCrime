import React from 'react';
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';

const offenses = [
    { label: "Murder and nonnegligent Manslaughter", value: 2000 },
    { label: "Legacy rape", value: 2001 },
    { label: "Revised rape", value: 2002 },
    { label: "Robbery", value: 2003 },
    { label: "Aggravated assault", value: 2004 },
    { label: "Property crime total", value: 2005},
    { label: "Burglary", value: 2006 },
    { label: "Larceny-theft", value: 2007 },
    { label: "Motor vehicle theft", value: 2008 },
    { label: "Violent Crime rate", value: 2009 },
    { label: "Murder and nonnegligent manslaughter rate", value: 2010 },
    { label: "Legacy rape rate", value: 2011},
    { label: "Revised rape rate", value: 2012 },
    { label: "Robbery rate", value: 2013},
    { label: "Aggravated assault rate", value: 2014 },
    { label: "Property crime rate", value: 1 },
    { label: "Burglary rate", value: 20312 },
    { label: "Motor vehicle theft rate", value: 143 }
    ];

const DropdownYears = () => (
    <div className="container">
        <div className="row">
            <p>Select the offense:</p>
            <div className="col-md-4"></div>
            <div className="col-md-4">
                <Select options={ offenses } />
            </div>
            <div className="col-md-4"></div>
        </div>
    </div>
);

export default DropdownYears