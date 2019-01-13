import React from 'react';
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';

const years = [
    { label: "2000", value: 2000 },
    { label: "2001", value: 2001 },
    { label: "2002", value: 2002 },
    { label: "2003", value: 2003 },
    { label: "2004", value: 2004 },
    { label: "2005", value: 2005},
    { label: "2006", value: 2006 },
    { label: "2007", value: 2007 },
    { label: "2008", value: 2008 },
    { label: "2009", value: 2009 },
    { label: "2010", value: 2010 },
    { label: "2011", value: 2011},
    { label: "2012", value: 2012 },
    { label: "2013", value: 2013},
    { label: "2014", value: 2014 },
    { label: "All years", value: 1 }
    ];

const DropdownYears = () => (
    <div className="container">
        <p>Select the year:</p>
        <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4">
                <Select options={ years } />
            </div>
            <div className="col-md-4"></div>
        </div>
    </div>
);

export default DropdownYears