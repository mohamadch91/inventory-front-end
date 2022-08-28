import WarningItem from "./WarningItem";
import React from "react";

import classes from "./Warnings.module.css";

const DUMMY = [{
    title: 'Oil facility',
    text: 'some new staff members are getting sick',
    date: '05:27 Mon'
},
    {
        title: 'Hospital',
        text: 'The number of services that must be done in 7 days ( 0 ) Maintenance Service',
        date: '05:27 Mon'
    },
    {
        title: 'Hospital',
        text: 'The number of services that were not performed on time ( 0 ) Maintenance Service',
        date: '05:27 Mon'
    },
    {
        title: 'Hospital',
        text: 'The number of services that were not performed on time ( 0 ) Maintenance Service',
        date: '05:27 Mon'
    },
    {
        title: 'Hospital',
        text: '\n' +
            'The number of items which the maintenance service is defined ( 0 ) Item',
        date: '05:27 Mon'
    }]
const Warnings = () => {

    return(
            <div className= {`card-body recent-activity ${classes.warnings}` } >
                <h4 className="card-title" >  Warnings</h4>
                <p className="card-description"> Warnings that need to be taken cared of </p>
                {DUMMY.map((item, index) => {
                    return <WarningItem key={index} title={item.title} text={item.text} date={item.date} />
                })}

            </div>
    )
}

export default Warnings;
